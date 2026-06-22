function Introduction(uname /* parameter here */ ){
console.log(" 你 好 吗 " + uname);
console.log(" 我 没 是 " + uname);
console.log(" 我 的 中国 " + uname);
console.log("谢谢 " + uname);
console.log("Hello ALI " + uname);
console.log("Hello Ni hao ma? " + uname);
console.log("真 的 吗 " + uname);
}
Introduction("asad") //arrgumnet
function Sum(a,b,c=10){
    console.log( a + b + c );
    return a + b + c ;
    
}
Sum(10,20)


// arrow function
const arrowFuntion = (x) => {
    console.log(x);
    
}
arrowFuntion(20)
