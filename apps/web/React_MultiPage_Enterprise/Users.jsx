import { useEffect, useState } from "react";

const Users = ({ token, role }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (role === "admin") {
      fetch("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(setUsers);
    }
  }, [token, role]);

  if (role !== "admin") return <p>You do not have access to view users.</p>;

  return (
    <div>
      <h1 className="text-xl font-bold">Users</h1>
      <ul className="mt-4 space-y-2">
        {users.map(u => (
          <li key={u.username} className="bg-white p-3 rounded shadow">
            {u.username} — {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
