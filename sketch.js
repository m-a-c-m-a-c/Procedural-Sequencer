let leadOsc
let leadMod
let bassOsc
let bassMod
let bellOsc
let bellMod
let shak

let slapdash = 1

var cir

var mode = 0;

var lS = 1
var bS = 1
var beS = 1

//lead display
let lD1 = 0
let lD2 = 0
let lD3 = 0
let lD4 = 0
let lD5 = 0

//bass display
let bD1 = 0
let bD2 = 0
let bD3 = 0
let bD4 = 0
let bD5 = 0

//bell display
let beD1 = 0
let beD2 = 0
let beD3 = 0
let beD4 = 0

//lead melodies
let leM1 = [64, 0 , 62, 64, 0 , 0 , 0 , 0 ];
let leM2 = [0 , 0 , 67, 69, 70, 69, 67, 0 ];
let leM3 = [64, 60, 0 , 58, 0 , 62, 0 , 0 ];
let leM4 = [0 , 0 , 0 , 0 , 60, 57, 55, 0 ];
let leM5 = [0 , 0 , 60, 62, 60, 0 , 0,  58];
let leM6 = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];

//basslines
let baM1 = [36, 0 , 0 , 36, 0 , 0 , 0 , 0 ];
let baM2 = [0 , 0 , 41, 0 , 43, 34, 0 , 0 ];
let baM3 = [36, 36, 0 , 45, 46, 43, 45, 0 ];
let baM4 = [38, 0 , 43, 41, 0 , 36, 38, 0 ];
let baM5 = [31, 31, 31, 0 , 29, 0 , 0,  31];
let baM6 = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];
let baM7 = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];

//bell melodies
let beM1 = [84 ,0 , 0 , 86, 84, 0 , 0 , 0 ];
let beM2 = [0 , 88, 84, 82, 79, 0 , 0 , 0 ];
let beM3 = [0 , 0 , 0 , 0 , 0 , 82, 84, 0 ];
let beM4 = [0 , 0 , 79, 0 , 0 , 81, 79, 0 ];
let beM5 = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];
let beM6 = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];
let beM7 = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];


//contains the list of melodies for each instrument
var leadMelArray = [leM1, leM2, leM3, leM4, leM5, leM6];
var bassMelArray = [baM1, baM2, baM3, baM4, baM5, baM6, baM7];
var bellMelArray = [beM1, beM2, beM3, beM4, beM5, beM6, beM7];

//lead melody info
var leadCurrentMel = [0, 0, 0, 0, 0, 0, 0, 0];
var leadMidiVal = 0;
var leadFreq = 0;

//bass melody info
var bassCurrentMel = [0, 0, 0, 0, 0, 0, 0, 0];
var bassMidiVal = 0;
var bassFreq = 0;

//bell melody info
var bellCurrentMel = [0, 0, 0, 0, 0, 0, 0, 0];
var bellMidiVal = 0;
var bellFreq = 0;

//beat timer
let timer = 0;
let beat = 0;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(0)



  //lead oscillator
  leadOsc = new p5.Oscillator('triangle');
  
  //lead modulator
  leadMod = new p5.Oscillator('sawtooth')
  leadMod.disconnect()
  leadMod.freq(1000000*lS)
  leadMod.amp(mouseY)
  
  leadOsc.amp(leadMod)
  
  //lead envelope
  leadEnv = new p5.Envelope(0.1, 1, 0.2, 0);
  
  //bell oscillator
  bellOsc = new p5.Oscillator('sine');
  
  //bell modulator
  bellMod = new p5.Oscillator('sawtooth')
  bellMod.disconnect()
  bellMod.freq(1000000)
  bellMod.amp(mouseY)
  
  bellOsc.amp(bellMod)
  
  //bell envelope
  bellEnv = new p5.Envelope(0.01, 0.5, 0.3, 0);
  
  //bass oscillator
  bassOsc = new p5.Oscillator('triangle');
  
  //bass modulator
  bassMod = new p5.Oscillator('sin')
  bassMod.disconnect()
  bassMod.freq(100000)
  bassMod.amp(mouseY)

  
  
  bassOsc.amp(bassMod)
  
  distort = new p5.Distortion(0, 'none')
  distort.process(bassOsc)
  
  bassEnv = new p5.Envelope(0.01, 1, 0.3, 0);
  
  shak = new p5.Noise()
  shak.amp(1)
  
  shakEnv = new p5.Envelope(0.01, 1, 0.3, 0);

  splash = new Splash();
  
}

