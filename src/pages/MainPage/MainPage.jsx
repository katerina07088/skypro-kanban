import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PopNewCard } from "../../components/Popups/PopNewCard";
import { Wrapper } from "../../globalStyle.styled";
import { Main } from "../../components/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks";
import { Loader } from "../../components/Loader";

export const MainPage = ({changeTheme, setChangeTheme, user, setUser}) => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");
        const [isLoading, setIsLoading] = useState(true);

            useEffect(() => {
            getTasks(user.token)
            .then ((res) =>{
              setCards(res.tasks)
            })
            .catch((error)=>{
            console.log(error.message)
            setError (error.message)
            })
            .finally(()=>{
              setIsLoading(false)
            })
            //setIsLoading(true);
            // setTimeout(() => {
            //   setIsLoading(false);
            // }, 2000);
          }, [user.token]);
        
    return (
               
        <Wrapper>
        <Outlet />
        <PopNewCard/>
        <Header setUser = {setUser} setChangeTheme = {setChangeTheme} changeTheme={changeTheme}/>
        {isLoading ? (<Loader />) : error ? <p> {error} </p> : <Main cards={cards} />}
      </Wrapper>
    )
}