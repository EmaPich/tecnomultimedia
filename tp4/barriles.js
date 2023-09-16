function loopBarriles() {
  for (let index = 0; index < cantidadBarriles; index++) {
    if (barriles[index][0]) {
      comprobarCaidaBarril(index);
      moverBarril(index);
      dibujarBarril(index);
    }
  }
}

function moverBarril(index) {
  if (barriles[index][2][0] > 0) {
    barriles[index][6]+=0.1;
    if (barriles[index][6] > 3) {
      barriles[index][6] = 0;
    }
  } else if (barriles[index][2][0] < 0) {
    barriles[index][6]-=0.1;
    if (barriles[index][6]<0) {
      barriles[index][6] = 3;
    }
  }
 barriles[index][1][0] += barriles[index][2][0]*barriles[index][5];
  barriles[index][1][1] += barriles[index][2][1];
}

function comprobarCaidaBarril(index) {
  if (barriles[index][3] === 5) { //piso5
    if (barriles[index][1][0] < 195) {
      barriles[index][2][1] = 5;
      barriles[index][5] = 0;
      barriles[index][4] = true;
    }
  } else if (barriles[index][3] === 4) { //piso4  
    if (barriles[index][1][0] > 385) {
      barriles[index][2][1] = 5;
      barriles[index][5] = 0;
      barriles[index][4] = true;
    }
  } else if (barriles[index][3] === 3) { //piso3 
    if (barriles[index][1][0] < 90) {
      barriles[index][2][1] = 5;
      barriles[index][5] = 0;
      barriles[index][4] = true;
    }
  } else if (barriles[index][3] === 2) { //piso2   
    if (barriles[index][1][0] > 385) {
      barriles[index][2][1] = 5;
      barriles[index][5] = 0;
      barriles[index][4] = true;
    }
  } else if (barriles[index][3] === 1) { //piso1
    if (barriles[index][1][0] < 90) {
      barriles[index][2][1] = 5;
      barriles[index][5] = 0;
      barriles[index][4] = true;
    }
  } else if (barriles[index][3] === 0) { //piso0  
    if (barriles[index][1][0] > width) {
      barriles[index][0] = false;
    }
  }

  if (barriles[index][4] && barriles[index][1][1] > pisos[barriles[index][3]-1]+23) {
    barriles[index][4] = false;
    barriles[index][3]--;
    barriles[index][2][0] = -barriles[index][2][0];
    barriles[index][2][1] = 0;
    barriles[index][5] = rapidezBarriles;
  }
}

function dibujarBarril(index) {
  image(spritesBarriles[round(barriles[index][6])], barriles[index][1][0], barriles[index][1][1], 30, 30);
}

//tiempo de aparicion para los barriles
function proximoBarril() {
  if (millis() >= timer){
    timer = tiempoProximoBarril+round(millis());
    barriles[indiceBarriles] = [true, [0.2*width-25, pisos[4]+20], [-1, 0], 5, false, rapidezBarriles, 0];
    if(indiceBarriles >= cantidadBarriles - 1){
      indiceBarriles = 0;
    } else {
      indiceBarriles++;
    }
  }
}