function draw() {


  
      if (mouseIsPressed == true) {
   
    mode = 1;
    leadOsc.start();
        leadMod.start();
    bassOsc.start();
      bassMod.start();
        bellOsc.start();
      bellMod.start();
      
  }
  if (mode == 1) {
    slapdash = 1
    splash.hide();
    
    background(20)
  
  
  if (leadMidiVal == 0){
     lS = 0
   } else{
     lS = 1
   }
  
    if (bassMidiVal == 0){
     bS = 0
   } else{
     bS = 1
   }
  
      if (bellMidiVal == 0){
     beS = 0
   } else{
     beS = 1
   }
  
    if (leadCurrentMel == leM1){
      lD1 = 30} else {lD1 = 0}
    if (leadCurrentMel == leM2){
      lD2 = 30} else {lD2 = 0}
    if (leadCurrentMel == leM3){
      lD3 = 30} else {lD3 = 0}
    if (leadCurrentMel == leM4){
      lD4 = 30} else {lD4 = 0}
    if (leadCurrentMel == leM5){
      lD5 = 30} else {lD5 = 0}
  
    if (bassCurrentMel == baM1){
      bD1 = 30} else {bD1 = 0}
    if (bassCurrentMel == baM2){
      bD2 = 30} else {bD2 = 0}
    if (bassCurrentMel == baM3){
      bD3 = 30} else {bD3 = 0}
    if (bassCurrentMel == baM4){
      bD4 = 30} else {bD4 = 0}
    if (bassCurrentMel == baM5){
      bD4 = 30} else {bD5 = 0}
  
    if (bellCurrentMel == beM1){
      beD1 = 30} else {beD1 = 0}
    if (bellCurrentMel == beM2){
      beD2 = 30} else {beD2 = 0}
    if (bellCurrentMel == beM3){
      beD3 = 30} else {beD3 = 0}
    if (bellCurrentMel == beM4){
      beD4 = 30} else {beD4 = 0}
    
      distort.set(mouseY/700, 'none')
  
    strokeWeight(0)
    fill(186, 26, 61)
  rect(0, height/4-50, width, 100)
    fill(24, 78, 219)
  rect(0, height/2-50, width, 100)
    fill(217, 182, 7)
  rect(0, (height*3)/4-50, width, 100)
  
  lIndicator(width/6 - 50, height/4 - 50, lD1,"Lead 1")
  lIndicator(width/3 - 50, height/4 - 50, lD2,"Lead 2")
  lIndicator(width/2 - 50, height/4 - 50, lD3,"Lead 3")
  lIndicator((width*2)/3 - 50, height/4 - 50, lD4,"Lead 4")
  lIndicator((width*5)/6 - 50, height/4 - 50, lD5,"Lead 5")
  
  bIndicator(width/6 - 50, height/2 - 50, bD1,"Bass 1")
  bIndicator(width/3 - 50, height/2 - 50, bD2,"Bass 2")
  bIndicator(width/2 - 50, height/2 - 50, bD3,"Bass 3")
  bIndicator((width*2)/3 - 50, height/2 - 50, bD4,"Bass 4")
  bIndicator((width*5)/6 - 50, height/2 - 50, bD5,"Bass 5")
  
  beIndicator(width/5 - 50, (height*3)/4 - 50, beD1,"Bell 1")
  beIndicator((width*2)/5 - 50, (height*3)/4 - 50, beD2,"Bell 2")
  beIndicator((width*3)/5 - 50, (height*3)/4 - 50, beD3,"Bell 3")
  beIndicator((width*4)/5 - 50, (height*3)/4 - 50, beD4,"Bell 4")
  

  
  stroke(0)
  strokeWeight(5)
  fill(186, 26, 61)
  circle((width*3)/4, (height*2.5) - (leadMidiVal * 20), 50+cir)
  fill(24, 78, 219)
  circle(width/4, (height*1.75) - (bassMidiVal * 25), 50+cir)
  fill(217, 182, 7)
  circle(width/2, (height+1500) - (bellMidiVal*20), 50+cir)

  if (millis() - timer > 1000-mouseX) {
    timer = millis();   //timer
    cir = 10
    leadEnv.play(leadOsc); //plays lead
    bassEnv.play(bassOsc); //plays bass
    bellEnv.play(bellOsc); //plays bell
    shakEnv.play(shak);
    cir = 0
    beat = beat + 1;    //increases beat count
    

    leadMidiVal = leadCurrentMel[beat];
    leadFreq = midiToFreq(leadMidiVal);
    leadOsc.freq(leadFreq);
    
    bassMidiVal = bassCurrentMel[beat];
    bassFreq = midiToFreq(bassMidiVal);
    bassOsc.freq(bassFreq);
    
    bellMidiVal = bellCurrentMel[beat];
    bellFreq = midiToFreq(bellMidiVal);
    bellOsc.freq(bellFreq);

    if (beat == 7) {
      beat = -1;
      leadCurrentMel = random(leadMelArray);
      bassCurrentMel = random(bassMelArray);
      bellCurrentMel = random(bellMelArray);
      console.log(distort.getAmount())
    }
  }
  }
}

function lIndicator(x,y,m,t){
  textFont('Verdana')
  strokeWeight(0)
  fill(186+m, 26+m, 61+m)
  square(x,y,100)
  fill(0)
  text(t,x+25,y+50)
}

function bIndicator(x,y,m,t){
  fill(24+m, 78+m, 219+m)
  square(x,y,100)
  fill(0)
  text(t,x+25,y+50)
}

function beIndicator(x,y,m,t){
  fill(217+m, 182+m, 7+m)
  square(x,y,100)
  fill(0)
  text(t,x+25,y+50)
}
