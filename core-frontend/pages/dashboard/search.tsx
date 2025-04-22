
import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function SearchPanel() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch() {
    const { data } = await supabase
      .from('agreements')
      .select('*')
      .textSearch('title', query);
    setResults(data);
  }

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>
    </div>
  );
}
