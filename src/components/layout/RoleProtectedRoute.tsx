import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import type { UserRole } from '@/src/types';

interface RoleProtectedRouteProps {
  allowedRoles: UserRole[];
  children?: React.ReactNode;
  fallbackPath?: string;
}

/**
 * WasteX AI - RoleProtectedRoute Architecture
 *
 * In Step 1: Passthrough with role intent verification.
 * In Step 2: Validates the user's role against required roles (generator, buyer, admin).
 */
export const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({
  allowedRoles,
  children,
  fallbackPath = '/login',
}) => {
  const location = useLocation();

  // Architectural hook for Step 2:
  // const { userRole, isAuthenticated } = useAuth();
  // if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />;
  // if (!allowedRoles.includes(userRole)) return <Navigate to={fallbackPath} replace />;

  const isRoleAuthorized = allowedRoles.length > 0; // Step 1 preview bypass

  if (!isRoleAuthorized) {
    return <Navigate to={fallbackPath} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
