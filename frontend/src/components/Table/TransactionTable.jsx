
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import api from "../../services/api";
import TransactionDrawer from "../Drawer/TransactionDrawer";

export default function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get("/transactions/");
        setTransactions(response.data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
        setError("Unable to load transactions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter((item) =>
    item.transaction_id
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-[#131D32]/80 rounded-3xl p-6 text-gray-400">
        Loading transactions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#131D32]/80 rounded-3xl p-6 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#131D32]/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

          <h2 className="text-2xl font-semibold">
            Recent Transactions
          </h2>

          <div className="relative">

            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search transaction ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#1F2937] pl-10 pr-4 py-2 rounded-xl outline-none w-full md:w-64"
            />

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-gray-700 text-gray-400">

                <th className="py-4">Transaction ID</th>
                <th>Amount</th>
                <th>Prediction</th>
                <th>Confidence</th>
                <th>Risk Score</th>
                <th>Priority</th>
                <th>Case Status</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredTransactions.length === 0 ? (

                <tr>
                  <td
                    colSpan="8"
                    className="py-8 text-center text-gray-400"
                  >
                    No transactions found.
                  </td>
                </tr>

              ) : (

                filteredTransactions.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b border-gray-800 hover:bg-[#1A243A] transition"
                  >

                    {/* Transaction ID */}
                    <td className="py-5 font-medium">
                      {item.transaction_id}
                    </td>

                    {/* Amount */}
                    <td>
                      ₹{Number(item.amount || 0).toLocaleString("en-IN")}
                    </td>

                    {/* Prediction */}
                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.prediction === "Fraud"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {item.prediction}
                      </span>

                    </td>

                    {/* Confidence */}
                    <td>
                      {Number(item.confidence || 0).toFixed(2)}%
                    </td>

                    {/* Risk Score */}
                    <td>
                      {item.risk_score}/100
                    </td>

                    {/* Priority */}
                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.priority === "Critical"
                            ? "bg-red-500/20 text-red-400"
                            : item.priority === "High"
                            ? "bg-orange-500/20 text-orange-400"
                            : item.priority === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {item.priority}
                      </span>

                    </td>

                    {/* Case Status */}
                    <td>
                      {item.status}
                    </td>

                    {/* Action */}
                    <td>

                      <button
                        onClick={() => {
                          setSelected(item);
                          setOpen(true);
                        }}
                        className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-xl transition font-medium"
                      >
                        View
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

      {selected && (
        <TransactionDrawer
          open={open}
          onClose={() => {
            setOpen(false);
            setSelected(null);
          }}
          transaction={selected}
        />
      )}

    </>
  );
}