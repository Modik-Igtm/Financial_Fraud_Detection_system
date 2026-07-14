
import StatCard from "../../components/Cards/StatCard";
import FraudChart from "../../components/Charts/FraudChart";
import MiniAIChat from "../../components/AI/MiniAIChat";
import RiskGauge from "../../components/AI/RiskGauge";
import AISummary from "../../components/AI/AISummary";
import AlertPanel from "../../components/AI/AlertPanel";
import TransactionTable from "../../components/Table/TransactionTable";
import AIInvestigation from "../../components/Investigation/AIInvestigation";
import FraudAnalytics from "../../components/Charts/FraudAnalytics";
import LiveFraudFeed from "../../components/Alerts/LiveFraudFeed";
import {
    CreditCard,
    ShieldAlert,
    CircleCheckBig,
    BrainCircuit
} from "lucide-react";

export default function Dashboard() {

    
    return (
  <div className="space-y-6">

    {/* Dashboard Heading */}

    <div>
      <h1 className="text-4xl font-bold">
        Fraud Monitoring Dashboard
      </h1>

      <p className="text-gray-400 mt-2">
        Real-time AI powered fraud detection and monitoring
      </p>
    </div>

    {/* KPI Cards */}

    <div className="grid grid-cols-4 gap-6">

      {/* Your StatCards remain here */}

    </div>

    {/* Second Row */}

    <div className="grid grid-cols-12 gap-6">

      <div className="col-span-8">
        <FraudChart />
      </div>

      <div className="col-span-4">
        <RiskGauge />
      </div>

    </div>

    {/* Third Row */}

    <div className="grid grid-cols-12 gap-6">

      <div className="col-span-8">
        <TransactionTable />
      </div>

      <div className="col-span-4">
        <AISummary />
      </div>

    </div>

    {/* Fourth Row */}

    <div className="grid grid-cols-12 gap-6">

      <div className="col-span-6">
        <AIInvestigation />
      </div>

      <div className="col-span-6">
        <LiveFraudFeed />
      </div>

    </div>

    {/* Last Row */}

    <div className="grid grid-cols-12 gap-6">

      <div className="col-span-8">
        <FraudAnalytics />
      </div>

      <div className="col-span-4">
        <MiniAIChat />
      </div>

    </div>

  </div>
);

}