import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routers";

export const ProtectedRoute = ({user}) => {
  return user ? <Outlet /> : <Navigate to = {routes.login}/>
};
