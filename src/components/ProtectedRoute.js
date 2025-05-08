import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check login status

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children; // If logged in, return the children (Dashboard component)
};

export default ProtectedRoute;
