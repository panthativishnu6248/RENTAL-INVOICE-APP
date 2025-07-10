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
    !isLoggedIn ? (
      <div className="mui-h-100 mui-d-flex mui-align-center mui-justify-center" style={{ minHeight: '100vh' }}>
        <div className="mui-card card-bg mui-container mui-d-flex mui-flex-column mui-align-center mui-p-4" style={{ maxWidth: 480 }}>
          <div className="mui-mb-2 mui-text-center">
            <div className="mui-text-center" style={{ fontSize: '2rem', marginBottom: 8 }}>🏠</div>
            <h1 className="mui-mb-1 mui-text-center mui-text-primary">Rent Invoice App</h1>
            <p className="mui-text-secondary mui-text-center">Login to view your rent invoices</p>
          </div>
          <AuthTabs
            userType={userType}
            setUserType={setUserType}
            onLogin={handleLogin}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    ) : (
      <div style={{ minHeight: '100vh', width: '100vw', background: 'var(--mui-grey-50)' }}>
        <div className="mui-container" style={{ paddingTop: 32, paddingLeft: 0, maxWidth: '100%' }}>
          <div className="mui-d-flex mui-align-center" style={{ gap: 24 }}>
            <div style={{ flex: 'none' }}>
              <InvoiceSearch
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                onSearch={handleSearch}
                loading={loading}
              />
            </div>
            {error && <div className="mui-text-error mui-mt-1">{error}</div>}
          </div>
        </div>
        {invoices && invoices.length > 0 && (
          <div style={{ width: '100vw', minHeight: 'calc(100vh - 100px)', marginTop: 24 }}>
            <InvoiceDisplay invoices={invoices} />
          </div>
        )}
      </div>
    )
  );
} 