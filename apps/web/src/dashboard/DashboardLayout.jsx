import { NavLink, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const tabs = [
    { path: 'overview', label: 'Overview' },
    { path: 'audit', label: 'Audit Trail' },
    { path: 'dictionary', label: 'Data Dictionary' },
    { path: 'permissions', label: 'Permissions' },
    { path: 'compliance', label: 'Compliance' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="flex flex-wrap space-x-4 bg-white p-3 rounded shadow mb-4">
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={`/dashboard/${tab.path}`}
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-bold underline'
                : 'text-gray-600 hover:text-blue-400'
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
      <div className="bg-white p-4 rounded shadow">
        <Outlet />
      </div>
    </div>
  );
}