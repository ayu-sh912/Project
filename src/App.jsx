import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CampusMap from './pages/CampusMap';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CampusMap />} />
      <Route path="/home" element={<Home />} />
      <Route path="/map" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
