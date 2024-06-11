import { cardList, statusList } from "../../data.js";
import { Column } from "../Column/index.jsx"

export const Main = () => {
    return(
     <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {statusList.map((status, i)=>(
                    < Column 
                    key = {i}
                    title = {status} 
                    cards = { cardList.filter ((card) => card.status === status)} />
              ))}
              </div>
          </div>
        </div>
      </main>
    )
}