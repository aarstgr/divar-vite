import Components from "./components";
import Offres from "./Content";
import Contentt from "./utils/EL";

const App = ()=> {
    const contain =document.createElement("div")
    contain.append(Components(),Offres());
    return contain;
}

export default  App;