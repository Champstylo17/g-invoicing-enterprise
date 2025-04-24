import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AppLayout({ children }) {
  const location = useLocation();
  const [role, setRole] = useState("admin");

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setRole(payload.role);
    }
  }, []);

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Agreements", href: "/agreements" },
    { label: "Audit", href: "/audit" },
    { label: "Permissions", href: "/permissions" },
    { label: "Dictionary", href: "/dictionary" },
    { label: "Agency Compliance", href: "/compliance-agency" },
    { label: "Interagency Explorer", href: "/agreement-explorer" },
    { label: "Contract Timelines", href: "/contract-timeline" }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-4 text-xl font-bold text-blue-700">G-Invoicing</div>
        <nav className="space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block p-2 rounded hover:bg-blue-100 ${
                location.pathname === item.href ? "bg-blue-200 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-4 overflow-y-auto">
        <div className="text-sm text-gray-500">
          Role: <span className="font-semibold capitalize text-blue-600">{role}</span>
        </div>
        {children}
      </main>
    </div>
  );
}
