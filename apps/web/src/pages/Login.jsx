// apps/web/src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form, Alert } from "@/components/ui";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ─── DEV STUB: accept admin/password123 without calling backend ───
    if (username === "admin" && password === "password123") {
      const fakeToken = "dev-token-" + Date.now();
      localStorage.setItem("jwt_token", fakeToken);
      navigate("/dashboard");
      return;
    }

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem("jwt_token", token);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-govgray">
      {/* Scale wrapper to 3× */}
      <div className="transform origin-center scale-[3]">
        {/* Login Card Wrapper with decorative border */}
        <div
          className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ border: "8px solid #1A4480" }}
        >
          {/* Corner logos */}
          <img
            src="/images/dodi5000-97.png"
            alt="DoDi 5000.97"
            className="absolute -top-8 -left-8 w-20 h-20"
          />
          <img
            src="/images/psm-framework.png"
            alt="PSM Framework"
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20"
          />
          <img
            src="/images/safe6-0.png"
            alt="SaFE 6.0"
            className="absolute -top-8 -right-8 w-20 h-20"
          />

          {/* Header */}
          <div className="bg-govblue px-8 py-6">
            <h1 className="text-3xl font-bold text-white text-center">
              G-Invoicing Portal
            </h1>
          </div>

          {/* Form */}
          <div className="p-8 w-full max-w-2xl">
            {error && <Alert variant="error">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your user ID"
                  className="mt-2"
                  required
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-2"
                  required
                />
              </div>
              <Button variant="primary" className="w-full mt-8 py-3 text-lg">
                Sign In
              </Button>
            </Form>
            <p className="mt-8 text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} G-Invoicing Enterprise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
