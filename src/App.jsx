
import "./App.css";
import { Header }  from "./components/Header";
import { Main} from "./components/Main";
import { PopUser } from "./components/Popups/PopUser";
import  { PopNewCard } from "./components/Popups/PopNewCard";
import { PopBrowse } from "./components/Popups/PopBrowse";
 

function App() {

  return (
    <div className="wrapper">
    < PopUser />
    < PopNewCard />
    < PopBrowse />
    < Header />
    < Main />
    </div>
  );
}

export default App;
