let count = document.getElementById("count")
let button = document.getElementById("button")
let c = 1;

console.log(y)

function counter() {
    let wert1 = ~~(Math.random() * 256)
    let wert2 = ~~(Math.random() * 256)
    let wert3 = ~~(Math.random() * 256)
    let thergb = "rgb(" + wert1 + "," + wert2 + "," + wert3 + ")";
    document.body.style.backgroundColor = thergb;
    count.innerHTML= `Your score is: ${c}`
    c++;

}

function teleport () {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let x = ~~(Math.random()* screenWidth);
    let y = ~~(Math.random()* screenHeight)
    
    button.style.left = x + "px"
    button.style.top = y + "px"

}


