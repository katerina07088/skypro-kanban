import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopUser } from "./components/Popups/PopUser";
import { PopNewCard } from "./components/Popups/PopNewCard";
import { PopBrowse } from "./components/Popups/PopBrowse";
import { useEffect, useState } from "react";
import { cardList } from "./data";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header addCard={addCard} />
      {isLoading ? <p className = "loader">Loading ...</p> : <Main cards={cards} />}
    </div>
  );
}

export default App;
