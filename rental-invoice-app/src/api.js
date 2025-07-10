const API_BASE = "http://localhost:8080";

export async function loginUser(userType, credentials) {
  // Use the full backend URL for Vite
  const res = await fetch(`${API_BASE}/api/auth/login?type=${userType}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function fetchInvoices(userType, month, year) {
  // Use the full backend URL for Vite
  const res = await fetch(`${API_BASE}/api/invoices?type=${userType}&month=${month}&year=${year}`);
  if (!res.ok) throw new Error("No invoices found");
  return res.json();
} 