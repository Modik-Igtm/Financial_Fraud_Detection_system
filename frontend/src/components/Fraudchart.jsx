import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Fraudchart({ total, fraud }) {

  const safe = total - fraud;

  const pieData = {
    labels: ["Fraud", "Safe"],
    datasets: [
      {
        data: [fraud, safe],
        backgroundColor: [
          "#ef4444",
          "#22c55e"
        ]
      }
    ]
  };

  const barData = {
    labels: ["Fraud", "Safe"],
    datasets: [
      {
        label: "Transactions",
        data: [fraud, safe]
      }
    ]
  };

  return (

    <div
      style={{
        display: "flex",
        gap: "40px",
        marginTop: "30px",
        justifyContent: "space-around",
        flexWrap: "wrap"
      }}
    >

      <div style={{ width: "350px" }}>
        <Pie data={pieData} />
      </div>

      <div style={{ width: "450px" }}>
        <Bar data={barData} />
      </div>

    </div>

  );

}

export default Fraudchart;