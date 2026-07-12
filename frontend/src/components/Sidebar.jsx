import { FaHome, FaUpload, FaChartPie, FaRobot, FaFileAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>💳 AI Fraud</h2>

      <ul>
        <li><FaHome /> Dashboard</li>
        <li><FaUpload /> Upload CSV</li>
        <li><FaChartPie /> Analytics</li>
        <li><FaRobot /> AI Analysis</li>
        <li><FaFileAlt /> Reports</li>
      </ul>
    </div>
  );
}

export default Sidebar;