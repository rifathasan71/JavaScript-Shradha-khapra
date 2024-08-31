// let marks=[11,15,20,25,30];
// console.log(marks)
// console.log(marks.length)
// console.log(typeof(marks))
// console.log(marks[0])  //array indices
// marks[0]=10;
// console.log(marks)

// loops in array
//fro loop using

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i])
// }

// //while loop using

// let j=0;
// while(j<marks.length){
//     console.log(marks[j])
//     j++;
// }

// // do while

// let k=0;
// do{
//     console.log(marks[k])
//     k++;
// }
// while(k<marks.length)



//for of loop

// for (let u of marks){
//     console.log(u)
// }

// // for in loop
// for (let p in marks){
//     console.log(marks[p])
// }

// //practice qs

// // counting avg marks of a class
// // considering previous marks array

// let sum=0;
// let student=marks.length;
// for (let z of marks){
//     sum=sum+z;
// }
// console.log(`average is ${sum/student}`);


// //practice qs 2

// let price=[250,645,300,900,50];
// for (let p in price){
//     price[p]=price[p]*0.9;
// }
// console.log(price)

// // for of

// let A=0;
// for (let p of price2){
//     price2[A]=p*0.9;
//     A++;
// }
// console.log(price2)
// let price2=[250,645,300,900,50];
// let fruits=["apple", "malta","orange", "banana","lemon"]
// fruits.push("watermelon");
// fruits.push("mango","litchi");
// fruits.pop();
// fruits.toString();
// console.log(fruits.concat(price2));
// fruits.shift();

// console.log(fruits.toString());

// console.log(fruits.slice(1,4)); // last index is non inclusive

// let seeds=["pumpkin","flax","sunflower","chia","basil"]
// seeds.splice(0,2,"kiwi","almond");
// console.log(seeds)

//practice final qs

let companies=["samsung", "Apple","microsoft","google","ibm","spacex"];
companies.shift();
companies.splice(4,1,"Cisco");
companies.push("Amazon");
console.log(companies);