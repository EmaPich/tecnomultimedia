PImage pantalla1;
PImage pantalla2;
PImage pantalla3;
PImage reinicio;

PFont myFont;

float y = 50;
float x = 50;
float velocidad = 0.5;

int pantalla = 1;
int tiempo = 7;
int tiempobotonreinicio = second();

void setup() {
  size(640, 480);

  pantalla1 = loadImage("apoloonce.jpeg");
  pantalla2 = loadImage("apolooncedos.jpeg");
  pantalla3 = loadImage("apolooncetres.jpg");
  reinicio = loadImage("reiniciar.png");
  
  myFont = loadFont("TrebuchetMS-48.vlw");
  textFont(myFont);
  
  tiempo = second();
}

void draw() {
  if (pantalla == 1) {
    image(pantalla1, 0, 0, 640, 480);
    fill (0);
    textSize(25);
    text("La nave Apolo de la misión se envió al espacio \nel 16 de julio de 1969, realizó su alunizaje \nel 20 de julio de ese mismo año y al día siguiente \ndos astronautas se convirtieron en los primeros \nen caminar sobre la superficie lunar.",x-80, 200, 250);
    x += velocidad;
  } else if (pantalla == 2) {
    image(pantalla2, 0, 0, 640, 480);
    fill (250);
    text("El Apolo 11 fue impulsado por un \ncohete Saturno V desde la plataforma LC 39A y \nlanzado a las 13:32 UTC \ndel complejo de cabo Kennedy, en Florida (EE. UU.).", y-1, 200, 250);
    y -= velocidad;
  } else if (pantalla == 3) {
    image(pantalla3, 0, 0, 640, 480);
    fill (200);
    text("La denominación de las naves fue Eagle para el módulo lunar y Columbia para el módulo de \nmando.", mouseX, mouseY, 200, 250);
     if (x > 150) {
       velocidad = 0;
     }
  }

  if (second() - tiempobotonreinicio > 10 && pantalla == 3) {
    image(reinicio, 500, 370, 100, 50);
  }

  if (second() - tiempo > 3) {
    pantalla++;
    tiempo = second();
  }
  
  if (pantalla > 3) {
    pantalla = 3;
  }
}

void mouseClicked() {
  if (pantalla == 3 && mouseX > 500 && mouseX < 600 && mouseY > 370 && mouseY < 420) {
    pantalla = 1;
  tiempo = second();
  x = 50;
  y = 50;
  velocidad = 1;
  }
}
