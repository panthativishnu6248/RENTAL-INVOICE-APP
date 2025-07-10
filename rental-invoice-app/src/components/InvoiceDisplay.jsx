import '../index.css';
export default function InvoiceDisplay({ invoices }) {
  if (!invoices || invoices.length === 0) {
    return <div className="mui-text-secondary mui-text-center mui-py-4">No invoices to display.</div>;
  }
  return (
    <div className="mui-w-100 mui-d-flex mui-flex-column mui-mb-4">
      {invoices.map((inv, idx) => (
        <div key={idx} className="mui-card card-bg mui-p-4 mui-mb-5 mui-w-100" style={{ maxWidth: '900px', margin: '32px auto', position: 'relative', overflow: 'visible' }}>
          {/* Print Button - Top Right OUTSIDE header */}
          <div style={{ position: 'absolute', top: 24, right: -80, zIndex: 2 }}>
            <button
              className="mui-btn mui-btn-contained print-hidden"
              style={{ boxShadow: '0 4px 16px rgba(25, 118, 210, 0.18)', borderRadius: 12, padding: '14px 32px', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.04em', background: 'linear-gradient(90deg, #6a71d9 0%, #667eea 100%)', color: '#fff' }}
              onClick={() => window.print()}
            >
              Print PDF
            </button>
          </div>
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: 0, background: 'linear-gradient(90deg, #6a71d9 0%, #667eea 100%)', borderRadius: 24, padding: '40px 0 24px 0', position: 'relative', boxShadow: '0 4px 24px rgba(106,113,217,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ background: '#fff', borderRadius: '50%', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: '2.5rem' }}>🏠</span>
              </div>
            </div>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800, margin: 0, marginBottom: 8, letterSpacing: 2 }}>RENT BILL INVOICE</h2>
            <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 500, marginBottom: 0 }}>
              For the month of <span style={{ fontWeight: 700 }}>{inv.month} {inv.year}</span>
            </div>
          </div>
          {/* Invoice No, Date, Status Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8f9ff', borderRadius: '0 0 18px 18px', padding: '0 32px', minHeight: 48, fontSize: '1.08rem', fontWeight: 500, marginBottom: 32 }}>
            <div style={{ color: '#222' }}>Invoice No: <span style={{ color: '#6a71d9', fontWeight: 700 }}>{inv.invoiceNo}</span></div>
            <div style={{ color: '#222' }}>Date: <span style={{ color: '#6a71d9', fontWeight: 700 }}>{inv.invoiceDate}</span></div>
            <div></div>
          </div>
          {/* Landlord and Tenant Details Side by Side */}
          <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
            {/* Landlord Details */}
            <div style={{ flex: 1 }}>
              <div style={{ color: '#6a71d9', fontWeight: 700, fontSize: '1.2rem', borderBottom: '2px solid #f0f0f0', marginBottom: 12, paddingBottom: 2 }}>
                Landlord Details
              </div>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                <div><b>Name:</b> {inv.landlordName}</div>
                <div><b>Address:</b> {inv.landlordAddress}</div>
                <div><b>Phone:</b> {inv.landlordPhone}</div>
                <div><b>Email:</b> {inv.landlordEmail}</div>
                <div><b>PAN No:</b> {inv.landlordPAN}</div>
              </div>
            </div>
            {/* Tenant Details */}
            <div style={{ flex: 1 }}>
              <div style={{ color: '#6a71d9', fontWeight: 700, fontSize: '1.2rem', borderBottom: '2px solid #f0f0f0', marginBottom: 12, paddingBottom: 2 }}>
                Tenant Details
              </div>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                <div><b>Name:</b> {inv.tenantName}</div>
                <div><b>Phone:</b> {inv.tenantPhone}</div>
                <div><b>Aadhar No:</b> {inv.tenantAadhar}</div>
              </div>
            </div>
          </div>
          {/* Property Details Box */}
          <div style={{ background: '#f8f9ff', borderLeft: '4px solid #6a71d9', borderRadius: 12, padding: '24px 32px', marginBottom: 32 }}>
            <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 16 }}>Property Details</div>
            <div style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              <div><b>Property Address:</b> {inv.propertyAddress}</div>
              <div><b>Property Type:</b> {inv.propertyType}</div>
              <div><b>Lease Period:</b> {inv.leasePeriod}</div>
              <div><b>Monthly Rent:</b> ₹{inv.monthlyRent}</div>
            </div>
          </div>
          {/* Invoice Information and Payment Status Side by Side */}
          <div style={{ display: 'flex', gap: 32, marginBottom: 24 }}>
            {/* Invoice Information */}
            <div style={{ flex: 1 }}>
              <div style={{ color: '#6a71d9', fontWeight: 700, fontSize: '1.1rem', borderBottom: '2px solid #f0f0f0', marginBottom: 12, paddingBottom: 2 }}>
                Invoice Information
              </div>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                <div><b>Invoice No:</b> {inv.invoiceNo}</div>
                <div><b>Invoice Date:</b> {inv.invoiceDate}</div>
                <div><b>Billing Period:</b> {inv.billingPeriod}</div>
              </div>
            </div>
            {/* Payment Status */}
            <div style={{ flex: 1 }}>
              <div style={{ color: '#6a71d9', fontWeight: 700, fontSize: '1.1rem', borderBottom: '2px solid #f0f0f0', marginBottom: 12, paddingBottom: 2 }}>
                Payment Status
              </div>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                <div><b>Status:</b> {inv.paymentStatus}</div>
                <div><b>Payment Method:</b> {inv.paymentMethod}</div>
                <div><b>Transaction ID:</b> {inv.transactionId}</div>
              </div>
            </div>
          </div>
          {/* Table Section */}
          <div className="mui-mb-4" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
              <thead>
                <tr>
                  <th style={{ background: '#6a71d9', color: '#fff', fontWeight: 700, fontSize: '1.1rem', padding: '16px 12px', textAlign: 'left', borderTopLeftRadius: 12 }}>Description</th>
                  <th style={{ background: '#6a71d9', color: '#fff', fontWeight: 700, fontSize: '1.1rem', padding: '16px 12px', textAlign: 'left' }}>Period</th>
                  <th style={{ background: '#6a71d9', color: '#fff', fontWeight: 700, fontSize: '1.1rem', padding: '16px 12px', textAlign: 'left', borderTopRightRadius: 12 }}>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {inv.items && inv.items.map((item, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8f9ff' }}>
                    <td style={{ padding: '16px 12px', fontSize: '1.05rem', borderBottom: '1px solid #f0f0f0' }}>{item.description}</td>
                    <td style={{ padding: '16px 12px', fontSize: '1.05rem', borderBottom: '1px solid #f0f0f0' }}>{item.period}</td>
                    <td style={{ padding: '16px 12px', fontSize: '1.05rem', borderBottom: '1px solid #f0f0f0' }}>{item.amount}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={3} style={{ padding: 0, border: 'none' }}>
                    <div style={{ borderBottom: '3px solid #6a71d9', margin: 0 }}></div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ background: '#f8f9ff', fontWeight: 700, color: '#6a71d9', fontSize: '1.2rem', padding: '18px 12px', borderBottomLeftRadius: 12 }}>TOTAL AMOUNT PAID</td>
                  <td style={{ background: '#f8f9ff', fontWeight: 700, color: '#6a71d9', fontSize: '1.2rem', padding: '18px 12px', textAlign: 'right', borderBottomRightRadius: 12 }}>₹{inv.totalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Payment Information Box */}
          <div style={{ background: '#eaf7ea', borderLeft: '6px solid #2e7d32', borderRadius: 12, padding: '24px 32px', margin: '32px 0 0 0', fontSize: '1.08rem', marginBottom: 24 }}>
            <div style={{ fontWeight: 700, color: '#2e7d32', marginBottom: 10, fontSize: '1.1rem' }}>Payment Information</div>
            <div>
              <b>Payment from (Tenant Name):</b> {inv.tenantName}<br />
              <b>Payment to:</b> {inv.landlordName}<br />
              <b>Payment mode:</b> {inv.paymentMode}<br />
              <b>Payment Date:</b> {inv.paymentDate}<br />
              <b>UTR NO:</b> {inv.utrNo}
            </div>
          </div>
          {/* Important Notes Box */}
          <div style={{ background: '#fff6d8', borderLeft: '6px solid #ffb300', borderRadius: 12, padding: '24px 32px', fontSize: '1.08rem', marginBottom: 24 }}>
            <div style={{ fontWeight: 700, color: '#b8860b', marginBottom: 10, fontSize: '1.1rem' }}>Important Notes:</div>
            <ul style={{ margin: 0, paddingLeft: 24, color: '#7a6000', fontWeight: 500 }}>
              <li>Please pay the rent on or before the due date to avoid late fees</li>
              <li>Keep this invoice for your records</li>
              <li>For any queries, contact the landlord</li>
            </ul>
          </div>
          {/* Signature Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: 64, marginBottom: 24 }}>
            <div style={{ fontSize: '1.1rem', marginBottom: 8 }}>Landlord Signature</div>
            <div style={{ fontSize: '2rem', letterSpacing: 1, marginBottom: 8 }}>..................</div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 2 }}>{inv.landlordName}</div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}> Date:{inv.invoiceDate}</div>
          </div>
          {/* Computer-generated note */}
          <div style={{ background: '#f8f9ff', borderRadius: '0 0 18px 18px', textAlign: 'center', padding: '24px 0', fontSize: '1.15rem', color: '#555', fontWeight: 500 }}>
            This is a computer-generated invoice
          </div>
        </div>
      ))}
    </div>
  );
} 