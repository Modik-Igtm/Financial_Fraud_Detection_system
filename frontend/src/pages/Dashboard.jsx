import "./Dashboard.css";
import UploadBox from "../components/UploadBox";


function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>AI Fraud Detector</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>📂 Upload CSV</li>
          <li>📊 Predictions</li>
          <li>🤖 AI Analysis</li>
          <li>📄 Reports</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">

        <h1>Financial Fraud Detection Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Total Transactions</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>Fraud Detected</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>Safe Transactions</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>Accuracy</h3>
            <h2>0%</h2>
          </div>

        </div>
<div className="upload">
    <UploadBox />
</div>

      </div>

    </div>
  );
}

export default Dashboard;