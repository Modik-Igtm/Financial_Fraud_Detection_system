import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Credit Card",
    "UPI",
    "Net Banking",
    "Wallet"
  ],

  datasets: [
    {
      data: [45,30,15,10],
      backgroundColor:[
        "#00E5FF",
        "#7C3AED",
        "#EF4444",
        "#22C55E"
      ],
      borderWidth:0
    }
  ]
};

const options={
  plugins:{
    legend:{
      position:"bottom",
      labels:{
        color:"white"
      }
    }
  }
};

export default function FraudAnalytics(){

return(

<div className="bg-[#131D32]/80 backdrop-blur-xl rounded-3xl border border-cyan-500/10 p-6">

<h2 className="text-2xl font-semibold mb-6">
Fraud by Payment Method
</h2>

<Doughnut
data={data}
options={options}
/>

</div>

)

}