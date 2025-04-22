import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './dashboard/pages/overview';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" />} />
        <Route path="/dashboard/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}