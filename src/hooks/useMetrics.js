import { useEffect, useState } from "react";
import { fetchMetricsHistory } from "services/metricsService";

const useMetrics = (from, to, bucketTimeSecs) => {
    const [metrics, setMetrics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const load = async () => {
            try{
                const data = await fetchMetricsHistory(from, to, bucketTimeSecs);
                setMetrics(data);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        };
        load();
    }, []);

    return {metrics, loading, error};
    
};

export default useMetrics;