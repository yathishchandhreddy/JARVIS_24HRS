import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children?: React.ReactNode;
  fallbackPath?: string;
}

/**
 * WasteX AI - ProtectedRoute Architecture
 *
 * In Step 1: Acts as a structural passthrough allowing UI inspection of all routes.
 * In Step 2: Reads Supabase session and redirects unauthenticated users to /login.
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallbackPath = '/login',
}) => {
  const location = useLocation();

  // Architectural hook for Step 2:
  // const { user, isLoading } = useAuth();
  // if (isLoading) return <LoadingState />;
  // if (!user) return <Navigate to={fallbackPath} state={{ from: location }} replace />;

  const isAuthenticated = true; // Step 1 preview bypass

  if (!isAuthenticated) {
    return <Navigate to={fallbackPath} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
