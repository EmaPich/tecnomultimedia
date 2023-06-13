// video youtube
PImage miImagen;
int cant = 20;
int tamX, tamY;

void setup(){
  size(800,400);
  miImagen = loadImage("op tecno.jpg");
  tamX = width/cant;
  tamY = height/cant;
  background(118,62,19);
}

void draw(){
  noStroke();
  for(int i=10; i<cant; i+=1){
    for(int j=0; j<cant; j+=1){
      if((i+j) % 2==0){
      float distancia = dist(i*tamX, j*tamY, mouseX, mouseY);
      float miColor= map(distancia, 0, 200, 255, 0);
      fill(miColor, 0, 0);
   }
      else fill(0);
      rect(i*tamX, j*tamY, tamX, tamY);
      image(miImagen,0,0,400,400);
    }
  }
}
