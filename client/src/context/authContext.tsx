import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

type ChildrenProps = {
  children: JSX.Element;
};

type InputsProps = {
  username: string;
  password: string;
};

type ValueProps = {
  currentUser: string | null;
  login: (inputs: InputsProps) => Promise<void>;
  logout: (inputs: InputsProps) => Promise<void>;
};

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs: InputsProps) => {
    const res = await axios.post(
      "http://localhost:3001/api/auth/login",
      inputs
    );
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:3001/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout } as ValueProps}>
      {children}
    </AuthContext.Provider>
  );
};
