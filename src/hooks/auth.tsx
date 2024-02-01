import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

//o que quero compartilhar com meus estados
type AuthContextData = {
  user: User;
  // signIn: () => Promise<void>;
  // signOut: () => Promise<void>;
  // loading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

//criando meu próprio hook
function useAuth() {
  const context = useContext(AuthContext)
  return context;
};

export { AuthProvider, useAuth }