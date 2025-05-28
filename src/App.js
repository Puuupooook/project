// src/App.js 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './layout/Nav';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Feedback from './pages/Feedback';

import icon from './assets/catalog-icon.png'; // замените на актуальный путь к вашей иконке

const App = () => {
  return (
    <Router>
      <Nav icon={icon} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;
