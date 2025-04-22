
import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg p-4">
        <h1 className="text-xl font-bold mb-4">G-Invoicing</h1>
        <nav className="space-y-2">
          <Link href="/agreements" className="block text-blue-700 hover:underline">Agreements</Link>
          <Link href="/contractors" className="block text-blue-700 hover:underline">Contractors</Link>
          <Link href="/orders" className="block text-blue-700 hover:underline">Orders</Link>
          <Link href="/invoices" className="block text-blue-700 hover:underline">Invoices</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
