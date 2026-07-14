import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function RiskGauge() {
  const value = 89;

  return (
    <div className="bg-[#131D32]/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6 h-full">

      <h2 className="text-xl font-semibold mb-6">
        AI Risk Score
      </h2>

      <div className="w-40 mx-auto">

        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            pathColor: "#00E5FF",
            textColor: "#ffffff",
            trailColor: "#243248",
          })}
        />

      </div>

      <div className="mt-6 text-center">

        <h2 className="text-red-400 text-2xl font-bold">
          HIGH
        </h2>

        <p className="text-gray-400 mt-2">
          Fraud activity is higher than normal.
        </p>

      </div>

    </div>
  );
}