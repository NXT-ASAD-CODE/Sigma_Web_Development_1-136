arr = [1,2,3,4,5]
arr[0] = 566;
console.log(arr);
console.log(arr.lenght);
console.log(arr[0]);
console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr);
console.log(arr.push("Asad"));
console.log(arr);
console.log(arr.shift());
console.log(arr.unshift("hello"));
console.log(arr);
console.log(delete arr[3]);
console.log(arr);
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3));
console.log(arr.splice(1,3 , 333, 222));
console.log(arr);
console.log(arr.slice(1,3));
console.log(arr);
array = [1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
    
}
array.forEach((value , index , arr) => {
    console.log(value , index , arr  );
    
});
let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(element , key);
    
    
    
}
for (const addition of arr) {
    console.log(addition);
    
}
let newarr = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newarr.push(element**2)
    
}
console.log(newarr);
// easy way
let newArr = arr.map((e)=>{
    return e ** 2
})







