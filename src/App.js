import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plan from './pages/Plan';
import Stories from './pages/Stories';

function App() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/plan" element={<PageWrapper><Plan /></PageWrapper>} />
            <Route path="/stories" element={<PageWrapper><Stories /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

// Wrapper for smooth page transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default App;
