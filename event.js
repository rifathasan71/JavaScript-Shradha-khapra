

// btn1.addEventListener("click",(evt)=>{
//     console .log("button was clicked")
//     console .log(evt.type)
// })
// let handler=()=>{
//  console .log("button was clicked 2x")
// }
   
// btn1.addEventListener("click",handler)


// btn1.removeEventListener("click",handler)

// // btn1.onclick=(eObj)=>{
// //     console.log(eObj)
// //     console.log(eObj.type)
// //     console.log(eObj.target)
// //     console.log(eObj.clientX,eObj.clientY)
// // }
// // js has the highest priority

// // last handler always work
// let div =document.querySelector("div")
// div.onmouseover=(eObj)=>{
//     console.log(eObj)
//     console.log(eObj.type)
//     console.log(eObj.target)
//     console.log(eObj.clientX,eObj.clientY)
// }

let btn1=document.querySelector("#btn1")
let body=document.querySelector("body")

let mode="light";
btn1.addEventListener("click",()=>{
    if(mode==="light"){
        btn1.innerText="Light Mode"
        mode="dark"; 
        body.classList.add("dark");
        body.classList.remove("light")
        btn1.style.color="black"
        btn1.style.backgroundColor="white"
        

    }
    else{
        btn1.innerText="Dark Mode"
        btn1.style.color="black"
        btn1.style.backgroundColor="white"
        btn1.style.color="white"
        btn1.style.backgroundColor="black"
        mode="light";
       body.classList.add("light");
       body.classList.remove("dark")

    }
})