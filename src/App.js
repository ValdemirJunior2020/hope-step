import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Plan from './pages/Plan';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </div>
  );
}

export default App;
