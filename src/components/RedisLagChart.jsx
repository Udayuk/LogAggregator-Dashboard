import { CHART_LABELS, CHART_OPTIONS, CHART_COLORS } from "utils/chartConfig";
import zoomPlugin from "chartjs-plugin-zoom";
import { Chart } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, zoomPlugin);

const formatToMinute = (ts) => {
  const date = new Date(ts);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hour = `${date.getHours()}`.padStart(2, "0");
  const minute = `${date.getMinutes()}`.padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute}`;
};

const RedisChartLag = ({ data }) => {
  const grouped = {};
  data.forEach((d) => {
    const timeKey = formatToMinute(d.capturedAt);
    if (!grouped[timeKey]) grouped[timeKey] = [];
    grouped[timeKey].push(d.pendingInRedisStream);
  });
  //   const labels = data.map((d) => new Date(d.capturedAt).toLocaleDateString());
  //   const lag = data.map((d) => d.pendingInRedisStream);
  const labels = Object.keys(grouped).sort();
  const lag = labels.map((label) => {
    const vals = grouped[label];
    return vals.reduce((a, b) => a + b);
  });
  const chartData = {
    labels,
    datasets: [
      {
        label: CHART_LABELS.redisLag,
        data: lag,
        fill: true,
        borderColor: CHART_COLORS.redisLag.border,
        backgroundColor: CHART_COLORS.redisLag.background,
        tension: 0.3,
        pointRadius: 2,
      },
    ],
  };
  return <Line data={chartData} options={CHART_OPTIONS} />;
};

export default RedisChartLag;
