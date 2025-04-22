import { useEffect, useState } from "react";

const Agreements = ({ token }) => {
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/agreements", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setAgreements);
  }, [token]);

  return (
    <div>
      <h1 className="text-xl font-bold">Agreements</h1>
      <ul className="mt-4 space-y-2">
        {agreements.map(a => (
          <li key={a.id} className="bg-white p-3 rounded shadow">
            {a.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agreements;
