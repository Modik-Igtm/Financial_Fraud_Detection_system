import { X, ShieldAlert } from "lucide-react";

export default function TransactionDrawer({
  open,
  onClose,
  transaction,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">

      <div className="w-[420px] bg-[#111827] h-full p-8 overflow-auto">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Transaction Details
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="mt-8 space-y-5">

          <div>
            <p className="text-gray-400">Transaction ID</p>
            <h3>{transaction.id}</h3>
          </div>

          <div>
            <p className="text-gray-400">Customer</p>
            <h3>{transaction.name}</h3>
          </div>

          <div>
            <p className="text-gray-400">Amount</p>
            <h3>{transaction.amount}</h3>
          </div>

          <div>
            <p className="text-gray-400">Risk Score</p>

            <div className="w-full bg-gray-700 rounded-full h-4 mt-3">

              <div
                className="bg-red-500 h-4 rounded-full"
                style={{ width: "94%" }}
              />

            </div>

            <p className="text-red-400 mt-2">
              High Risk
            </p>

          </div>

          <div>

            <div className="flex gap-3 items-center mb-4">

              <ShieldAlert className="text-red-400"/>

              <h3 className="font-semibold">
                AI Explanation
              </h3>

            </div>

            <ul className="space-y-3">

              <li>✔ Transaction amount exceeds average spending.</li>

              <li>✔ Login from unknown device.</li>

              <li>✔ Different city detected.</li>

              <li>✔ Multiple rapid transactions.</li>

            </ul>

          </div>

          <div className="bg-red-500/20 p-5 rounded-xl">

            <h3 className="text-red-400 font-bold">

              Recommendation

            </h3>

            <p className="mt-2">

              Freeze account and request customer verification.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}