import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import { NotFound } from "../pages/NotFoundPage/NotFound";
import { MainPage } from "../pages/MainPage/MainPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { useState } from "react";
import { PopUser } from "../components/Popups/PopUser";
import { PopBrowse } from "../components/Popups/PopBrowse";

export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route
            path={routes.main}
            element={
              <MainPage
                changeTheme={changeTheme}
                setChangeTheme={setChangeTheme}
              />
            }
          />
        </Route>
        <Route path={routes.exit} element={<PopUser />} />
        <Route path={routes.card} element={<PopBrowse />} />
        <Route path={routes.login} element={<LoginPage setIsAuth={setIsAuth} isAuth={isAuth} />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
