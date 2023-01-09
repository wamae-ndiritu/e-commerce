import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 15, 25, 20],
    },
  ],
};
const PieChart = () => {
  return (
    <div>
      <Pie data={data} width={1000} height={1000}/>
    </div>
  );
};
export default PieChart;