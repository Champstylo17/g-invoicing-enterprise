import { Outlet } from "react-router-dom";
import GovernmentShell from "@/layout/GovernmentShell";

export default function AppLayout() {
  return (
    <GovernmentShell>
      <Outlet />
    </GovernmentShell>
  );
}
