let sSlider, wSlider, pSlider, hSlider;
let crSlider, cgSlider, cbSlider;

var button1, button2, button3;
var buttoncaps, bottonLower;


var buttoncolorw ,buttoncolorb;
let input, buttongo;

var buttonbrexit;

let inputimg;
let img;


function setup() {
createCanvas(window.innerWidth, window.innerHeight);
    
    
    
  textSize(15);
  noStroke();
    
    
    //background
    fill(100);
    rect(0,0,100,100);
    
    
    input=createInput('');
    input.position(20,100);
    input.changed(drawWord);
    buttongo = createButton("go");
    buttongo.position(160, 100);
    buttongo.mousePressed(drawWord);
    
    
inputimg = createFileInput(handleFile);
inputimg.position(20,130);
    

  // create sliders type
  sSlider = createSlider(100,150);
  sSlider.position(20, 190);
  wSlider = createSlider(1,999);
  wSlider.position(20, 220);
  pSlider = createSlider(window.innerWidth/4,window.innerWidth/2);
  pSlider.position(20, 250);
    hSlider = createSlider(window.innerHeight/28, window.innerHeight/1.5);
  hSlider.position(20, 280);
    
    
    //button
    
    buttoncaps=createButton("upper");
    buttoncaps.mousePressed(changeCaps)
    buttoncaps.position(20,335);
    
    buttonLower=createButton("lower");
    buttonLower.mousePressed(changeLower)
    buttonLower.position(70,335);
    
    button1=createButton("serif");
    button1.mousePressed(changeTypeserif)
    button1.position(20,360);
    
    button2=createButton("sans serif");
    button2.mousePressed(changeTypesans)
    button2.position(65,360);
    
    button3=createButton("blackletter");
    button3.mousePressed(changeTypeblack)
    button3.position(135,360);
    
     
    buttoncolorw=createButton("white");
    buttoncolorw.mousePressed(changewhite)
    buttoncolorw.position(20,390);
   
    
     buttoncolorb=createButton("black");
    buttoncolorb.mousePressed(changeblack)
    buttoncolorb.position(70,390);
    
    
    
    // create sliders colors
  crSlider = createSlider(0, 255, 100);
  crSlider.position(20, 440);
  cgSlider = createSlider(0, 255, 0);
  cgSlider.position(20, 470);
  cbSlider = createSlider(0, 255, 255);
  cbSlider.position(20, 500);
    
    
   
    

    
    
   
    
    
    //buttonbrexit=createButton("img 01");
    //buttonbrexit.mousePressed(changebrexit)
    //buttonbrexit.position(20,450);
    
    
    //p = createP('change');
    
   //var p = input.value(); 
    

   
   
     p = createP(input.value());
     
    
}



function draw() {

  background(255);
    
    
    push();
    textSize(20);
    text('Write down a word', 20,40);
    text('and upload an image', 20,62);
    pop();
    
    
    textSize(12);
  text('size', sSlider.x * 2 + sSlider.width, 205);
  text('weight', wSlider.x * 2 + wSlider.width, 235);
  text('position x', pSlider.x * 2 + pSlider.width, 265);
    text('position y', hSlider.x * 2 + hSlider.width, 295);
    
  push();
    
const r = crSlider.value();
  const g = cgSlider.value();
  const b = cbSlider.value();
    
    fill(r,g,b);
    rect(width/5,0,width,height);
    
    pop();
    
    text('r', sSlider.x * 2 + crSlider.width, 450);
  text('g', wSlider.x * 2 + cgSlider.width, 480);
  text('b', pSlider.x * 2 + cbSlider.width, 515);
    
    
    
  

  
   

p.style('font-size' ,sSlider.value()+'px');
p.style('font-weight' ,wSlider.value());
p.style('text-align', 'center');
p.position(pSlider.value(),hSlider.value());
     


  if (img) {
    image(img,width/5,0,width,height);
  }
}
  

 
    
    




function changeTypeserif(){
    p.style('font-family', 'Source Serif');
}

function changeTypesans(){
    p.style('font-family', 'Source Sans'); 
}

function changeTypeblack(){
    p.style('font-family', 'blackletter');
    
}

function changeCaps(){
    p.style('text-transform', 'uppercase');   
}

function changeLower(){
    p.style('text-transform', 'lowercase');
}

function changewhite(){
    
    p.style('color', 'white');
    
}

function changeblack(){
    
    p.style('color', 'black');
    
}

function drawWord (){
    input.remove();
    buttongo.remove();
   p = createP(input.value());
    
    for(var i=0; i < 30; i++) {
    text(p);
        
    }
}



function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}
