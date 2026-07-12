import "./DashboardHeader.css";

function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <div className="dashboard-header">

      <div>

        <h1>{greeting}, Analyst 👋</h1>

        <p>

          Welcome back to Sentinel AI Command Center

        </p>

      </div>

      <div className="status">

        <span className="online-dot"></span>

        AI Engine Online

      </div>

    </div>
  );
}

export default DashboardHeader;