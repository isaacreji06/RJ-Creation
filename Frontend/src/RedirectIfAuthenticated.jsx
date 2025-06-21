// src/Components/RedirectIfAuthenticated.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RedirectIfAuthenticated({ children }) {
  const { authenticated } = useAuth();
  if (authenticated === null) return <div>Loading...</div>;
  return authenticated ? <Navigate to="/admin" /> : children;
}
