import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  ShieldAlert,
  BarChart3,
  Bot,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: CreditCard, label: "Transactions", path: "/transactions" },
  { icon: ShieldAlert, label: "Fraud Alerts", path: "/alerts" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Bot, label: "AI Assistant", path: "/assistant" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#111827] border-r border-gray-800 p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        Sentinel AI
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => (
          
          <Link
  key={item.label}
  to={item.path}
  className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-cyan-500/20 transition"
>
  <item.icon size={22} />
  <span>{item.label}</span>
</Link>
        ))}
      </nav>
    </aside>
  );
}