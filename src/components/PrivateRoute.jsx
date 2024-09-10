import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, roles }) => {
  const user = { isAuthenticated: true, role: "reclutador" };

  const { isAuthenticated, role } = user;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

