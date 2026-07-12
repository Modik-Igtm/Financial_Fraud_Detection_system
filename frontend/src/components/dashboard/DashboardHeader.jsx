
import "./DashboardHeader.css";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import AIBriefing from "../components/dashboard/AIBriefing";

function DashboardHeader() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";

   
    return (
  <div className="dashboard">
    <Sidebar />

    <div className="main-content">
      <Navbar />
      <h1>Dashboard is working ✅</h1>
    </div>
  </div>
);
   
    
}

export default DashboardHeader;