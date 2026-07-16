let innerhtml = document.getElementsByClassName("box").innerHTML
let innertext = document.getElementsByClassName("box").innerText
let tagname = document.getElementsByClassName("box").tagName // tagname is only used for tag name and node name is used for any type of node for example a text node
let outerhtml = document.getElementsByClassName("box").outerHTML
let nodename = document.getElementsByClassName("box").nodeName
let textcontent = document.getElementsByClassName("box").textContent

// changing inner text
let innertext = document.getElementsByClassName("box").innerText = "Hello world"
let hasattribute = document.getElementsByClassName("box1").hasAttribute("style") // tells is this element style attribute is present or not.
let getattribute = document.getElementsByClassName("box1").getAttribute("style") // it gives the attribute value 
let setattribute = document.getElementsByClassName("box1").setAttribute("style", "display:flex") // it sets the attribute which is after given by the comma (,)
let attribute = document.getElementsByClassName("box1").attributes
let removeattribute = document.getElementsByClassName("box1").removeAttributes("style") // it removes attribute which is given in the bracket
let designmode = "on" // now when this is on we can edit any thing in the website
let dataset = document.getElementsByClassName("box").dataset
let remove = document.querySelector(".box").remove()
let classlist = document.querySelector(".box").classList
let toggle = document.querySelector(".box").classList.toggle("blue") // if there is the class blue it in it will remove if the blue class is not present it will add
let classname = document.querySelector(".box").className