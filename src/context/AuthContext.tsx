import React, { createContext, useContext, useState } from "react";

type User = { email: string };

const AuthContext = createContext<{
  user: User | null;
  login: (email: string, pass: string) => boolean;
  signup: (email: string, pass: string) => boolean;
  logout: () => void;
} | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, pass: string) => {
    if (
      (email === "demo@example.com" && pass === "password123") ||
      (email === "test@user.com" && pass === "testpass")
    ) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const signup = (email: string, pass: string) => {
    setUser({ email });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext must be used inside AuthProvider");
  return ctx;
};
