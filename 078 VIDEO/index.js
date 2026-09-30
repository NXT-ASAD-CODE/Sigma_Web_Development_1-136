// Index.js
function getRandomNumber() {
    return Math.floor(Math.random() * 7000) + 1;
}
function getRandomNumber2() {
    return Math.floor(Math.random() * 7000) + 1;
}
function getRandomNumber3() {
    return Math.floor(Math.random() * 7000) + 1;
}
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Initializing Hacking')
        }, getRandomNumber())
    })
}

async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Initializing Hacking')
        }, getRandomNumber2())
    })
}

async function getData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Initializing Hacking')
        }, getRandomNumber3())
    })
}

async function main() {
    const con = document.querySelector(".container")

    await getData().then(() => {
        con.innerHTML += `Initializing Hacking <span class="loading">
            <span></span>
            <span></span>
            <span></span>
        </span>` + "<br>";
    })

    await getData2().then(() => {
        con.innerHTML += `Reading your files <span class="loading">
            <span></span>
            <span></span>
            <span></span>
        </span>` + "<br>";
    })

    await getData3().then(() => {
        con.innerHTML += `Password files Detected <span class="loading">
            <span></span>
            <span></span>
            <span></span>
        </span>` + "<br>";
    })
    
}

main();