import React, { useState, useEffect } from 'react';

const Performances = () => {
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    fetch('/api/performances')
      .then(response => response.json())
      .then(data => setPerformances(data));
  }, []);

  return (
    <div>
      <h1>Performances</h1>
      <ul>
        {performances.map(performance => (
          <li key={performance.id}>{`Performance ID: ${performance.id}, Status: ${performance.status}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Performances;