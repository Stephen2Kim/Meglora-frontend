import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
  const { isAuthenticated, userRole } = useAuth();

  // Redirect to login if not authenticated or user role doesn't match
  if (!isAuthenticated || userRole !== role) {
    return <Navigate to={`/${role}-login`} />;
  }

  // If authenticated and role matches, render the component
  return <Component {...rest} />;
};

export default ProtectedRoute;
