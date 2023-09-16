//

const DERECHA = "DERECHA";
const IZQUIERDA = "IZQUIERDA";
const ARRIBA = "ARRIBA";
const ABAJO = "ABAJO";

// SPRITES MARIO, IMG
let cantImagenes = 3;
let imagenesMarioDer = [];
let imagenesMarioIzq = [];
let imagenesMarioSyB = [];
let pisog,pisom,pisoc,escaleras;

let pisos = [623, 505, 386, 267, 149, 31];
let posX = 20;
let posY = 623;
let spriteActualMario = 0;
let pisoMario = 0;
let direccion = DERECHA;

let rapidezMario = 0;
let saltoY = -3;
let impulsoY = 0;
let estaEnPiso = true; 
let estaEnEscalera = false;
let gravedad = 0.1;
let llegoAPrincesa = false;

// BARRILES
let barriles = [];
let indiceBarriles = 0;
let cantidadBarriles = 15;
let tiempoProximoBarril = 1200;
let rapidezBarriles = 5;
let timer;
let spritesBarriles = [];

let spritePrincesa;
let spriteDonkey;

let estado = 0;


function preload() {
  for(let i=0; i<cantImagenes; i++){
    imagenesMarioDer[i] = loadImage('data/mario' + (i+1) + '.png');
    imagenesMarioIzq[i] = loadImage('data/marios' + (i+1) + '.png');
    imagenesMarioSyB[i] = loadImage('data/mariou' + (i+1) + '.png');
  }

  for (let i=0; i < 4; i++) {
    spritesBarriles[i] = loadImage('data/barril' + (i) + ".png"); 
  }
    pisog = loadImage('data/pisog.png');
    pisom = loadImage('data/pisom.png');
    pisoc = loadImage('data/pisoc.png');
    escaleras = loadImage('data/escalera.png');
    spritePrincesa = loadImage('data/princesa.png');
    spriteDonkey = loadImage('data/donkey3.png');
}

function setup() {
  createCanvas(500,700);
  resetearJuego();
}

function draw() {
  background(0,0,0);

  if (estado === 0) { //menu
    menuPrincipal();
  } else if (estado === 1) { //jugar
    pantallaJuego(); 
  } else if (estado === 2) { //gano
    ganaste();
  } else if (estado === 3) { //perdio
    perdiste();
  } else if (estado === 4) { //instrucciones
    instrucciones();
  } else if (estado === 5) { //creditos
    creditos();
  }
}

function comprobarColisiones() {
  if (dist(posX, posY, 275, 15)<30) { 
    llegoAPrincesa = true;
    return true; 
  }
  for (let index = 0; index < cantidadBarriles-1; index++) {
    if (barriles[index][0]) {
      if(dist(posX+25, posY+32, barriles[index][1][0]+25, barriles[index][1][1]+25)<30){
        return true;
      }
    }
  }
}



function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    direccion = DERECHA;
    rapidezMario = 3;
  } else if (keyCode === LEFT_ARROW) {
    direccion = IZQUIERDA;
    rapidezMario = 3;
  } else if (estaEnEscalera && keyCode === UP_ARROW) {
    impulsoY = -3;
  } else if (estaEnEscalera && keyCode === DOWN_ARROW) {
    if (posY + 64 < pisos[pisoMario]) {
      impulsoY = 3;  
    } else {
      posY = pisos[pisoMario];
    }
    
  }
  if (estaEnPiso && key === " ") {
    estaEnPiso = false;
    impulsoY = saltoY;
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    rapidezMario = 0;
  }
  if (estaEnEscalera && (keyCode === UP_ARROW || keyCode === DOWN_ARROW)) {
    impulsoY = 0;
  }
}

function resetearJuego() {
  for (let index = 0; index < cantidadBarriles; index++) {
    barriles[index] = [false, [0.5*width, 31], [-1, 0], 5, false, rapidezBarriles, 0];
  }

  timer = tiempoProximoBarril + round(millis());
  llegoAPrincesa = false;
  posX = 20;
  spriteActualMario = 0;
  pisoMario = 0;
  posY = pisos[pisoMario];
  direccion = DERECHA;

  rapidezMario = 0;
  saltoY = -3;
  impulsoY = 0;
  estaEnPiso = true;
  estaEnEscalera = false;
  gravedad = 0.1;
}

function mousePressed() {
  if (estado === 0) {
    if (colisionBoton(width/2, height/2 + 135, 200, 30)) {
      resetearJuego();
      estado = 1;
    } else if (colisionBoton(width/2, height/2 + 170, 200, 30)) {
      estado = 4;
    } else if (colisionBoton(width/2, height/2 + 205, 200, 30)) {
      estado = 5;
    }
  } else if (estado === 2) {
    if (colisionBoton(width/2, height/2 +135, 200, 30)) { //volver a jugar
      estado = 1;
      resetearJuego();
    } else if (colisionBoton(width/2, height/2 + 170, 200, 30)) { //volver al menu principal
      estado = 0;
    }
  } else if (estado === 3) {
    if (colisionBoton(width/2, height/2 +135, 200, 30)) { //volver a jugar
      estado = 1;
      resetearJuego();
    } else if (colisionBoton(width/2, height/2 + 170, 200, 30)) { //volver al menu principal
      estado = 0;
    }
  } else if (estado === 4) {
    if (colisionBoton(width/2, height/2 + 205, 200, 30)) { //volver al menu principal
      estado = 0;
    }
  } else if (estado === 5) {
    if (colisionBoton(width/2, height/2 + 205, 200, 30)) { //volver al menu principal
      estado = 0;
    }
  }
}
