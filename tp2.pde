// video youtube
PImage miImagen;
int cant = 20;
int tamX, tamY;
int posX = 0;
int posY = 0;

void setup(){
  size(800,400);
  //miImagen = loadImage("op tecno.jpg");
  tamX = width/cant;
  tamY = height/cant;
  colorMode(HSB);
}

int col = 0;

void draw(){
  noStroke();
  
    background(col,255,255);

    for(int i=10; i<cant; i+=1){
    for(int j=-30; j<cant; j+=1){
      if((i+j) % 2==0){
      fill(255,0,0,0);
   }else {
     fill(255);
   }
   float x1 = map(mouseX, 0, width, 50, 150);
      rect(i*tamX*1, x1+j*tamY*1, tamX*1, tamY*1.30);
    }
  }
  
  for(int i=10; i<cant; i+=1){
    for(int j=0; j<cant; j+=1){
      if((i+j) % 2==0){
      fill(255,0,0,0);
   }else {
     fill(0);
   }
      rect(i*tamX*1, j*tamY*1.25, tamX*1, tamY*1.30);
      //image(miImagen,0,0,400,400);
    }
  }
}

void mousePressed(){
col+=20;
col%=255;
println(col);
}
