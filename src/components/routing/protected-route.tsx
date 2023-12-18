import { Outlet, Navigate } from 'react-router-dom';

import { pathnames } from '../../constants';
import { ProtectedRouteProps } from '../../interface';

export function ProtectedRoute({ isAuthenticated }: ProtectedRouteProps) {
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={pathnames.authentication.signIn} replace />
  );
}
