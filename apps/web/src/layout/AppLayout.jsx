// apps/web/src/layout/AppLayout.jsx
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui";

export default function AppLayout() {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (key) =>
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));

  // Persist collapsed sidebar state
  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved) setIsCollapsed(JSON.parse(saved));
  }, []);

  const handleCollapse = () => {
    setIsCollapsed((prev) => {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <div className="crm_body_bg flex min-h-screen">
      {/* ───── sidebar ───── */}
      <nav className={`sidebar ${isCollapsed ? "w-20" : "w-56"} transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="logo d-flex justify-between items-center p-4">
          <Link to="/dashboard">
            <img
              src={isCollapsed ? "/img/mini_logo.png" : "/img/logo.png"}
              alt="G-Invoicing"
              className="h-8"
            />
          </Link>
          {/* Collapse Button */}
          <button
            className="hidden lg:inline-block ml-auto text-white"
            onClick={handleCollapse}
            title={isCollapsed ? "Expand" : "Collapse"}
          >
            {isCollapsed ? "»" : "«"}
          </button>
        </div>

        {/* Menu Items */}
        <ul id="sidebar_menu" className="flex-1 overflow-y-auto space-y-2 p-4">
          {/* Dashboard */}
          <li>
            <Link to="/dashboard" className={`flex items-center space-x-2 p-2 rounded hover:bg-blue-600 ${location.pathname.startsWith("/dashboard") ? "bg-blue-700" : ""}`}>
              <img src="/img/menu-icon/dashboard.svg" alt="Dashboard" className="h-6" />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>

          {/* G-Invoicing Section */}
          {!isCollapsed && <h4 className="menu-text text-xs text-gray-400 mt-6 mb-2">G-Invoicing</h4>}
          {[
            { label: "Agreements", path: "/agreements", icon: "/img/menu-icon/2.svg" },
            { label: "Orders", path: "/orders", icon: "/img/menu-icon/3.svg" },
            { label: "Performances", path: "/performances", icon: "/img/menu-icon/4.svg" },
            { label: "Invoices", path: "/invoices", icon: "/img/menu-icon/6.svg" },
            { label: "Payments", path: "/payments", icon: "/img/menu-icon/7.svg" },
          ].map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={`flex items-center space-x-2 p-2 rounded hover:bg-blue-600 ${location.pathname.startsWith(item.path) ? "bg-blue-700" : ""}`}>
                <img src={item.icon} alt={item.label} className="h-6" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}

          {/* Admin Section */}
          {!isCollapsed && <h4 className="menu-text text-xs text-gray-400 mt-6 mb-2">Admin</h4>}
          {/* Permissions with dropdown */}
          <li>
            <div
              onClick={() => toggleMenu("permissions")}
              className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600 cursor-pointer"
            >
              <img src="/img/menu-icon/8.svg" alt="Permissions" className="h-6" />
              {!isCollapsed && <span>Permissions</span>}
              {!isCollapsed && <span className="ml-auto">{openMenus.permissions ? "▾" : "▸"}</span>}
            </div>
            {openMenus.permissions && !isCollapsed && (
              <ul className="ml-8 space-y-1 text-sm">
                <li><Link to="/permissions/view" className="hover:underline">View</Link></li>
                <li><Link to="/permissions/edit" className="hover:underline">Edit</Link></li>
              </ul>
            )}
          </li>

          {/* Remaining Items */}
          {[
            { label: "Dictionary", path: "/dictionary", icon: "/img/menu-icon/9.svg" },
            { label: "Audit Logs", path: "/audit", icon: "/img/menu-icon/11.svg" },
            { label: "Agency Compliance", path: "/compliance-agency", icon: "/img/menu-icon/12.svg" },
            { label: "Dev Tools", path: "/tools", icon: "/img/menu-icon/14.svg" },
            { label: "Workflow Studio", path: "/workflow-studio", icon: "/img/menu-icon/15.svg" },
          ].map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={`flex items-center space-x-2 p-2 rounded hover:bg-blue-600 ${location.pathname.startsWith(item.path) ? "bg-blue-700" : ""}`}>
                <img src={item.icon} alt={item.label} className="h-6" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar Footer (Theme Toggle) */}
        <div className="p-4 border-t border-blue-800">
          {!isCollapsed && <ThemeToggle />}
        </div>
      </nav>

      {/* ───── main content ───── */}
      <section className="main_content dashboard_part large_header_bg flex-1 flex flex-col">
        {/* header */}
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-govblue text-lg">G-Invoicing Portal</span>
          </div>
          <div className="flex items-center space-x-6">
            {/* Notifications */}
            <div className="relative">
              <button className="relative">
                <img src="/img/icon/bell.svg" alt="Notifications" className="h-6" />
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">2</span>
              </button>
            </div>
            {/* User Profile */}
            <div className="relative group">
              <img src="/img/client_img.png" alt="Profile" className="h-8 w-8 rounded-full cursor-pointer" />
              <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded shadow-lg p-2 space-y-2 text-sm">
                <Link to="/profile">My Profile</Link>
                <Link to="/settings">Settings</Link>
                <button className="w-full text-left">Logout</button>
              </div>
            </div>
          </div>
        </header>

        {/* page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        {/* footer */}
        <footer className="text-center py-4 text-xs text-gray-500 border-t mt-auto">
          © 2025 G-Invoicing Enterprise Portal
        </footer>
      </section>
    </div>
  );
}
