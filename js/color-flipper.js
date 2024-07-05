const body = document.getElementsByTagName("body")[0];
const colorpicked = document.getElementById("chosen-color");


function setColor(colorName){
    const btn = document.getElementById(colorName);
    const getColor = window.getComputedStyle(btn);
    body.style.backgroundColor = btn.textContent;
    colorpicked.innerText = getColor.backgroundColor;
}

function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
    colorpicked.innerText = color;
}
