"use client";

import { UserEntity } from "@/entities/UserEntity";
import { api } from "@/services/api";
import { TokenService } from "@/services/token";
import { useRouter } from "next/navigation";
import React from "react";

interface AuthContextProps {
  user: UserEntity | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  me: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

type TAuthToken = {
  token: string;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserEntity | null>(null);
  const router = useRouter();

  const register = async (name: string, email: string, password: string) => {
    await api.post<UserEntity>("/auth/signup", {
      name,
      email,
      password,
    });

    me();
  };

  const login = async (email: string, password: string) => {
    const response = await api
      .post<TAuthToken>("/auth/signin", {
        email,
        password,
      })
      .then((res) => res.data);

    TokenService.saveAccessToken(response.token);

    me();
  };

  const me = async () => {
    const accessToken = TokenService.getAccessToken();

    if (!accessToken) {
      router.push("/login");
      console.log("Token not found.");
    }

    const response = await api.get<UserEntity>("/auth/me");

    if (!response) {
      throw Error("Something went wrong while fetching user data.");
    }

    setUser(response.data);

    router.push("/dashboard");
  };

  const logout = () => {
    setUser(null);
    TokenService.removeToken();
  };

  React.useEffect(() => {
    if (TokenService.hasAccessToken() && !user) {
      me();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ login, logout, me, user, register }}>
      {children}
    </AuthContext.Provider>
  );
}
