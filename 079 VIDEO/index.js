// index.js
let a = prompt("Enter First Number")
let b = prompt("Enter Secound Number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("The entered value is not a Number")
}
let sum = parseInt(a) + parseInt(b)
console.log("The sum is ",sum);
