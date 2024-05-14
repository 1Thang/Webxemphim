import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Movies from './pages/Movies';
import Cinemas from './pages/Cinemas';
import Showtimes from './pages/Showtimes';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cinemas" element={<Cinemas />} />
            <Route path="/showtimes" element={<Showtimes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
