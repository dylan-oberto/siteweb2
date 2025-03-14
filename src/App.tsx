import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AutoCleaning from './pages/services/AutoCleaning';
import WindowCleaning from './pages/services/WindowCleaning';
import OfficeCleaning from './pages/services/OfficeCleaning';
import BuildingCleaning from './pages/services/BuildingCleaning';
import UpholsteryCleaning from './pages/services/UpholsteryCleaning';
import Marketing from './pages/Marketing';
import Particuliers from './pages/Particuliers';
import Professionnels from './pages/Professionnels';
import AirBnB from './pages/AirBnB';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/auto" element={<AutoCleaning />} />
          <Route path="/services/vitres" element={<WindowCleaning />} />
          <Route path="/services/bureaux" element={<OfficeCleaning />} />
          <Route path="/services/immeubles" element={<BuildingCleaning />} />
          <Route path="/services/textile" element={<UpholsteryCleaning />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/particuliers" element={<Particuliers />} />
          <Route path="/professionnels" element={<Professionnels />} />
          <Route path="/airbnb" element={<AirBnB />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;