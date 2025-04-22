
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import AdminLayout from '../../layout/AdminLayout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    agreements: 0,
    invoices: 0,
    contractors: 0,
    unpaidInvoices: 0
  });
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchInvoiceChart();
  }, []);

  async function fetchStats() {
    const { count: agreements } = await supabase.from('agreements').select('*', { count: 'exact', head: true });
    const { count: invoices } = await supabase.from('invoices').select('*', { count: 'exact', head: true });
    const { count: contractors } = await supabase.from('contractors').select('*', { count: 'exact', head: true });
    const { count: unpaidInvoices } = await supabase
      .from('invoices')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'unpaid');

    setStats({
      agreements: agreements || 0,
      invoices: invoices || 0,
      contractors: contractors || 0,
      unpaidInvoices: unpaidInvoices || 0
    });
  }

  async function fetchInvoiceChart() {
    const { data } = await supabase
      .from('invoices')
      .select('invoice_date, amount')
      .order('invoice_date', { ascending: true });

    const grouped = data.reduce((acc, curr) => {
      const month = new Date(curr.invoice_date).toLocaleString('default', { month: 'short', year: 'numeric' });
      acc[month] = (acc[month] || 0) + Number(curr.amount);
      return acc;
    }, {});

    const formatted = Object.keys(grouped).map(key => ({
      month: key,
      amount: grouped[key]
    }));

    setInvoiceData(formatted);
  }

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-4 gap-4 mb-10">
        <Card title="Agreements" value={stats.agreements} />
        <Card title="Invoices" value={stats.invoices} />
        <Card title="Unpaid Invoices" value={stats.unpaidInvoices} />
        <Card title="Contractors" value={stats.contractors} />
      </div>

      <div className="bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Monthly Invoice Totals</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={invoiceData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AdminLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
