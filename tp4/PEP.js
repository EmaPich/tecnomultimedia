function dibujarPisos() {
  image(pisoc,226,85);
  image(pisom,0,201,380,17); //x,y,ancho,alto
  image(pisom,120,319,380,17);
  image(pisom,0,438,380,17);
  image(pisom,120,557,380,17);
  image(pisog,0,676,500,17);
}

function dibujarEscaleras() {
  image(escaleras,420,574); //mover,bajar
  image(escaleras,167,455);
  image(escaleras,235,336);
  image(escaleras,126,218);
  image(escaleras,281,100);
}


function pantallaJuego() {
  proximoBarril();
  loopBarriles();
  dibujarEscaleras();
  dibujarPisos();
  dibujarDonkeyPrincesa();
  moverMario();
  dibujarPersonaje();
  let fin = comprobarColisiones();
  if (fin) {
    if (llegoAPrincesa) {
      estado = 2;
    } else {
      estado = 3;
    }
  } 
}

function dibujarDonkeyPrincesa() {
  image(spriteDonkey, 10, 125);
  image(spritePrincesa, 245, 15);
}



function dibujarBoton(texto, x, y, ancho, alto) {
  push();
  if (colisionBoton(x, y, ancho, alto)) {
    fill("PLUM");
  } else {
    fill("RED")
  }

  rectMode(CENTER);
  rect(x, y, ancho, alto);

  fill("WHITE");
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, x, y);
  pop();
}

//comprobar el click en el boton
function colisionBoton(x, y, ancho, alto) {
  return mouseX>x-ancho/2 && mouseX<x+ancho/2 && mouseY>y-alto/2 && mouseY<y+alto/2;
}

//dibujar cursor en la posicion del mouse
function cursorCircular() {
  push();
  stroke("PLUM");
  fill("BLACK");
  ellipse(mouseX, mouseY, 20, 20);
  pop();
}



function menuPrincipal() {
  push();
  textAlign(CENTER, CENTER);
  textSize(40);
  fill("RED");
  text("DONKEY KONG", width/2, height/2-100);
  pop();
  dibujarBoton("PLAY", width/2, height/2 + 135, 200, 30);
  dibujarBoton("HOW TO PLAY", width/2, height/2 + 170, 200, 30);
  dibujarBoton("CREDITS", width/2, height/2 + 205, 200, 30);
}



function instrucciones() {   // Pantalla de instrucciones
  dibujarBoton("BACK", width/2, height/2 + 205, 200, 30);
  push();
  textAlign(CENTER, CENTER);
  fill("WHITE");
  textSize(20);
  text("HOW TO PLAY", width/2, 100);
  text("Objetivo: esquivar los barriles y salvar a Peach.", 250, 170);
  text("Movimientos de Mario: arriba, abajo, izq, der, salto.", 250, 250);
  text("Para eso utilizaras las flechitas y la barra espaciadora.", 250, 290);
  text("Buena suerte!", 250, 370);
  pop();
}

function creditos() {  // Pantalla de creditos
  push();
  textAlign(CENTER, CENTER);
  fill("WHITE");
  textSize(20);
  text("CREDITS", width/2, 100);
  text("Recreacion del juego DONKEY KONG.", width/2, 170);
  text("Ema Pich COMI4", width/2, 205);
  text("Tecnologia Multimedia 1", width/2, 240);
  pop();
  dibujarBoton("BACK", width/2, height/2 + 205, 200, 30);
}


function ganaste() {
  push();
  fill("GREEN");
  textAlign(CENTER, CENTER);
  textSize(40);
  text("WIN", width/2, height/2 - 100);
  pop();
  dibujarBoton("TRY AGAIN", width/2, height/2 +135, 200, 30);
  dibujarBoton("MENU", width/2, height/2 +170, 200, 30);
}
function perdiste() {
  push();
  fill("RED");
  textAlign(CENTER, CENTER);
  textSize(40);
  text("LOSE", width/2, height/2 - 100);
  pop();
  dibujarBoton("TRY AGAIN", width/2, height/2 +135, 200, 30);
  dibujarBoton("MENU", width/2, height/2 +170, 200, 30);
}
