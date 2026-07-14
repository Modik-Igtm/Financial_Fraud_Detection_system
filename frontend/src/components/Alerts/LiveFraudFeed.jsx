import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "Fraud",
    title: "High-risk transaction detected",
    description: "₹95,000 transferred from a new device.",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "Blocked",
    title: "Transaction blocked",
    description: "Account temporarily frozen for verification.",
    time: "8 min ago",
  },
  {
    id: 3,
    type: "Safe",
    title: "Transaction approved",
    description: "₹2,500 payment completed successfully.",
    time: "15 min ago",
  },
];

export default function LiveFraudFeed() {
  return (
    <div className="bg-[#131D32]/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Live Fraud Feed
      </h2>

      <div className="space-y-5">

        {alerts.map((alert) => (

          <div
            key={alert.id}
            className="bg-[#1A243A] rounded-2xl p-5 hover:bg-[#23314E] transition"
          >

            <div className="flex justify-between items-center">

              <div className="flex gap-3 items-center">

                {alert.type === "Fraud" && (
                  <ShieldAlert className="text-red-400" />
                )}

                {alert.type === "Blocked" && (
                  <AlertTriangle className="text-yellow-400" />
                )}

                {alert.type === "Safe" && (
                  <CheckCircle2 className="text-green-400" />
                )}

                <h3 className="font-semibold">
                  {alert.title}
                </h3>

              </div>

              <span className="text-sm text-gray-400">
                {alert.time}
              </span>

            </div>

            <p className="mt-3 text-gray-400">
              {alert.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}