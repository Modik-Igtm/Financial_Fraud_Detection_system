import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

    datasets: [
        {
            label: "Fraud Cases",
            data: [20, 35, 28, 45, 38, 60, 42],
            borderColor: "#00E5FF",
            backgroundColor: "rgba(0,229,255,0.15)",
            tension: 0.4,
            fill: true,
            pointRadius: 4,
        },
    ],
};

const options = {
    responsive: true,

    plugins: {
        legend: {
            display: false,
        },
    },

    scales: {
        x: {
            ticks: {
                color: "#fff",
            },
            grid: {
                color: "#1f2937",
            },
        },

        y: {
            ticks: {
                color: "#fff",
            },
            grid: {
                color: "#1f2937",
            },
        },
    },
};

export default function FraudChart() {
    return (
        <div className="bg-[#131D32]/80 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/10">

            <h2 className="text-2xl font-semibold mb-6">
                Fraud Trend
            </h2>

            <Line data={data} options={options} />

        </div>
    );
}