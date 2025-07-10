import Home from "./pages/Home";
import './App.css';

function App() {
  return <Home/>;
}
// src/api.js
export async function loginUser(userType, credentials) {
  // Replace with your Spring Boot endpoint
  const res = await fetch(`/api/auth/login?type=${userType}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function fetchInvoices(userType, month, year) {
  // Replace with your Spring Boot endpoint
  const res = await fetch(`/api/invoices?type=${userType}&month=${month}&year=${year}`);
  if (!res.ok) throw new Error("No invoices found");
  return res.json();
}
export default App;
