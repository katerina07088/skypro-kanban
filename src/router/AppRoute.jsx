import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import { NotFound } from "../pages/NotFoundPage/NotFound";
import { MainPage } from "../pages/MainPage/MainPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { useState } from "react";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { CardPage } from "../pages/CardPage/CardPage";

export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path={routes.main} element={
              <MainPage
                changeTheme={changeTheme}
                setChangeTheme={setChangeTheme}
                user={user}
                setUser={setUser}
              /> } >
        <Route path={routes.exit} element={<ExitPage setUser={setUser}/>} />
        <Route path={routes.card} element={<CardPage />} />
        </Route>
        </Route>
        <Route path={routes.login} element={<LoginPage setUser={setUser} user={user} />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
