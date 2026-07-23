let btn = document.getElementById("change")
// btn.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerText = "I am changed suii"
// })
// btn.addEventListener("click",()=>{
//     document.querySelector(".box").innerText = "I am changed suii"
// })
// btn.addEventListener("contextmenu",()=>{
//     document.querySelector(".box").innerText = "I am changed suii"
// })
btn.addEventListener("keydown",(e)=>{
    console.log(e.key);
    
})

// random color genrator 
       function getRandomColor() {
            let value1 = Math.ceil( 0 + Math.random() *255 ) 
            let value2 = Math.ceil( 0 + Math.random() *255 )
            let value3 = Math.ceil( 0 + Math.random() *255 )
            return `rgb(${value1} , ${value2} , ${value3})`
        }