import { useState } from "react";
// import '../App.css';
import '../index.css';

export default function LoginForm({ userType, onLogin, loading, error }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) return;
    onLogin(form);
  };
<div className="bg-red-500 text-white p-4">If this is red, Tailwind works!</div>
  return (
    <form onSubmit={handleSubmit} className="mui-w-100 mui-d-flex mui-flex-column mui-mb-2">
      <input
        name="username"
        type="text"
        placeholder="Username or Email"
        value={form.username}
        onChange={handleChange}
        className="mui-input"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="mui-input"
        required
      />
      <button
        type="submit"
        className="mui-btn mui-btn-contained mui-w-100"
        disabled={loading}
      >
        {loading ? "Logging in..." : `Login as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`}
      </button>
      {error && <div className="mui-text-error mui-text-center mui-mt-1">{error}</div>}
    </form>
  );
} 