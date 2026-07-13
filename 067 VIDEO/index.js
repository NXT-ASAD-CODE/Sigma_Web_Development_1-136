// index.js
console.log("this is from index.js");
console.log(document.body.childNodes[0]); //text
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].firstChild);
console.log(document.body.childNodes[1].lastChild);
console.log(document.body.childNodes[1].lastChild.style);
console.log(document.body.childNodes[1].lastChild.style.backgroundColor = "red");
console.log(document.body.firstElementChild.children[0]);
console.log(document.body.firstElementChild.children[1].nextElementSibling);
console.log(document.body.firstElementChild.children[1].previousElementSibling);
console.log(document.body.firstElementChild.children[1].previousSibling);



