// https://www.youtube.com/watch?v=EXSRNDfUqKQ
PImage[] imAgen = new PImage[15];
String[] textO = new String[15];
PFont fonti;

int j,bot1x=480,bot1y=528;
int sbx1=190,sbx2=342,spy=467;
int estado = 1;

void setup(){
  size(600,600);
  fonti = loadFont("BookAntiqua-Bold-48.vlw");
  for(j=0; j<15; j++){
      imAgen[j] = loadImage("parte"+j+".png");
}  
 
  textO[0] = "\n\n\n\n\n\n\n CREDITOS: \n Ema Pich COMI4 \n Autor:Robert Louis Stevenson";
  textO[1] = "";
  textO[2] = "     Tu nombre es Jim Hawkins. Sos un niño \n   aventurero y con un sueño por cumplir, \n encontrar la famosa Isla Del Tesoro.";
  textO[3] = "\n\n   Un día, te enteras que hay una tripulación con \n destino a la isla. Decidis viajar con ellos o no?";
  textO[4] = "Al final decidis no viajar y quedarte con \n       tu madre.\n       FIN";
  textO[5] = "Al final decidis viajar con la tripulación para \n       cumplir tu gran sueño.";
  textO[6] = "\n\n\n\n\n\n\n\n\nEn el emocionante viaje, conoces a un compañero \n llamado John Silver. Parece buen amigo. \n                   Confías en él o no?";
  textO[7] = "            Estás seguro de esta decisión?";
  textO[8] = "            Estás seguro de esta decisión?";
  textO[9] = "John Silver termina traicionandote \n    y robandose el tesoro.\n        FIN";
  textO[10] ="\n\n\n\n\n\n\n\n\n\n\n   Te enteras que John Silver no era un \n  buen compañero, asique decidis ignorarlo. \n Al poco tiempo, llegas a la Isla Del Tesoro.";
  textO[11] ="Al bajarte, conoces a BEN, un robot super \n        amigable que dice saber donde \nesta el tesoro en la isla. Qué decidis hacer?";
  textO[12] ="\n\n\n\n\n\n\n\n\n\n\n\n\n\n   BEN sabía donde estaba el tesoro y \nperdiste la oportunidad de encontrarlo.\n          FIN";
  textO[13] ="\n\n\n\n\n      BEN sabia donde estaba el tesoro \n          y te ayuda a encontrarlo.";
  textO[14] ="Te vuelves satisfecho por \n  por haber cumplido tu \n        mayor sueño. \n\n\n\n FIN.";
}

//parametro q retorna valor
float disBoton(int xboton, int yboton){
 float r=0;
 r=dist(mouseX, mouseY, xboton, yboton);
   return r;
}

//parametros q no retornan
void pant(int pos, int canBoton, String b1, String b2){
  noStroke();
   fill(255);
   textFont(fonti, 20);
   image(imAgen[pos], 0, 0, 600, 600);
   text(textO[pos], 100, 100);
   if(canBoton == 1){
     fill(207,180,255);
     rect(bot1x,bot1y,100,50); //1 boton
     fill(255);
     textSize(20);
     text(b1,487,560);
    }else{
     fill(207,180,255);
     rect(sbx1,spy,100,50); //2 botones
     rect(sbx2,spy,100,50);
     fill(255);
     textSize(20);
     text(b1, 200,500);
     text(b2, 362,500);
    }  
}  

void draw(){
     if(estado == 1){
     pant(1,2,"Créditos","Iniciar");
    }
     if(estado == 0){
     pant(0,1,"   Inicio","");
    }
     if(estado == 2){
     pant(2,1,"Siguiente","");
    }
     if(estado == 3){
     pant(3,2,"    Si","  No");
    }
     if(estado == 4){
     pant(4,1,"  Inicio","");
    }
     if(estado == 5){
     pant(5,1,"Siguiente","");
    }
     if(estado == 6){
     pant(6,2,"    Si","  No");
    }
     if(estado == 7){
     pant(7,2,"    Si","  No");
    }
     if(estado == 8){
     pant(8,2,"    Si","  No");
    }
     if(estado == 9){
     pant(9,1,"   Inicio","");
    }
     if(estado == 10){
     pant(10,1,"Siguiente","");
    }
     if(estado == 11){
     pant(11,2,"Confiar en \n   BEN","Ignorar \na  BEN");
    }
     if(estado == 12){
     pant(12,1,"   Inicio","");
    }
     if(estado == 13){
     pant(13,1,"Siguiente","");
    }
     if(estado == 14){
     pant(14,1,"   Inicio","");
    }
println(estado);
}

void mousePressed(){
 
 if(estado == 1){ 
    if(disBoton(sbx1,spy) < 60)
     estado = 0;
     else
     if(disBoton(sbx2,spy) < 60)
     estado = 2;
     
 }else        
    if(estado == 0){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 1;  
    
 } else
    if(estado == 2){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 3; 
 }else
    if(estado == 3){
    if(disBoton(sbx1,spy) < 60)
    estado = 5;
    else
    if(disBoton(sbx2,spy) < 60)
    estado = 4;
 } else
    if(estado == 4){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 1; 
 } else
    if(estado == 5){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 6;
 }else
    if(estado == 6){
    if(disBoton(sbx1,spy) < 60)
    estado = 8;
    else
    if(disBoton(sbx2,spy) < 60)
    estado = 7;
 }else 
    if(estado == 7){
    if(disBoton(sbx1,spy) < 60)
    estado = 10;
    else
    if(disBoton(sbx2,spy) < 60)
    estado = 6;
 }else 
    if(estado == 8){
    if(disBoton(sbx1,spy) < 60)
    estado = 9;
    else
    if(disBoton(sbx2,spy) < 60)
    estado = 6;
 } else
    if(estado == 9){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 1;
 } else
    if(estado == 10){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 11;
 }else 
    if(estado == 11){
    if(disBoton(sbx1,spy) < 60)
    estado = 13;
    else
    if(disBoton(sbx2,spy) < 60)
    estado = 12;
 } else
    if(estado == 12){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 1;
 } else
    if(estado == 13){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 14;
 } else
    if(estado == 14){ 
    if(disBoton(bot1x,bot1y) < 60)
    estado = 1;
     
 } 
}  
