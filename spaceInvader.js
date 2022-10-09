"use strict";

let myCanvas = document.querySelector("canvas");
myCanvas.height=window.innerHeight;
myCanvas.width=window.innerWidth;
let myContext=myCanvas.getContext("2d");

drawBackground();
drawSpaceinvader();

function drawBackground() {
myContext.beginPath();
myContext.fillStyle = "black";
myContext.rect(50,50,300,300);
myContext.fill();
}

function drawSpaceinvader() {
myContext.beginPath();
myContext.fillStyle = "#66FF66";
myContext.rect(75,75,250,100);
myContext.rect(125,175,150,50);
myContext.rect(75,275,100,50);
myContext.rect(225,275,100,50);
myContext.fill();
}