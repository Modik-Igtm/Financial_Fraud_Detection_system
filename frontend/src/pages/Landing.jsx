
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">

        <h1 className="text-3xl font-bold text-blue-600">
          Sentinel AI
        </h1>

        <button
          onClick={() => window.location.href = "/dashboard"}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Access Command Center
        </button>

      </nav>

      {/* Hero */}

      <div className="max-w-7xl mx-auto px-10 pt-16 flex items-center justify-between">

        <div className="max-w-xl">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            AI Powered
            <br />
            Fraud Intelligence
          </motion.h1>

          <p className="mt-6 text-xl text-gray-600">

            Detect suspicious transactions.

            Investigate fraud.

            Protect digital payments using AI.

          </p>

          <button
            onClick={() => window.location.href = "/dashboard"}
            className="mt-8 flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
          >
            Launch Platform

            <ArrowRight size={20} />
          </button>

        </div>

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ duration: 1 }}

          className="bg-white shadow-2xl rounded-3xl p-10 w-[450px]"

        >

          <ShieldCheck
            size={70}
            className="text-blue-600"
          />

          <h2 className="text-3xl font-bold mt-6">

            Sentinel AI

          </h2>

          <p className="mt-4 text-gray-500">

            AI Security Operations Center

            for Digital Payments.

          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-slate-100 rounded-xl p-5">

              <h3 className="text-sm text-gray-500">
                Transactions
              </h3>

              <p className="text-2xl font-bold">
                2.4M
              </p>

            </div>

            <div className="bg-slate-100 rounded-xl p-5">

              <h3 className="text-sm text-gray-500">
                Frauds Blocked
              </h3>

              <p className="text-2xl font-bold text-red-500">
                132
              </p>

            </div>

            <div className="bg-slate-100 rounded-xl p-5">

              <h3 className="text-sm text-gray-500">
                Accuracy
              </h3>

              <p className="text-2xl font-bold text-green-500">
                99.8%
              </p>

            </div>

            <div className="bg-slate-100 rounded-xl p-5">

              <h3 className="text-sm text-gray-500">
                AI Status
              </h3>

              <p className="text-2xl font-bold text-blue-600">
                Active
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Landing;