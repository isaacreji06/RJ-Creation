// src/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/verify", {
      credentials: "include",
    })
      .then(res => setAuthenticated(res.ok))
      .catch(() => setAuthenticated(false));
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
