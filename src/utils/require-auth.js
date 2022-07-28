import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const RequiresAuth = ({ children }) => {
  const { stateAuth } = useContext(AuthContext);
  const {isAuthenticated} = stateAuth
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiresAuth;