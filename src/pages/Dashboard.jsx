import useMetrics from "hooks/useMetrics";
import Card from "../components/Card";
import {
  cardError,
  chartContainer,
  chartPlaceholder,
  gridTwoCols,
  sectionTitle,
  sectionWrapper,
} from "../utils/classnames";
import RedisChartLag from "components/RedisLagChart";

const Dashboard = () => {
  const { metrics, loading, error } = useMetrics();
  return (
    <div className={sectionWrapper}>
      <h1 className={sectionTitle}> System Metrics Dashboard</h1>
      <div className={gridTwoCols}>
        <Card title="Redis Lag">
          {loading ? (
            <div
              className={chartPlaceholder}
            ></div>
          ) : error ? (
            <div className={cardError}>Theres an Error! {error}</div>
          ) : (
            <div className={chartContainer}>
              <p>Loaded Successfully!</p>
              <RedisChartLag data={metrics} />
            </div>
          )}
        </Card>

        <Card title="Processed vs Failed Logs">
          <div className={chartPlaceholder} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
