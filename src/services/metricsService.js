import axios from "axios";

const BASE_URL = "http://localhost:8080";
export const fetchMetricsHistory = async (from, to, bucketTimeSecs) => {
    try{
        const response = await axios.get(`${BASE_URL}/metrics/history`,{
            params : {
                from, 
                to,
                bucketSizeSeconds : bucketTimeSecs,
            }
        });
        return response.data;
    }
    catch(error){
        console.log("Failed to fetch metrics history : ", error);
        throw error;
    }
}