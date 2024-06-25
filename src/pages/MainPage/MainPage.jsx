import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
//import { PopBrowse } from "../../components/Popups/PopBrowse";
import { PopNewCard } from "../../components/Popups/PopNewCard";
//import { PopUser } from "../../components/Popups/PopUser";
import { cardList } from "../../data";
import { Wrapper } from "../../globalStyle.styled";
import { Main } from "../../components/Main";
import { Outlet } from "react-router-dom";

export const MainPage = ({changeTheme, setChangeTheme}) => {
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
               
        <Wrapper>
        <Outlet />
        <PopNewCard/>
        <Header addCard={addCard} setChangeTheme = {setChangeTheme} changeTheme={changeTheme}/>
        {isLoading ? <p className = "loader">Loading ...</p> : <Main cards={cards} />}
      </Wrapper>
    )
}