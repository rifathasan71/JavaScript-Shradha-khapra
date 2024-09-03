// let headings=document.getElementById("heading");
// console.dir(headings)
// let heading=document.getElementsByClassName("heading")
// console.log(heading)

// let paras= document.getElementsByTagName("h1")
// let elements=document.querySelector("p") //when we need first one
// console.dir(elements)

// let allElement=document.querySelectorAll("p")  //it will return all
// console.dir(allElement)

// let myclass=document.querySelector(".heading")
// console.dir(myclass)

// let myId=document.querySelector("h1");
// console.dir(myId)

// let div=document.querySelector("div")
// console.dir(div);
// let heading=document.querySelector("h1");

let h2=document.querySelector("h2")
console.dir(h2.innerText)
h2.innerText=h2.innerText+" from bangladesh";

let myclass=document.querySelectorAll(".box")
console.dir(myclass[0])
let i=0;
for(cls of myclass){
    cls.innerText=`new div ${i}`;
    i++;
}