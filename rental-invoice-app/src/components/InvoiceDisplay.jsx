export default function InvoiceDisplay({ invoices }) {
  if (!invoices || invoices.length === 0) {
    return <div className="text-gray-500 text-center py-8">No invoices to display.</div>;
  }
  return (
    <div className="space-y-8 w-full">
      {invoices.map((inv, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition w-full max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">🏠</div>
            <div>
              <h2 className="text-xl font-bold text-indigo-700">RENT BILL INVOICE</h2>
              <div className="text-gray-600">For the month of <strong>{inv.month} {inv.year}</strong></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-indigo-600 mb-1">Landlord Details</h3>
              <div className="text-sm text-gray-700">
                <div><b>Name:</b> {inv.landlordName}</div>
                <div><b>Address:</b> {inv.landlordAddress}</div>
                <div><b>Phone:</b> {inv.landlordPhone}</div>
                <div><b>Email:</b> {inv.landlordEmail}</div>
                <div><b>PAN No:</b> {inv.landlordPAN}</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-600 mb-1">Tenant Details</h3>
              <div className="text-sm text-gray-700">
                <div><b>Name:</b> {inv.tenantName}</div>
                <div><b>Phone:</b> {inv.tenantPhone}</div>
                <div><b>Email:</b> {inv.tenantEmail}</div>
                <div><b>Aadhar No:</b> {inv.tenantAadhar}</div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-indigo-600 mb-1">Property Details</h3>
            <div className="text-sm text-gray-700">
              <div><b>Property Address:</b> {inv.propertyAddress}</div>
              <div><b>Property Type:</b> {inv.propertyType}</div>
              <div><b>Lease Period:</b> {inv.leasePeriod}</div>
              <div><b>Monthly Rent:</b> ₹{inv.monthlyRent}</div>
            </div>
          </div>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="px-3 py-2 text-left">Description</th>
                  <th className="px-3 py-2 text-left">Period</th>
                  <th className="px-3 py-2 text-left">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {inv.items && inv.items.map((item, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-3 py-2">{item.description}</td>
                    <td className="px-3 py-2">{item.period}</td>
                    <td className="px-3 py-2">{item.amount}</td>
                  </tr>
                ))}
                <tr className="bg-indigo-50 font-bold">
                  <td className="px-3 py-2" colSpan={2}>TOTAL AMOUNT</td>
                  <td className="px-3 py-2">₹{inv.totalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-right mt-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-indigo-600 hover:to-purple-600 transition print:hidden" onClick={() => window.print()}>
              Print PDF
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 