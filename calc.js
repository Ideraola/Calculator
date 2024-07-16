const button = document.querySelectorAll(".button")
const screen = document.querySelector(".screen")
const equal = document.querySelector(".btn-equal")
const cancel = document.querySelector(".btn-cancel")

button.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        screen.value += btn.innerHTML

    })
})

equal.addEventListener("click", ()=>{
    if(screen.value === ""){
        screen.value = ""
    } else{
        let answer = eval(screen.value)
        screen.value = answer
    }
})
cancel.addEventListener("click", ()=>{
        screen.value = ""
    })