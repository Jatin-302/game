// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Authcontext';
import Login from './Login';
import Games from './Games';
import GuessingGame from './GuessingGame';  // Import the new component

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RequireAuth><Games /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/guessing-game" element={<RequireAuth><GuessingGame /></RequireAuth>} /> {/* New route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function RequireAuth({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default App;
