function dibujarPersonaje() {
  fill(0);
  if (direccion == DERECHA) {
    image(imagenesMarioDer[round(spriteActualMario)], posX, posY);
  } else if (direccion == IZQUIERDA) {
    image(imagenesMarioIzq[round(spriteActualMario)], posX, posY);
  } else if (direccion == ARRIBA) {
    image(imagenesMarioSyB[round(spriteActualMario)], posX, posY);
  } else if (direccion == ABAJO) {
    image(imagenesMarioSyB[round(spriteActualMario)], posX, posY);
  }
}

function calcularSiguienteSpriteDeMario() {
  if (direccion == DERECHA) {
    if (spriteActualMario >= cantImagenes-1) {
      spriteActualMario = 0;
    } else {
      spriteActualMario+=0.1;
    }
  } else if (direccion == IZQUIERDA) {
    if (spriteActualMario < 0) {
      spriteActualMario = cantImagenes-1;
    } else {
      spriteActualMario-=0.1;
    }
    } else if (direccion == ARRIBA) {
    if (spriteActualMario < 0) {
      spriteActualMario = cantImagenes-1;
    } else {
      spriteActualMario-=0.1;
    }
    } else if (direccion == ABAJO) {
    if (spriteActualMario < 0) {
      spriteActualMario = cantImagenes-1;
    } else {
      spriteActualMario-=0.1;
    }
  }
}


function encontroEscalera() {
  if (pisoMario === 0) {
    if(posX+25 > 420 && posX+25 < 420+escaleras.width) {
      if(!estaEnEscalera && !estaEnPiso){
        impulsoY = 0;
      }
      estaEnEscalera = true;
      estaEnPiso = false;
    } else {
      estaEnEscalera = false;
    }
  }else if (pisoMario === 1) {
     if(posX+25 > 167 && posX+25 < 167+escaleras.width) {
      if(!estaEnEscalera && !estaEnPiso){
        impulsoY = 0;
      }
      estaEnEscalera = true;
      estaEnPiso = false;
    } else if (estaEnPiso && posX + 50 < 128) {
      pisoMario--;
      estaEnPiso = false;
    }else {
      estaEnEscalera = false;
    }
  } else if (pisoMario === 2) {
    if(posX+25 > 235 && posX+25 < 235+escaleras.width) {
      if(!estaEnEscalera && !estaEnPiso){
        impulsoY = 0;
      }
      estaEnEscalera = true;
      estaEnPiso = false;
    } else if (estaEnPiso && posX > 360) {
      pisoMario--;
      estaEnPiso = false;
    }else {
      estaEnEscalera = false;
    }
  } else if (pisoMario === 3) {
     if(posX+25 > 126 && posX+25 < 126+escaleras.width) {
      if(!estaEnEscalera && !estaEnPiso){
        impulsoY = 0;
      }
      estaEnEscalera = true;
      estaEnPiso = false;
    } else if (estaEnPiso && posX + 50 < 128) {
      pisoMario--;
      estaEnPiso = false;
    }else {
      estaEnEscalera = false;
    }
  }  else if (pisoMario === 4) {
    if(posX+25 > 281 && posX+25 < 281+escaleras.width) {
      if(!estaEnEscalera && !estaEnPiso){
        impulsoY = 0;
      }
      estaEnEscalera = true;
      estaEnPiso = false;
    } else if (estaEnPiso && posX > 360) {
      pisoMario--;
      estaEnPiso = false;
    }else {
      estaEnEscalera = false;
    }
  } else if (pisoMario === 5) {
    if (posX+25 > 281+escaleras.width || posX+25 < 220) {
      pisoMario--;
      estaEnPiso = false;
    }
  }

  if (posY < pisos[pisoMario+1]){
    estaEnEscalera = false;
    pisoMario++;
    impulsoY = 0;
    posY = pisos[pisoMario];
    estaEnPiso = true;
  }
}

function moverMario() {
  encontroEscalera();
  if (rapidezMario !== 0){
    calcularSiguienteSpriteDeMario();
  } else {
    spriteActualMario = 0;
  }

  if(!estaEnPiso && !estaEnEscalera) {
    impulsoY += gravedad;
    spriteActualMario = 0;
    if (posY > pisos[pisoMario]) {
      impulsoY = 0;
      estaEnPiso = true;
      posY = pisos[pisoMario];
    }
  }

  if (direccion == DERECHA) {
    posX += rapidezMario;
  } else if (direccion == IZQUIERDA) {
    posX -= rapidezMario;
  }
  
  posY += impulsoY;
}
