const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(6));

//with array

let arr = [1, 2, 3, 4, 5, 6];

const red = (a , b)=>{
    return a * b;
}
console.log(arr.reduce(red));