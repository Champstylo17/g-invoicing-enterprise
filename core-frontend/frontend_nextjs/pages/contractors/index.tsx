
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import AdminLayout from '../../layout/AdminLayout';

export default function ContractorsPage() {
  const [contractors, setContractors] = useState([]);
  const [newContractor, setNewContractor] = useState({ contractor_name: '', agency_id: '', payment_terms: '' });

  useEffect(() => { fetchContractors(); }, []);

  async function fetchContractors() {
    const { data, error } = await supabase.from('contractors').select('*');
    if (!error) setContractors(data);
  }

  async function handleAdd() {
    const { data, error } = await supabase.from('contractors').insert([newContractor]);
    if (!error) {
      setContractors([...contractors, ...data]);
      setNewContractor({ contractor_name: '', agency_id: '', payment_terms: '' });
    }
  }

  async function handleUpdate(id: number, key: string, value: string) {
    await supabase.from('contractors').update({ [key]: value }).eq('id', id);
    fetchContractors();
  }

  async function handleDelete(id: number) {
    await supabase.from('contractors').delete().eq('id', id);
    setContractors(contractors.filter(c => c.id !== id));
  }

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-4">Contractors</h2>

      <div className="mb-6">
        <input
          type="text" placeholder="Contractor Name" value={newContractor.contractor_name}
          onChange={e => setNewContractor({ ...newContractor, contractor_name: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="text" placeholder="Agency ID" value={newContractor.agency_id}
          onChange={e => setNewContractor({ ...newContractor, agency_id: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <input
          type="text" placeholder="Payment Terms" value={newContractor.payment_terms}
          onChange={e => setNewContractor({ ...newContractor, payment_terms: e.target.value })}
          className="border px-3 py-1 mr-2" />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-1 rounded">Add</button>
      </div>

      <table className="min-w-full text-sm text-left border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th><th className="p-2">Name</th><th className="p-2">Agency</th><th className="p-2">Terms</th><th></th>
          </tr>
        </thead>
        <tbody>
          {contractors.map((c: any) => (
            <tr key={c.id} className="border-b">
              <td className="p-2">{c.id}</td>
              <td className="p-2">
                <input value={c.contractor_name} onChange={e => handleUpdate(c.id, 'contractor_name', e.target.value)} className="border px-2 py-1" />
              </td>
              <td className="p-2">
                <input value={c.agency_id} onChange={e => handleUpdate(c.id, 'agency_id', e.target.value)} className="border px-2 py-1" />
              </td>
              <td className="p-2">
                <input value={c.payment_terms} onChange={e => handleUpdate(c.id, 'payment_terms', e.target.value)} className="border px-2 py-1" />
              </td>
              <td className="p-2">
                <button onClick={() => handleDelete(c.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
