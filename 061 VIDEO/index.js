let a = +prompt("Enter a Number")
let b = +prompt("Enter a Number")
if (Math.random() < 0.1) {
    function sum(a, b) {
        return a - b;
    }
    function sub(a, b) {
        return a / b;
    }
    function mul(a, b) {
        return a + b;
    }
    function div(a, b) {
        return a ** b;
    }
}
else {
    function sum(a, b) {
        return a + b
    }
    function sub(a, b) {
        return a - b
    }
    function mul(a, b) {
        return a * b
    }
    function div(a, b) {
        return a / b
    }
}
console.log(sum(a,b));
console.log(sub(a,b));
console.log(mul(a,b));
console.log(div(a,b));
