let mode="dark";
let color;
if (mode==="dark"){
    color="black";
}
else if( mode==="light"){
    color="white";
}
console.log(color);

let num=11;
if(num%2===0){
    console.log("even")
}
else if(num%2!==0){
    console.log("odd")
}
if (mode==="dark") console.log("dark")

let fruit="mango";
switch(fruit){
    case 'mango': 
    console.log("mango")
    break;
    case 'apple':
        console.log("apple")
}

let marks=prompt(" what's your marks?")
let grade;
if (marks>=80 && marks<=100){
    grade ="A"
}
else if(marks>=70 && marks<=79){
    grade ="B"
}
else if(marks>=60 && marks<=69){
    grade ="C"
}
else if(marks>=50 && marks<=59){
    grade ="D"
}
else if(marks>=0 && marks<=49){
    grade ="F"
}
console.log("your grade is: " , grade);


