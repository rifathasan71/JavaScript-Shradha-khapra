// function myFunc(msg){
//     console.log(msg);
// }
// myFunc("in my func")

// function mySum(n1, n2){   //n1,n2 are local variable
//     //console.log(n1+n2);
//     console.log("before return")
//     s=n1+n2;
//     return s;
//     console.log("after return")
// }
// let val=mySum(2,3)
// console.log(val)

// arrow function

// const sum=(a,b)=> {
//     console.log(a+b);
// };

// sum(3,3);
// const mul=(a,b)=>{
//     console.log(a*b)
// };
// mul(9,9)

// // practice qs

// function totalVowel(myStr) {
//   let n = 0;
//   for (let i of myStr) {
//     if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
//       n++;
//     }
//     i++;
//   }
//   console.log(n);
// }
// totalVowel("vowel");

// // creating arrow function for the same task

// const vowel = (myStr) => {
//   for (let i of myStr) {
//     if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
//       n++;
//     }
//     i++;
//   }
//   console.log(n);
// };

// totalVowel("consonent");

// fro each function

let array=[1,2,3,4,5]
let sum=0;
// array.forEach(function value(val){
//     sum+=val;
//     return sum;

// });
// console.log(sum)

//with arrow func

// array.forEach((val,i,arr)=>{
//     sum+=val;
//      console.log(sum,i,arr);
// });

//practice qs

array.forEach((val,i)=>{
    val*=val;
    array[i]=val;
    
});
console.log(array);



