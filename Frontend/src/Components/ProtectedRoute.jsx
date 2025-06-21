// src/Components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function ProtectedRoute({ children }) {
  const { authenticated } = useAuth();
  if (authenticated === null) return <div>Loading...</div>;
  return authenticated ? children : <Navigate to="/login" />;
}
