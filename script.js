document.getElementById("myBtn").addEventListener("click", buttonAlert);

function buttonAlert() {
  alert ("Hi! Isn't Javascript cool-???");
}

function helloAnimation(){
    document.getElementById('hello').style.transform="scale(1.1,1.1)"
}

window.onscroll = function helloRotate(){
    document.getElementById('hello').style.transform="rotate(7deg)"
}