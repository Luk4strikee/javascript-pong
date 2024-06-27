//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
function setup(){
    //aqui vou criar minh "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da "mesa"
    background(127,255,212);
    //chamando a função 
    criaBolinha(xBolinha,yBolinha,tamBolinha);
}

//função bolinha
function criaBolinha(xBolinha,yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}