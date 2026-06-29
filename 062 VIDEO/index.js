const adjectives={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
const shopName={
    4:"Engines",
    5:"Foods",
    6:"Garments"
}
const anotherWord={
    7:"Bros",
    8:"Limited",
    9:"Hub"
}

//this function generates random number from min to max-1
function randNumGenerator(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

let rand1=randNumGenerator(1,4);
let rand2=randNumGenerator(4,7);
let rand3=randNumGenerator(7,10);

let businessName=adjectives[rand1]+" "+shopName[rand2]+" "+anotherWord[rand3];

console.log(businessName);