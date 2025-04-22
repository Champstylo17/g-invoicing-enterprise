
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import AdminLayout from '../../layout/AdminLayout';

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({ performance_id: '', amount: '', invoice_date: '', status: '' });

  useEffect(() => { fetchInvoices(); }, []);

  async function fetchInvoices() {
    const { data, error } = await supabase.from('invoices').select('*');
    if (!error) setInvoices(data);
  }

  async function handleAdd() {
    const { data, error } = await supabase.from('invoices').insert([newInvoice]);
    if (!error) {
      setInvoices([...invoices, ...data]);
      setNewInvoice({ performance_id: '', amount: '', invoice_date: '', status: '' });
    }
  }

  async function handleDelete(id: number) {
    await supabase.from('invoices').delete().eq('id', id);
    setInvoices(invoices.filter(i => i.id !== id));
  }

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-4">Invoices</h2>

      <div className="mb-6">
        <input
          type="text" placeholder="Performance ID" value={newInvoice.performance_id}
          onChange={e => setNewInvoice({ ...newInvoice, performance_id: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="number" placeholder="Amount" value={newInvoice.amount}
          onChange={e => setNewInvoice({ ...newInvoice, amount: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="date" value={newInvoice.invoice_date}
          onChange={e => setNewInvoice({ ...newInvoice, invoice_date: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="text" placeholder="Status" value={newInvoice.status}
          onChange={e => setNewInvoice({ ...newInvoice, status: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-1 rounded">Add</button>
      </div>

      <table className="min-w-full text-sm text-left border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th><th className="p-2">Performance</th><th className="p-2">Amount</th><th className="p-2">Date</th><th className="p-2">Status</th><th></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((i: any) => (
            <tr key={i.id} className="border-b">
              <td className="p-2">{i.id}</td>
              <td className="p-2">{i.performance_id}</td>
              <td className="p-2">${i.amount}</td>
              <td className="p-2">{i.invoice_date}</td>
              <td className="p-2">{i.status}</td>
              <td className="p-2"><button onClick={() => handleDelete(i.id)} className="text-red-600">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
