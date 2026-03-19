import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Reservations from "./pages/Reservations";
import Availability from "./pages/Availability";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="availability" element={<Availability />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  )
}

export default App;
