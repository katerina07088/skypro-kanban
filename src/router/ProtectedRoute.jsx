import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routers";
import { useUserContext } from "../components/Context/useUserContext";

export const ProtectedRoute = () => {
  const { user } = useUserContext();
  //const isAuthenticated = user && user.token;
  return user ? <Outlet /> : <Navigate to={routes.login} />;
};
