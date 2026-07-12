import {
  Shield,
  LayoutDashboard,
  Activity,
  Search,
  Bot,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

const menuItems = [
  { icon: LayoutDashboard, label: "Command Center" },
  { icon: Activity, label: "Live Monitor" },
  { icon: Search, label: "Investigations" },
  { icon: Bot, label: "AI Copilot" },
  { icon: BarChart3, label: "Intelligence" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-icon">
          <Shield size={28} />
        </div>

        <div>
          <h2>Sentinel AI</h2>
          <p>Fraud Intelligence Platform</p>
        </div>

      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div className="menu-item" key={item.label}>
              <Icon size={20} />
              <span>{item.label}</span>
            </div>
          );
        })}

      </nav>

      <div className="sidebar-footer">

        <div className="status-dot"></div>

        <span>AI Engine Online</span>

      </div>

    </aside>
  );
}

export default Sidebar;