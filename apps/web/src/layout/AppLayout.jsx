import { Outlet } from "react-router-dom";
import GovernmentShell from "@/layout/GovernmentShell";
import SidebarNav from "@/components/SidebarNav";
import NavTabs from "@/components/NavTabs";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-govgray text-gray-900 font-sans">
      <SidebarNav role="admin" />

      <GovernmentShell>
        {/* Global page header */}
        <header className="bg-white dark:bg-gray-800 shadow-header px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-govblue">G-Invoicing Enterprise</h1>
        </header>

        {/* Tabs navigation for Agreement → Order → Performance → Invoice → Payment */}
        <div className="px-6 pt-4">
          <NavTabs>
            <Outlet />
          </NavTabs>
        </div>

        {/* Fallback main content area */}
        <main className="flex-1 px-6 py-4 overflow-y-auto">
          <Outlet />
        </main>
      </GovernmentShell>
    </div>
  );
}
