import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routers"
import { NotFound } from "../pages/NotFoundPage/NotFound"
import { MainPage } from "../pages/MainPage/MainPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"

export const AppRoutes = ({changeTheme, setChangeTheme}) =>  {
    return(
  <BrowserRouter>
  <Routes>
    <Route path= {routes.main}  element= {<MainPage changeTheme= {changeTheme} setChangeTheme= {setChangeTheme} />}/>
    <Route path= {routes.login}  element= {<LoginPage/>}/>
    <Route path= {routes.register}  element= {<RegisterPage/>}/>
    <Route path= {routes.notFound}  element= {<NotFound/>}/>

  </Routes>
  </BrowserRouter>
    )
}