
import {
  Bell,
  Search,
  ShieldCheck,
  UserCircle
} from "lucide-react";

import "./Navbar.css";

function Navbar() {

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (

    <div className="navbar">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search transaction..."
        />

      </div>

      <div className="navbar-right">

        <div className="date">

          📅 {today}

        </div>

        <div className="status">

          <ShieldCheck size={18} />

          AI Online

        </div>

        <Bell className="icon" size={22} />

        <div className="profile">

          <UserCircle size={34} />

          <div>

            <h4>Analyst</h4>

            <p>Fraud Response Team</p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Navbar;