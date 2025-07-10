import { useState } from "react";
import AuthTabs from "../components/AuthTabs";
import InvoiceSearch from "../components/InvoiceSearch";
import InvoiceDisplay from "../components/InvoiceDisplay";
import { loginUser, fetchInvoices } from "../api";
// import '../App.css';
import '../index.css';


export default function Home() {
  const [userType, setUserType] = useState("tenant");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [searchParams, setSearchParams] = useState({ month: "", year: "" });

  const handleLogin = async (credentials) => {
    setLoading(true);
    setError("");
    try {
      await loginUser(userType, credentials);
      setIsLoggedIn(true);
    } catch (e) {
      setError("Invalid credentials");
    }
    setLoading(false);
  };

  const handleSearch = async ({ month, year }) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchInvoices(userType, month, year);
      setInvoices(data);
    } catch (e) {
      setError("No invoices found.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-fade-in">
        <div className="mb-6 text-center">
          <div className="text-4xl mb-2">🏠</div>
          <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wide mb-1">Rent Invoice App</h1>
          <p className="text-gray-500 text-sm">Login to view your rent invoices</p>
        </div>
        {!isLoggedIn ? (
          <AuthTabs
            userType={userType}
            setUserType={setUserType}
            onLogin={handleLogin}
            loading={loading}
            error={error}
          />
        ) : (
          <>
            <InvoiceSearch
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              onSearch={handleSearch}
              loading={loading}
            />
            <InvoiceDisplay invoices={invoices} />
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </>
        )}
      </div>
    </div>
  );
} 