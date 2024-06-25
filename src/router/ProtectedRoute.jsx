import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routers";

export const ProtectedRoute = ({isAuth}) => {
  return isAuth ? <Outlet /> : <Navigate to = {routes.login}/>
};
