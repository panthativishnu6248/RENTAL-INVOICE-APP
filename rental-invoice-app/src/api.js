// Mock API for testing frontend without backend
export async function loginUser(userType, credentials) {
  // Mock login - accept any username/password for testing
  console.log(`Mock login attempt: ${userType} with ${credentials.username}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Always return success for testing
  return Promise.resolve({ 
    id: 1, 
    username: credentials.username, 
    type: userType,
    token: "mock-token-123" 
  });
}

export async function fetchInvoices(userType, month, year) {
  // Mock invoice data
  console.log(`Mock fetch invoices: ${userType} for ${month} ${year}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock invoice data
  return Promise.resolve([
    {
      month,
      year,
      landlordName: "Panthati Vishnu",
      landlordAddress: "karimnagar District Telangana",
      landlordPhone: "8688033075",
      landlordEmail: "panthativishnu6248@gmail.com",
      landlordPAN: "BZWP*****P",
      tenantName: "Banduru Sujith",
      tenantPhone: "9859484999",
      tenantEmail: "sujith@example.com",
      tenantAadhar: "Aadhar Number",
      propertyAddress: "Sri Krishna Nilayam",
      propertyType: "2BHK",
      leasePeriod: "February 2025 to February 2026",
      monthlyRent: 21000,
      items: [
        { description: "Monthly Rent", period: `${month} ${year}`, amount: 21000 },
        { description: "Maintenance Charges(including water charges)", period: `${month} ${year}`, amount: "2036 (Payable to Venkata Ramana 403 Owner)" },
        { description: "Advance amount", period: "-", amount: "2 Months advance amount ₹[42000] Pending" },
      ],
      totalAmount: 21000,
    },
  ]);
} 