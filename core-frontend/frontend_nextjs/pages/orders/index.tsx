
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import AdminLayout from '../../layout/AdminLayout';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ agreement_id: '', description: '', amount: '', status: '' });

  useEffect(() => { fetchOrders(); }, []);

  async function fetchOrders() {
    const { data, error } = await supabase.from('orders').select('*');
    if (!error) setOrders(data);
  }

  async function handleAdd() {
    const { data, error } = await supabase.from('orders').insert([newOrder]);
    if (!error) {
      setOrders([...orders, ...data]);
      setNewOrder({ agreement_id: '', description: '', amount: '', status: '' });
    }
  }

  async function handleDelete(id: number) {
    await supabase.from('orders').delete().eq('id', id);
    setOrders(orders.filter(o => o.id !== id));
  }

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>

      <div className="mb-6">
        <input
          type="text" placeholder="Agreement ID" value={newOrder.agreement_id}
          onChange={e => setNewOrder({ ...newOrder, agreement_id: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="text" placeholder="Description" value={newOrder.description}
          onChange={e => setNewOrder({ ...newOrder, description: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="number" placeholder="Amount" value={newOrder.amount}
          onChange={e => setNewOrder({ ...newOrder, amount: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="text" placeholder="Status" value={newOrder.status}
          onChange={e => setNewOrder({ ...newOrder, status: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-1 rounded">Add</button>
      </div>

      <table className="min-w-full text-sm text-left border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th><th className="p-2">Agreement</th><th className="p-2">Desc</th><th className="p-2">Amount</th><th className="p-2">Status</th><th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o: any) => (
            <tr key={o.id} className="border-b">
              <td className="p-2">{o.id}</td>
              <td className="p-2">{o.agreement_id}</td>
              <td className="p-2">{o.description}</td>
              <td className="p-2">${o.amount}</td>
              <td className="p-2">{o.status}</td>
              <td className="p-2"><button onClick={() => handleDelete(o.id)} className="text-red-600">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
