console.log("Loop Project");
// i=5;
a = 1;
for (let i = 0; i <=4 ; i++) {
    // document.getElementById("Loop").innerText = a + i;
    console.log(a + i);
    
}
obj = {
    uname:"asad",
    course:"SigmaWebDevelopment",
    language:"JavaScript"
}
// for in loop
for (const key in obj) {
    
    const element = obj[key];
    console.log(key,element);
}
// for of loop
for (const n of "asad") {
    console.log(n);
    
}
// while loop
while (I<6) {
    console.log(i);
    i++ 
}
// do while loop 
do {
    console.log(i);
    i++
} while (I<6);