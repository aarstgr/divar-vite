import Contentt from "../utils/EL";

const  Offres= () => {
  const el=document.createElement("div");
el.style.width="1280px"
  el.className="flex flex-wrap mx-auto gap-2";
  for(let i=0;i<21;i++)
  {
  el.appendChild(Contentt("۱٬۴۰۰٬۰۰۰ تومان","دقایقی پیش"," درحدنو "," مدل  ۱۳۹۷   X33 S ام‌وی‌ام "));

}
return el;
}


export default Offres;