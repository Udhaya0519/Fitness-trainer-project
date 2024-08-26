document.addEventListener("DOMContentLoaded",()=>{
var menubar = document.querySelector(".head-wrapper > div:nth-child(4) >i")
var  section = document.querySelectorAll(".head-wrapper > div:nth-child(2) >ul >li >a")

var toLeft = document.querySelector(".head-wrapper>:nth-child(2)>ul")
const mediaQuery = window.matchMedia("(max-width: 800px)")
let toggle = false;

function mediaTOset(e){

    if (e.matches) {

        menubar.addEventListener("click",()=>{
            toggle=!toggle
            console.log(toggle);
            
            if (toggle===true) {
                toLeft.style.left="-4%"
               toLeft.style.transition ="1s"
                
            } else if(toggle===false) {
                toLeft.style.left="-70%"
               toLeft.style.transition ="1s"
                
            }
           
        })
      
        section.forEach((el)=>{
            el.addEventListener("click",(e)=>{
                    e.target.parentElement.parentElement.style.left ="-70%"
                    e.target.parentElement.parentElement.style.transition ="1s"

            })             
        })
    }



}

mediaTOset(mediaQuery)



mediaQuery.addEventListener("change",mediaTOset)
})







