

let spans = document.querySelector(".spans")
let menu = document.querySelector(".menu")
let display = document.querySelector(".display")

spans.style.display = "flex"

spans.addEventListener("click" , function(){
  
if(menu.style.right === "-200px"){
    menu.style.right = "0px"
    display.style.right = "0px"
    spans.style.right = "-200px"
}
  else{
    menu.style.right = "-200px"
    display.style.right = "-200px"
    spans.style.right = "0px"
  }

})


 display.addEventListener("click" ,function(){
    if(menu.style.right === "0px"){
      
        menu.style.left = "-200px"
        display.style.right =  "-200px"
        spans.style.right = "0px"
        menu.style.transition =  "right 0.3s ease"

    }
      else{
        menu.style.right = "0px"
        display.style.display = "0px"
        spans.style.right= "0px"
      }
 })