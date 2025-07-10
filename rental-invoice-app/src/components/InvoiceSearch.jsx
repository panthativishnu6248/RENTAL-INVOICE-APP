import '../index.css';
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

export default function InvoiceSearch({ searchParams, setSearchParams, onSearch, loading }) {
  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchParams.month || !searchParams.year) return;
    onSearch(searchParams);
  };
  return (
    <form onSubmit={handleSubmit} className="mui-d-flex mui-flex-row mui-mb-2 mui-align-center mui-justify-center mui-w-100 mui-grid-container" style={{ gap: 16, maxWidth: 520 }}>
      <select
        name="month"
        value={searchParams.month}
        onChange={handleChange}
        className="mui-input mui-grid-item"
        style={{ minWidth: 160, fontWeight: 500, fontSize: '1.05rem' }}
        required
      >
        <option value="">Select Month</option>
        {months.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <select
        name="year"
        value={searchParams.year}
        onChange={handleChange}
        className="mui-input mui-grid-item"
        style={{ minWidth: 120, fontWeight: 500, fontSize: '1.05rem' }}
        required
      >
        <option value="">Select Year</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
      <button
        type="submit"
        className="mui-btn mui-btn-contained mui-grid-item"
        style={{ minWidth: 120, fontWeight: 600, fontSize: '1.05rem', padding: '10px 0' }}
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
} 