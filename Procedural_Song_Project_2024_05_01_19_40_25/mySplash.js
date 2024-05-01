class Splash {

 constructor() {
   
  this.splashBorder = 100;
  fill(255);
  stroke(255, 0, 0)
  rect(100,100,10000,10000);
  fill(0, 0, 222);
  noStroke()
   
  this.title = createDiv("Procedural Music Sequencer");
  this.title.style('color:deeppink');
  this.title.style('font-family: Arial, Helvetica, sans-serif');
  this.title.position(this.splashBorder+20, this.splashBorder+20);
  
  this.name = createDiv("Michael Chase");
  this.name.position(this.splashBorder+20, this.splashBorder+60);
  
  this.info = createDiv("This project is based on the music generation system used for 'cave' levels in the game Pikmin 2. This system functions by randomly stringing together pieces of pre-written rhythms and melodies, which is what this project attempts to emulate. Move the mouse left and right to adjust the tempo.  Move the mouse up / down and click to add effects");
  
  this.info.position(this.splashBorder+20, this.splashBorder+100);
  this.info.size(windowWidth-this.splashBorder*2-50, windowHeight-this.splashBorder*2-50)
  
}
   


 
  hide(){
    this.title.remove()
    this.name.remove()
    this.info.remove()
  }
}