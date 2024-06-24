import "./App.css";
import { useState } from "react";
import { GlobalStyle} from "./globalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme.js";
import { AppRoutes } from "./router/AppRoute.jsx";

function App() {

  const [changeTheme, setChangeTheme] = useState("light");

  
  return (
    <ThemeProvider theme={changeTheme === "light" ? light: dark} >
    <GlobalStyle/>
    <AppRoutes changeTheme= {changeTheme} setChangeTheme= {setChangeTheme}  />
    
    </ThemeProvider>
  );
}

export default App;
