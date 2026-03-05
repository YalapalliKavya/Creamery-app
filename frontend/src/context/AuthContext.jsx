import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create AuthContext
const AuthContext = createContext();

const fakeUsers = [
  { email: "farmer@test.com", password: "1234", role: "farmer" },
  { email: "lab@test.com", password: "1234", role: "lab" },
  { email: "admin@test.com", password: "1234", role: "admin" },
  { email: "delivery@test.com", password: "1234", role: "delivery" }, // <-- delivery user
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // login function
  const login = (email, password, role) => {
    return new Promise((resolve) => {
      // Find user that matches email, password, and role
      const foundUser = fakeUsers.find(
        (u) => u.email === email && u.password === password && u.role === role
      );

      if (foundUser) {
        setUser(foundUser);
        resolve(true); // login success
      } else {
        resolve(false); // login failed
      }
    });
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
