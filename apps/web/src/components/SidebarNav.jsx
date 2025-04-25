import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineUserGroup,
  HiOutlineDatabase,
  HiOutlineChartBar,
  HiOutlineAdjustments,
  HiOutlineLightningBolt,
} from "react-icons/hi";

export default function SidebarNav({ role = "analyst" }) {
  const navItems = [
    { to: "/dashboard", icon: <HiOutlineHome />, label: "Dashboard" },
    { to: "/agreements", icon: <HiOutlineDocumentText />, label: "Agreements" },
    { to: "/invoices", icon: <HiOutlineChartBar />, label: "Invoices" },
    { to: "/permissions", icon: <HiOutlineShieldCheck />, label: "Permissions" },
    { to: "/dictionary", icon: <HiOutlineDatabase />, label: "Dictionary" },
    { to: "/audit", icon: <HiOutlineAdjustments />, label: "Audit Logs" },
    { to: "/compliance-agency", icon: <HiOutlineUserGroup />, label: "Agency Compliance" },
  ];

  if (role === "admin") {
    navItems.push(
      { to: "/tools", icon: <HiOutlineCog />, label: "Dev Tools" },
      { to: "/workflow-studio", icon: <HiOutlineLightningBolt />, label: "Workflow Studio" }
    );
  }

  return (
    <aside className="w-60 bg-govblue text-white min-h-screen flex flex-col shadow-lg">
      <div className="px-6 py-4 text-lg font-semibold tracking-wide border-b border-govgray">
        G-Invoicing Gov
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition text-sm font-medium ${
                isActive
                  ? "bg-white text-govblue shadow"
                  : "hover:bg-govgray hover:text-govblue"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <footer className="text-xs text-center py-4 border-t border-govgray">
        © 2025 G-Invoicing Enterprise
      </footer>
    </aside>
  );
}