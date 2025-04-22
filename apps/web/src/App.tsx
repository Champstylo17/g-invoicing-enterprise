
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './dashboard/pages/overview';
import Agencies from './dashboard/pages/agencies';
import Invoices from './dashboard/pages/invoices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/agencies" element={<Agencies />} />
        <Route path="/dashboard/invoices" element={<Invoices />} />
        <Route path="*" element={<div>404 – Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
