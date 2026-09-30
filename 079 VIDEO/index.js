// index.js
let a = prompt("Enter First Number")
let b = prompt("Enter Secound Number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("The entered value is not a Number")
}
let sum = parseInt(a) + parseInt(b)
function main(){
    x = 10
    try {   
        console.log("The sum is ",sum*x);
        return true
    } catch (error) {
        console.log("Error is occured");
        return false
    }

    finally{
        console.log("Site is being closed");
        
    }
}
let c = main();
