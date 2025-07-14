export const CHART_COLORS = {
  redisLag: {
    border: "#3b82f6",
    background: "rgba(59, 130, 246, 0.2)",
  },
};

export const CHART_LABELS = {
  redisLag: "Redis Lag",
};

export const CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 1 },
    },
  },
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "x", // Pan on X-axis only
      },
      zoom: {
        wheel: {
          enabled: true, // Enable zooming with mouse wheel
        },
        pinch: {
          enabled: true, // Enable zooming on touch screens
        },
        mode: "x", // Zoom on X-axis only
      },
    },
  },
};
