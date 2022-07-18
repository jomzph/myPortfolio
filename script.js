/* function clickMe(){

document.querySelector(".name").style.backgroundColor = "red";

}*/

let x = 0
let y = 0

function clickMe() {
    if (x == 0) {
        // document.querySelector(".name").style.backgroundColor = "red"; 
        document.querySelector(".job").style.fontSize = "40px";
        x = 1
    }
    else {
        // document.querySelector(".name").style.backgroundColor = "blue";
        document.querySelector(".job").style.fontSize = "20px";
        x = 0
    }
}

function palit() {
    if (y == 0) {
        document.querySelector(".name").innerHTML = "Menes, Joemar"
        y = 1
    }
    else {
        document.querySelector(".name").innerHTML = "Joemar Menes"
        y = 0
    }
}
