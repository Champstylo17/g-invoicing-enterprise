import React, { useState } from 'react';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [agency, setAgency] = useState('');

  const next = () => setStep((prev) => prev + 1);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">🚀 Onboarding Wizard</h1>
      {step === 1 && (
        <div>
          <p>Step 1: Enter your agency name</p>
          <input className="border p-2" value={agency} onChange={(e) => setAgency(e.target.value)} />
          <button onClick={next} className="mt-4 bg-blue-500 text-white p-2 rounded">Next</button>
        </div>
      )}
      {step === 2 && <p>Step 2: Create your first agreement...</p>}
    </div>
  );
}