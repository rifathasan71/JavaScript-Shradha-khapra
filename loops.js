// for(let i=1;i<7;i++){
//     console.log("i " ,i)
// }
// let sum=0;
// for( let i=1;i<=6;i++){
//     sum=sum+i;
// }
// console.log(sum)

// for( var j=1;j<=6;j++){    //var creates a global scope
//     console.log(j)
// }
// console.log(j) // var is working so we don.t get error outside the block for j


//while loop

// let i=1;
// while(i<=5){
//     console.log("*");
//     i++;
// }

// //do while loop

// let j=1;
// do{
//     console.log("j")
//     j++;
// }
// while(j<9);

// for of loop ( for string and array)
// let str="refathasan";
// let size=0;
// for( let i of str){
//     console.log(i)
//     size++;
// }
// console.log(size)


//for in loop
// let student={
//     name:"refat",
//     age:22,
//     roll:25,

// };
// for (let i in student){
//     console.log(i," ",student[i]) //return keys( for in)
// }

//print all even in 0 t0 100
// for(let i=0;i<=100;i++){
//     if(i%2===0){
        
//     console.log(i)
//     }
// }
//using while loop
// let j=0;
// while(j<=100 ){
//    if(j%2===0){
//         console.log(j);
        
//     }
//     j++;
    
// }

//guess the number game
let num=69;
let guess=prompt("guess the number");
while(guess!=num){
    guess=prompt("WRONG! GUESS AGAIN");
}
console.log("congratulations! you are right")


