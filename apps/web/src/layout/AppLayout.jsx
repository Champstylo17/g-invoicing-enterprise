import { Outlet } from "react-router-dom";
import GovernmentShell from "@/layout/GovernmentShell";
import SidebarNav from "@/components/SidebarNav";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-govgray text-gray-900 font-sans">
      <SidebarNav role="admin" />
      <GovernmentShell>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </GovernmentShell>
    </div>
  );
}
