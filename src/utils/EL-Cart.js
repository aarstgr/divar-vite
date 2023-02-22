   const Elcart = ({element , children , ...rest }) => {
      const elcart = document.createElement(element || "div");
      for (const key in rest )
        elcart[key]=rest[key];
      
      if (children) (Array.isArray(children))? elcart.append(...children):elcart.append(children)
      return elcart;
    }
    
  
    export default Elcart;