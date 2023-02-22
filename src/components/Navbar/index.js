 
import Elcart from '../../utils/EL-Cart';
import './index.css'
const Navbar = () => {   

const nav = Elcart ({ 
  element:'div',
    className:'bg-white-200 shadow-sm m-2 pl-12',
    children:Elcart({
    element:'nav',
    className: 'flex  gap-5 item-center mx-auto pt-1  text-gray-500',
    children:[
     Elcart({
            element:'button',
            innerText:"ثبت آگهی" ,
            className:"bg-red-700 pl-4 pr-4 mr-8 mb-3  font-semibold justify-center",
                style:"color:#fffd ;border-radius:5px",
            onclick:()=> alert ('hi') 
          }),
        Elcart({
            element:'ul',
            className:' flex ',
            
            children:[Elcart({
              element:'li',
              innerText:"پشتیبانی",
              className:"flex  m-2 ",
            }),
        Elcart({
          element:'li',
          innerText:"چت",
          className:"flex w-12 m-2 ml-8",
          children: Elcart({
            element:'img',
            className:'w-5 h-4 mt-1 pl-2 mt-1',
            src:'data:image/png;base64,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'
        })  
        }),
        Elcart({
            element:'div',
            className:'flex w-20 m-2 ml-8',
            children:[Elcart({
              element:'div',
              className:'',
             innerText:"دیوار من",

            }),
             Elcart({
              element:'img',
              className:'w-5 h-4 pl-2 mt-1',
              src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlI3nknxWv67R3tLozGQtWPQNSG9iQ_5YcEg&usqp=CAU'
          }) ]   
          })]
        }),
        Elcart({
          element:'div',
          children:Elcart({
            element:"div",
                style:" border-radius:4px",
                className:"flex ml-40 bg-gray-100 mb-3",
                children:[Elcart({
                    element:"input",
                    type:"search" ,
                    className:"",
                    style:"background:none;padding:10px 5px 10px 280px;",
                    placeholder:"جستجو در همهٔ آگهی‌ها"
                }),Elcart({
                  element:"img",
                   src:"data:image/png;base64,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",
                  className:"w-3 h-3 mr-7 mt-4",
                    style:" "
                })]

          
        })
        
}),Elcart({
  element:"div",
  className:"flex mr-4",
  children:[Elcart({
    element:"img",
    src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///9RUVFLS0tOTk729vb7+/v4+PhtbW1iYmJmZmbR0dHd3d1AQEBISEjY2NhERESnp6dXV1dvb2/Ozs6Hh4d+fn6zs7NcXFydnZ29vb3n5+fh4eGpqanv7+94eHiRkZGYmJjExMTiXxhAAAAEjUlEQVR4nO2c61bqMBBGe7HCQUIRoYIKet7/JU8hBLn0ksxM2uSsb/93jZt805kWbZIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw37N/W643h8139TJC8WJRfW8Oh/Xybe+rxGKTlirL8ixT6n355KtMM/vt66l4nqky3Xj5hD8O8yy9kKv50keVFortXOW/1bP54UO8xk5d+Z0oJ/JVWvicqrviWfZXuMayTB/I0oHacZblj9XnX6I1tg2CdVTLQRQX8wbBOkOSbbKdN5U4duNCsEoLs8ZP93iKcoptgrVi7l2xMaLCQW2O6Fkx8xzUhWoVrIMqo9glWCvOvSrOmnvwcooSQW2PqDlFj0GddZ2gkGLVI+i1Fzt68KK4Y9ZY3I/aJkXlKaiLslcwTZnFi6lFDV9zcWYjmOYTVpGq8yrzW8VHUC0ieqJk5fTVrogPxd6LzKX2lFOl9zJzKSMd1JZVrQnOvPq5v5/oUJRd4KxPsEYxJobVdcYoSgbVtgd1Zfq1prCvkooucJ2r2iMZudCHfUhPilILnH37axT5iYqjodQC59KD2pD8aMrVUKYXnQUZhnvXUhILnNWqdmdIr2Y78K8US+Yptt7Rd9R8p5dbu8aUHVSnMXEm+6bX27l/oLUiI6juPVhTMh4sPjtetrUifYHruaNvQRV0w+TH4vbwUZG6wM0o1VK1ZQgme/dGTMm9SOnBuljK+6Lmi9CJxAWOMCaOlBVLMEk2pOQQFjjXVe2MWjMFk+IPLaiuCxzpKloL8p5hnHiaDtGLZMFnvmHyRDxFlwXO4Y7+mkxEkKFofYqEVe2ImnAm4Y2i56DSxoRQRHmKdkNj1B68KBKDajM0aKta3YNSEeUp9g8N8gnKCvrrxQB6kKvYPTSIq5rUmLhTJAa162aKuqqJR/SsKB5UYkSlLzL+FIMYE3eKokEljwl/grIL3OirWouiWFDJPejzBDmK9wtcgD14URRZ4KhjYuU3ojzF6wUumFWtRZHdiwGtarKKZoELalVrUaTOxdMpUsfEID1oeGYElRzRIQUZvfjp+B39r+BwET0rEoOakn5s0B5kKtIYOqJnRVpQaYLDn+CgimMJ1lfUYYI67Ji4ZZBTHKcHB1QcL6JnRd9BHVvQu+KYPWggLnCWgqP2oMFjL44fUY23oIYQUY0nxTAiqvES1FAiqvGgGJagh6CG04MG4VMMqQcNooqhRVQjGNQx7uhtEFMMMaIaoaCGKyikGGYPGgSCGt6YuIWtGHJENcyghh1RDUsxBkFWUEPvQQP5FMPvQQNRMY6IakhBjSWiGoJiPBHVOAc1pohqHBXjE3T82iauHjQ49GJsPWiwDqpaxRdRjaVijD1osApqnD1osPjaJtYeNPQGNeaIanqCGndENZ2KsUdU0xHUeMfELa2K8feg4XnS+O/S/0MPGor1479W5CXjdRYBsktv/y44L1+lX5M7NkV1fJdzfuL4LmnuewKC5KVaryY1q3X1OfbvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB44R/NQT/Kq5uI6gAAAABJRU5ErkJggg==",
    className:"w-3 h-3 m-2 mt-4 "
  }),

Elcart({
  element:"div",
  innerText:"دسته ها",
  style:"",
  className:"font-semibold text-gray-500 text-center pt-2"
  
          }) ]
        }),Elcart({
              element:"div",
              className:"text-gray-500 flex  pt-2",
                  children:[Elcart({
                      element:"span",
                      innerText:"گرگان",
                      style:"",
                      className:"font-semibold "
                  }),Elcart({
                      element:"img",
                      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQck4OdNnhQP5RO8sfcMDBxofFG4dMzILUl7g&usqp=CAU",
                      className:"w-4 h-5 pt-1 ml-1"
                  })]
              }),Elcart({
                  element:"div",
                  className:'h-6 mt-2',
                  style:"border-right:0.1rem solid #bbbb; "

              }),Elcart({
                  element:"div",
                  children: Elcart({
                    element:'img',
                    className:'w-11 ',
                    src:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E2MjYyNiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4zODYgMTQuNjE3SDguMjhhLjcxMi43MTIgMCAwIDEtLjU5NS0uODA2Yy40NzMtMy4xMTcuNjMtOC4wOTIuNjMtOC4xMjcuMDM1LS4zODYuMzMzLS43LjczNi0uNjgzYS43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjIxLS4xNzUgNS4wOTctLjY0OCA4LjMwM2EuNy43IDAgMCAxLS43LjU5NVptMTAuMDM3IDEuMjk2YS42OTMuNjkzIDAgMCAxLS42NjYtLjQ5LjY4OC42ODggMCAwIDEgLjQ1NS0uODc2YzMuMzEtMS4wNSAzLjM2My0xLjg1NyAzLjM4MS0yLjI5NS4wMzUtLjY4My0uNDktMS41NTgtLjctMS44NTZhLjcwMS43MDEgMCAxIDEgMS4xMzgtLjgyNGMuMTA1LjE0IDEuMDUgMS40NTQuOTYzIDIuNzY4LS4wODcgMS41OTQtMS4zMTQgMi41NzUtNC4zNjEgMy41NTZhLjg0NS44NDUgMCAwIDAtLjEwNS4wMDljLS4wMzUuMDA0LS4wNy4wMDktLjEwNS4wMDlabS05LjUxMiAyLjQ3YS42NTYuNjU2IDAgMCAxLS41NDMtLjI2Mi42ODMuNjgzIDAgMCAxIC4xMjMtLjk4MWMxLjQzNi0xLjEzOSAyLjQtMi4xNTUgMy4wMy0zLjA0OC0uMzUtLjE3NS0uNzE4LS40MzgtLjkxLS44NzYtLjE3Ni0uNDAzLS4yODEtMS4wNjkuMzMyLTEuOTYyLjg3Ni0xLjI5NiAxLjc1Mi0xLjU5NCAyLjA4NC0xLjY2NGEuODcxLjg3MSAwIDAgMSAxLjAxNi42MTNjLjA4OC4zMTUuMjk4IDEuMzE0LS4zMzIgMi44MzguODQtLjAxOCAxLjUwNi0uMjQ1IDIuMDE0LS42NjYuOTgtLjc4OCAxLjAzMy0yLjEyIDEuMDMzLTIuMTM3YS43MTUuNzE1IDAgMCAxIC43MTktLjY4My43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjA3LS4wNyAxLjk0NC0xLjUyNCAzLjE3LS45MTEuNzcxLTIuMTU1IDEuMTA0LTMuNjYxLjk4Mi0uNzE4IDEuMTAzLTEuODU3IDIuNC0zLjYyNiAzLjhhLjcwOC43MDggMCAwIDEtLjQzOC4xNThabTMuODAxLTcuMDc2YTMuMTM0IDMuMTM0IDAgMCAwLS42My43MzVjLS4yMjguMzUtLjI0Ni41NDMtLjIyOC41OTYuMDM1LjA4OC4yMS4xNzUuMzg1LjI0NS4zMzMtLjY2NS40MzgtMS4xOTEuNDczLTEuNTc2Wm0uMTc1IDQuOTIyYS43MS43MSAwIDAgMCAuNy42ODNoLjAzNmMuMDUzIDAgMS4yMjYtLjAzNSAyLjkwOC0uNDJhLjcwMi43MDIgMCAwIDAgLjU0My0uODQxLjcwMi43MDIgMCAwIDAtLjg0MS0uNTQzYy0xLjU2LjMzMi0yLjY2My4zODUtMi42OC4zODVhLjcwNC43MDQgMCAwIDAtLjY2Ni43MzZaTTEuMTM0IDE4LjEwM2MuMTIyLjE3NS4zNS4yOC41Ni4yOC4xNCAwIC4yOC0uMDM1LjQyLS4xMjIgNC40NS0zLjI0IDQuNjI1LTcuNDggNC42MjUtNy42NTUgMC0uMzg1LS4yOTgtLjctLjY4My0uNzE4LS4zODYtLjAxOC0uNy4yOTgtLjcxOC42ODMgMCAuMTQtLjE3NiAzLjczMS00LjA0NyA2LjU1MWEuNzAxLjcwMSAwIDAgMC0uMTU3Ljk4MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=='
                })
              })]
          
      })
    
    })



return nav;

}
export default Navbar;