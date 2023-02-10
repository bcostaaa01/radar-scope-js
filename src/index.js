import Chart from "chart.js";

function createRadarChart(data, options) {
  const chartId = `radar-chart-${Math.random()
    .toString(36)
    .substring(2, 15)}`;
  const chartContainer = document.getElementById("div");
  chartContainer.innerHTML = `
        <canvas id="${chartId}"></canvas>
    `;
  const chartCanvas = chartContainer.querySelector(`#${chartId}`);
  const chart = new Chart(chartCanvas, {
    type: "radar",
    data: data,
    options: options,
  });
  return chartContainer;
}

module.exports = createRadarChart;
