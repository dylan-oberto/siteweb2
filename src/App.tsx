import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AutoCleaning from './pages/services/AutoCleaning';
import WindowCleaning from './pages/services/WindowCleaning';
import OfficeCleaning from './pages/services/OfficeCleaning';
import BuildingCleaning from './pages/services/BuildingCleaning';
import UpholsteryCleaning from './pages/services/UpholsteryCleaning';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/auto" element={<AutoCleaning />} />
          <Route path="/services/vitres" element={<WindowCleaning />} />
          <Route path="/services/bureaux" element={<OfficeCleaning />} />
          <Route path="/services/immeubles" element={<BuildingCleaning />} />
          <Route path="/services/textile" element={<UpholsteryCleaning />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;