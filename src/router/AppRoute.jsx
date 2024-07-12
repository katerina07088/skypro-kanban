import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import { NotFound } from "../pages/NotFoundPage/NotFound";
import { MainPage } from "../pages/MainPage/MainPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./ProtectedRoute";
//import { useState } from "react";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { CardPage } from "../pages/CardPage/CardPage";
import { NewCardPage } from "../pages/AddCardPage/AddCardPage";
import { UserProvider } from "../components/Context/UserContext";
import { TaskProvider } from "../components/Context/TaskContext";

export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
  //const [user, setUser] = useState(null)
  return (
    <UserProvider>
    <TaskProvider> 
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path={routes.main} element={
              <MainPage
                changeTheme={changeTheme}
                setChangeTheme={setChangeTheme}
              /> } >
        <Route path={routes.exit} element={<ExitPage />} />
        <Route path={routes.card} element={<CardPage />} />
        <Route path={routes.add} element={<NewCardPage />} />
        </Route>
        </Route>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </TaskProvider>
    </UserProvider>
  );
};
