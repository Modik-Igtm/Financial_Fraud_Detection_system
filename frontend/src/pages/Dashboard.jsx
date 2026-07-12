
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
    fraud_detected: 0
  });

  const handleUpload = (data) => {

    setTransactions(data.results);

    setSummary({
      total_transactions: data.total_transactions,
      fraud_detected: data.fraud_detected
    });

  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="cards">

          <Statscard
            title="Transactions"
            value={summary.total_transactions}
            color="#2563eb"
          />

          <Statscard
            title="Frauds"
            value={summary.fraud_detected}
            color="#dc2626"
          />

          <Statscard
            title="Safe"
            value={
              summary.total_transactions -
              summary.fraud_detected
            }
            color="#16a34a"
          />

          <Statscard
            title="Accuracy"
            value="99.9%"
            color="#f59e0b"
          />

        </div>

<Uploadbox onUpload={handleUpload} />

<Fraudchart
    total={summary.total_transactions}
    fraud={summary.fraud_detected}
/>

<br />

<TransactionTable
    data={transactions}
/>
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