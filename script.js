/* function clickMe(){

document.querySelector(".name").style.backgroundColor = "red";

}*/

let x = 0

function clickMe() {
    if (x == 0) {
        document.querySelector(".name").style.backgroundColor = "red"; 
        document.querySelector(".name").innerHTML = "Joemar Menes POGI"
        x = 1
    }
    else {
        document.querySelector(".name").style.backgroundColor = "blue";
        document.querySelector(".name").innerHTML = "Joemar Menes"
        x = 0
    }
}
