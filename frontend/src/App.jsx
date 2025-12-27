import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import AdminPanel from './pages/AdminPanel';

import { AnimatePresence, motion } from 'framer-motion';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/dashboard" />;
  return children;
};

const DefaultRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role === 'admin') return <Navigate to="/admin" />;
  return <Navigate to="/dashboard" />;
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<DefaultRedirect />} />
              <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
              <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
              <Route path="/dashboard" element={<ProtectedRoute><PageWrapper><Dashboard /></PageWrapper></ProtectedRoute>} />
              <Route path="/quiz/:exam" element={<ProtectedRoute><PageWrapper><Quiz /></PageWrapper></ProtectedRoute>} />
              <Route path="/result" element={<ProtectedRoute><PageWrapper><Result /></PageWrapper></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute adminOnly><PageWrapper><AdminPanel /></PageWrapper></ProtectedRoute>} />
              <Route path="*" element={<DefaultRedirect />} />
            </Routes>
          </AnimatePresence>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
