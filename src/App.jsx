import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopUser } from "./components/Popups/PopUser";
import { PopNewCard } from "./components/Popups/PopNewCard";
import { PopBrowse } from "./components/Popups/PopBrowse";
import { useEffect, useState } from "react";
import { cardList } from "./data";
import { GlobalStyle, Wrapper } from "./globalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme.js";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(false);
  const [changeTheme, setChangeTheme] = useState("light");

  const addCard = () => {
    const newCard = {
      id: 13,
      topic: "CopyWriting",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <ThemeProvider theme={changeTheme === "light" ? light: dark} >
    <GlobalStyle/>
    <Wrapper>
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header addCard={addCard} setChangeTheme = {setChangeTheme} changeTheme={changeTheme}/>
      {isLoading ? <p className = "loader">Loading ...</p> : <Main cards={cards} />}
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;
