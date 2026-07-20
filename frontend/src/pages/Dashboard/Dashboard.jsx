import { useEffect, useState } from "react";

import StatCard from "../../components/Cards/StatCard";
import FraudChart from "../../components/Charts/FraudChart";
import MiniAIChat from "../../components/AI/MiniAIChat";
import RiskGauge from "../../components/AI/RiskGauge";
import AISummary from "../../components/AI/AISummary";
import TransactionTable from "../../components/Table/TransactionTable";
import AIInvestigation from "../../components/Investigation/AIInvestigation";
import FraudAnalytics from "../../components/Charts/FraudAnalytics";
import LiveFraudFeed from "../../components/Alerts/LiveFraudFeed";

//import UploadBox from "../../components/upload/upload";

import api from "../../services/api";

import {
  CreditCard,
  ShieldAlert,
  CircleCheckBig,
  BrainCircuit,
} from "lucide-react";


export default function Dashboard() {

  // -----------------------------
  // Dashboard Summary State
  // -----------------------------

  const [summary, setSummary] = useState({
    total_transactions: 0,
    fraud_transactions: 0,
    safe_transactions: 0,
    critical_cases: 0,
    potential_loss_prevented: 0,
    average_risk_score: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Used to refresh dashboard after CSV upload
  const [refreshKey, setRefreshKey] = useState(0);


  // -----------------------------
  // Fetch Dashboard Summary
  // -----------------------------

  useEffect(() => {

    const fetchSummary = async () => {

      try {

        setLoading(true);

        const response = await api.get(
          "/dashboard/summary"
        );

        setSummary(response.data);

        setError("");

      } catch (err) {

        console.error(
          "Dashboard summary error:",
          err
        );

        setError(
          "Could not load dashboard data."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchSummary();

  }, [refreshKey]);


  // -----------------------------
  // Called after CSV upload
  // -----------------------------

  const handleUploadSuccess = () => {

    setRefreshKey(
      (previous) => previous + 1
    );

  };


  return (

    <div className="space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-4xl font-bold">
          Fraud Monitoring Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          AI-powered transaction monitoring and fraud investigation
        </p>

      </div>


      {/* ERROR MESSAGE */}

      {error && (

        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl">

          {error}

        </div>

      )}


      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      
      <StatCard
  title="Total Transactions"
  value={loading ? "..." : summary.total_transactions}
  icon={<CreditCard size={24} />}
/>

<StatCard
  title="Fraud Detected"
  value={loading ? "..." : summary.fraud_transactions}
  icon={<ShieldAlert size={24} />}
/>

<StatCard
  title="Safe Transactions"
  value={loading ? "..." : summary.safe_transactions}
  icon={<CircleCheckBig size={24} />}
/>

<StatCard
  title="Critical Cases"
  value={loading ? "..." : summary.critical_cases}
  icon={<BrainCircuit size={24} />}
/>

      </div>


      {/* BANKING INTELLIGENCE METRICS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-[#131D32]/80 border border-cyan-500/10 rounded-3xl p-6">

          <p className="text-gray-400">
            Potential Fraud Exposure
          </p>

          <h2 className="text-3xl font-bold mt-2">

            ₹
            {Number(
              summary.potential_loss_prevented || 0
            ).toLocaleString("en-IN")}

          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Total value of transactions classified as fraud
          </p>

        </div>


        <div className="bg-[#131D32]/80 border border-cyan-500/10 rounded-3xl p-6">

          <p className="text-gray-400">
            Average Risk Score
          </p>

          <h2 className="text-3xl font-bold mt-2">

            {Number(
              summary.average_risk_score || 0
            ).toFixed(1)}

            /100

          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Average risk across analyzed transactions
          </p>

        </div>

      </div>


      


      {/* FRAUD ANALYTICS */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">
          <FraudChart />
        </div>

        <div className="xl:col-span-4">
          <RiskGauge />
        </div>

      </div>


      {/* TRANSACTIONS */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">

          <TransactionTable
            key={refreshKey}
          />

        </div>

        <div className="xl:col-span-4">

          <AISummary />

        </div>

      </div>


      {/* INVESTIGATION */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-7">

          <AIInvestigation />

        </div>

        <div className="xl:col-span-5">

          <LiveFraudFeed />

        </div>

      </div>


      {/* ANALYTICS + AI */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">

          <FraudAnalytics />

        </div>

        <div className="xl:col-span-4">

          <MiniAIChat />

        </div>

      </div>

    </div>

  );
}