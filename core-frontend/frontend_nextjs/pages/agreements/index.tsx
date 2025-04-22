
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import AdminLayout from '../../layout/AdminLayout';

export default function AgreementsPage() {
  const [agreements, setAgreements] = useState([]);
  const [newAgreement, setNewAgreement] = useState({ title: '', start_date: '', end_date: '', status: '' });

  useEffect(() => { fetchAgreements(); }, []);

  async function fetchAgreements() {
    const { data, error } = await supabase.from('agreements').select('*');
    if (!error) setAgreements(data);
  }

  async function handleAdd() {
    const { data, error } = await supabase.from('agreements').insert([newAgreement]);
    if (!error) {
      setAgreements([...agreements, ...data]);
      setNewAgreement({ title: '', start_date: '', end_date: '', status: '' });
    }
  }

  async function handleDelete(id: number) {
    await supabase.from('agreements').delete().eq('id', id);
    setAgreements(agreements.filter(a => a.id !== id));
  }

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-4">Agreements</h2>

      <div className="mb-6">
        <input
          type="text" placeholder="Title" value={newAgreement.title}
          onChange={e => setNewAgreement({ ...newAgreement, title: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="date" value={newAgreement.start_date}
          onChange={e => setNewAgreement({ ...newAgreement, start_date: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="date" value={newAgreement.end_date}
          onChange={e => setNewAgreement({ ...newAgreement, end_date: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="text" placeholder="Status" value={newAgreement.status}
          onChange={e => setNewAgreement({ ...newAgreement, status: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-1 rounded">Add</button>
      </div>

      <table className="min-w-full border text-sm text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th><th className="p-2">Title</th><th className="p-2">Start</th><th className="p-2">End</th><th className="p-2">Status</th><th></th>
          </tr>
        </thead>
        <tbody>
          {agreements.map((a: any) => (
            <tr key={a.id} className="border-b">
              <td className="p-2">{a.id}</td>
              <td className="p-2">{a.title}</td>
              <td className="p-2">{a.start_date}</td>
              <td className="p-2">{a.end_date}</td>
              <td className="p-2">{a.status}</td>
              <td className="p-2"><button onClick={() => handleDelete(a.id)} className="text-red-600">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
