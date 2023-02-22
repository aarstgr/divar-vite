import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Components=()=>{
    const menu=document.createElement("div");
    menu.append(Navbar(),Sidebar())

    return menu
}

export default Components;