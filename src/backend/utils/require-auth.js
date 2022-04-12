import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../backend/utils/auth-context";

const RequiresAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  return auth.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiresAuth;