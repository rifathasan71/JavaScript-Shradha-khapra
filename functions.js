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

// let array=[1,2,3,4,7]
// let sum=0;
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

// array.forEach((val,i)=>{
//     val*=val;
//     array[i]=val;
    
// });
// console.log(array);

// // another approach is:
// let sqr=(num)=>{
//     console.log(num*num);
// }
// array.forEach(sqr);

// map method

// similar to "for each" but, it returns an array with the results of some operations

// let array=[1,2,3,4,5];
// let newarr=array.map((val)=>{
//     return val**val;
   
// }
// );
// console.log(array)
//  console.log(newarr);

 //..... Use for each when you need to calculate something, use map when we need a new array the previous values operation


// filter method 
// you can just store the return value in a new array / variable in case to case

// let array=[5,7,1,2,3,9,4,5];

// console.log(array.filter((val=>{
//     return val%2===0;
// })))



// //reduce- perform some operations and reduce to a single value. then return the value.

// console.log(array.reduce((n,n1)=>{
//     return n-n1; 
// }))
// console.log(array.reduce((n,n1)=>{
//     return n<n1? n1:n ;  //used ternary
// }))


// practice qs

let marks=[87,89,90,97,98,67,91,92,56,100];
let toppers=marks.filter((val)=>{
    return val>90;
})
console.log(toppers)

//practice qs

let n=prompt("input a number: ")
let array=[];

for(let i=0;i<n;i++){
array[i]=i+1;
}
console.log(array);

let Sum=array.reduce((n,n1)=>{
    return n+n1;
})
console.log(Sum);
let Product=array.reduce((n,n1)=>{
    return n*n1;
})
console.log(Product);