// // //comment
// // /*comment*/
// // myString =`'i am" refat\n hasan \t "& i \\am a coder" ''` + "hi there dristi "; //template literal with ` `
// // console.log(myString);
// //  myString+="you are here";
// //  let urStr="USRD";
// //  let finalStr="conect var+string together"+myString+`"\tthat was my string and this is u'rs `+ urStr +" how's it";
// //  console.log(finalStr);
// //  let newStr="i am refat";
// //  let newStr2=" and you are ?";
// //  newStr+=newStr2;
// //  let mystr="refathasan";
// //  console.log(newStr);
// //  console.log(newStr.length); //string length
// //  console.log(urStr[0]) // str indices
// //  console.log(mystr[mystr.length -1]); // last index

// let obj={
//     name: "refat",
//     age: 21,
//     roll:23,
//     price:10.22
// };

// // template literals: a string created with backtick and where expression can be embedded

// //string interpolation: creating a string by substituting the placeholders
// let str=`the name is ${obj.name} and age is ${obj.age} also  the roll is ${obj.roll} and sum of ${1+2}`
// console.log(str)
// //escape character "\n", "\t"
// let str2="  abcd ahsjd  adf    "
// console.log(str2)
// console.log(str2.toUpperCase())
// console.log(str2.toLowerCase())
// console.log(str2.trim())
// console.log(str2.slice(6,14))
// let str1="hello"
// console.log(str2.concat(str1))
// console.log(str2.replace("ab","cd"))
// console.log(str2.charAt(8))

let name=prompt("what's your fullname?");
let username=`@${name}${name.length}`
console.log(username)


