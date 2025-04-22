
export async function fetchInvoices() {
  const res = await fetch('https://your-api.com/invoices');
  return res.json();
}
