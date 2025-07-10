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
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6 w-full items-center justify-center">
      <select
        name="month"
        value={searchParams.month}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition flex-1 min-w-[120px]"
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
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition flex-1 min-w-[100px]"
        required
      >
        <option value="">Select Year</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition flex-1 md:flex-none min-w-[100px] disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
} 