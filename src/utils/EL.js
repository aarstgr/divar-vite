import Elcart from "./EL-Cart";

const Contentt=(explain1,explain2,explain3,title)=>{


const card=Elcart({
    element:"a",
    className:"flex mt-4 rounded ",
    style:"width:365px; border:2px solid #dddd; ",
    children:[Elcart({
element:"img",
src:"https://s101.divarcdn.com/static/pictures/1677048606/wY1Pbf9W.jpg",
style:"border-radius:15px",
className:"p-2 w-40 h-44",
    }),Elcart({
        element:"img",
        src:"data:image/png;base64,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",
        style:"border-radius:15px",
        className:"mb-2 mr-2 w-5 h-5 mt-36",
            }),
    
    Elcart({
        element:"div",
        className:"flex flex-col justify-between flex-1",
        children:[Elcart({
            element:"h4",
            innerText:title,
            className:"font-semibold text-end p-2 pr-3 pt-3"

        }),Elcart({
            element:"div",
            className:"flex flex-col p-3",
            style:"align-items:flex-end; font-size:14px",
            children:[Elcart({
                element:"p",
                innerText:explain3,
                className:"text-gray-500",
            }),Elcart({
                element:"p",
                innerText:explain1,
                className:"text-gray-500",
            }),Elcart({
                element:"p",
                innerText:explain2,
                className:"text-gray-500",
                
            })]
        })]
    })]
    
})

return card;
}
export default Contentt;
  
  