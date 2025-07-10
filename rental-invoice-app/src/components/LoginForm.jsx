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
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <input
        name="username"
        type="text"
        placeholder="Username or Email"
        value={form.username}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        required
        
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Logging in..." : `Login as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`}
      </button>
      {error && <div className="text-red-500 text-center text-sm font-medium">{error}</div>}
    </form>
  );
} 