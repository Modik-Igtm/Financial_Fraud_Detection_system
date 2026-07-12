
import { useState } from "react";

import "./Dashboard.css";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Statscard from "../components/Statscard";
import Uploadbox from "../components/Uploadbox";
import TransactionTable from "../components/TransactionTable";
import Fraudchart from "../components/Fraudchart";
import AIAnalysis from "../components/AIAnalysis";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const [summary, setSummary] = useState({
    total_transactions: 0,
    fraud_detected: 0,
  });

  const handleUpload = (data) => {
    setTransactions(data.results);

    setSummary({
      total_transactions: data.total_transactions,
      fraud_detected: data.fraud_detected,
    });
  };

  const moneyProtected = transactions
    .filter((t) => t.prediction === 1)
    .reduce((sum, t) => sum + Number(t.amount), 0);

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="welcome-card">

          <div>

            <h1>🛡 Sentinel AI Command Center</h1>

            <p>
              AI Powered Financial Fraud Intelligence Platform
            </p>

          </div>

          <div className="status-online">

            <span className="pulse"></span>

            AI Engine Online

          </div>

        </div>

        <div className="cards">

          <Statscard
            title="Transactions"
            value={summary.total_transactions}
            color="#2563EB"
          />

          <Statscard
            title="Fraud Alerts"
            value={summary.fraud_detected}
            color="#DC2626"
          />

          <Statscard
            title="Money Protected"
            value={`₹${moneyProtected}`}
            color="#16A34A"
          />

          <Statscard
            title="Accuracy"
            value="99.9%"
            color="#F59E0B"
          />

        </div>

        <Uploadbox onUpload={handleUpload} />

        <Fraudchart
          total={summary.total_transactions}
          fraud={summary.fraud_detected}
        />

        <TransactionTable data={transactions} />

        <AIAnalysis
          transaction={
            transactions.length > 0
              ? transactions[0]
              : null
          }
        />

      </div>

    </div>
  );
}

export default Dashboard;