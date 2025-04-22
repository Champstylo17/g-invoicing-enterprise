import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Invoices from "./Invoices";
import Agreements from "./Agreements";
import Users from "./Users";

const App = () => {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "admin", password: "admin123" }),
    });
    const data = await res.json();
    setToken(data.token);
    setRole(data.role);
  };

  if (!token) return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl mb-4">Login to Enterprise System</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={login}>
        Login
      </button>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="invoices" element={<Invoices token={token} />} />
          <Route path="agreements" element={<Agreements token={token} />} />
          <Route path="users" element={<Users token={token} role={role} />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
