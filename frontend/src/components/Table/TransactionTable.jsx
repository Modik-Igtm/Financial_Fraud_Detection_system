
import { useState } from "react";
import TransactionDrawer from "../Drawer/TransactionDrawer";
import { Search } from "lucide-react";

const transactions = [
  {
    id: "TRX001",
    name: "Rahul Sharma",
    amount: "₹15,200",
    status: "Safe",
    risk: "Low",
    date: "14 Jul 2026",
  },
  {
    id: "TRX002",
    name: "Priya Verma",
    amount: "₹95,000",
    status: "Fraud",
    risk: "High",
    date: "14 Jul 2026",
  },
  {
    id: "TRX003",
    name: "Amit Singh",
    amount: "₹2,400",
    status: "Safe",
    risk: "Low",
    date: "13 Jul 2026",
  },
  {
    id: "TRX004",
    name: "Sneha Gupta",
    amount: "₹52,300",
    status: "Fraud",
    risk: "Medium",
    date: "13 Jul 2026",
  },
  {
    id: "TRX005",
    name: "Karan Mehta",
    amount: "₹72,500",
    status: "Fraud",
    risk: "High",
    date: "12 Jul 2026",
  },
];

export default function TransactionTable() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(search.toLowerCase()) ||
    transaction.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-[#131D32]/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

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
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#1F2937] pl-10 pr-4 py-2 rounded-xl outline-none w-64"
            />

          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-gray-700 text-gray-400">

                <th className="py-4">Transaction ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Risk</th>
                <th>Date</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredTransactions.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-gray-800 hover:bg-[#1A243A] transition"
                >

                  <td className="py-5 font-medium">
                    {item.id}
                  </td>

                  <td>{item.name}</td>

                  <td>{item.amount}</td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "Fraud"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.risk === "High"
                          ? "bg-red-500/20 text-red-400"
                          : item.risk === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.risk}
                    </span>

                  </td>

                  <td>{item.date}</td>

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

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Transaction Drawer */}

      {selected && (
        <TransactionDrawer
          open={open}
          onClose={() => setOpen(false)}
          transaction={selected}
        />
      )}
    </>
  );
}