import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

export function Routes() {
  const { user, signOut } = useAuth();
  useEffect(() => {
    api.get("/users/validated").catch(error => {
      if (error.response?.status === 401) {
        signOut();
      }
    });
  }, []);
  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
