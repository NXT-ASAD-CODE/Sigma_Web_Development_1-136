console.log("Hello world");
let a = document.getElementsByClassName('box')
a[2].style.backgroundColor = "red"
let b = document.getElementById("fourthbox")
b.style.backgroundColor= "yellow"
document.querySelector(".box").style.backgroundColor="black"
document.querySelector(".box").style.color ="white"
// let c = document.querySelectorAll(".box").style.backgroundColor = "blue";
let c = document.querySelectorAll(".box").forEach(e=>{
    e.style.padding = "50px"
})
let e = document.getElementsByTagName("div")