import { cardList, statusList } from "../../data.js";
import { Column } from "../Column/index.jsx"
import { useState } from "react";


export const Main = () => {
  const [cards, setCards] = useState(cardList)
    return(
         <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {statusList.map((status, i)=>(
                    < Column 
                    key = {i}
                    title = {status} 
                    cards = { cards.filter ((card) => card.status === status)} />
              ))}
              </div>
          </div>
        </div>
      </main>
    )
}