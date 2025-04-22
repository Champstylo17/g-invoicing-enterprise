export default function IgtTransactionGrid() {
  const items = [
    { title: "GT&C Agreements", status: "submitted", desc: "Shared terms for transactions" },
    { title: "Orders", status: "approved", desc: "Request + approval of transactions" },
    { title: "Performance", status: "open", desc: "Tracked goods/services delivered" },
    { title: "IPAC Settlement", status: "pending", desc: "Fund transfer & settlement" }
  ];

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <div key={i} className="bg-white p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-slate-600 text-sm">{item.desc}</p>
          <p className="mt-1 text-xs">Status: <span className="font-bold">{item.status}</span></p>
        </div>
      ))}
    </section>
  );
}
