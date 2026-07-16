let a = document.getElementsByClassName('box')
let b = Array.from(a)
b.forEach(e=>{
    let random = Math.random()
    if(random>0.9){
        e.style.backgroundColor = "red"
    }
    if(random>0.8 && random < 0.9){
        e.style.backgroundColor = "yellow"
    }
    if(random>0.6 && random < 0.8){
        e.style.backgroundColor = "blue"
    }
    if(random>0.4 && random < 0.6){
        e.style.backgroundColor = "greem"
    }
    if(random>0.2 && random < 0.4){
        e.style.backgroundColor = "orange"
    }

})