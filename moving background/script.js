var container = document.getElementById("container");
var image = document.getElementById("image");

var windowWidth = window.innerWidth;
var windowHeight = windowHeight;

function moveBackground(event) {


    var mouseXposition = event.clientX;
    var mouseYposition = event.clientY;

    var calculatedX = mouseXposition / (windowWidth /7)
    var calculatedY = mouseYposition / (windowWidth /7) 

    image.style.transform="translate(-"+calculatedX.toString()+"%,-"+calculatedY.toString()+"%)";
} 

 container.addEventListener("mousemove", moveBackground);