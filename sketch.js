 var value = 255; //store all the information about the shaking of the device

 var myMc;
 var myImage;

 var abc, def;
 var myTearDrop;
 var amountOfTearDrop = 400; //max drop
 var allMyDrop = []; //array

 function preload() {
   myImage = loadImage("./assets/hotel.jpg"); //load the image
   myMc = loadSound("./assets/mysong.mp3"); //load the sound
 }

 function setup() {
   createCanvas(windowWidth, windowHeight)
   angleMode(DEGREES);

   frameRate(12);
   setShakeThreshold(10); //less is the number, the phone record even the smallest shake. the bigger it is, more you have to shake the phone

   for (var i = 0; i < amountOfTearDrop; i++) { //creating a for cycle with interative variable that goes from 0 to the aount of balls
     var myTearDrop = new Drop(random(1, windowWidth - 1), random(1, windowHeight - 1), random(5, 10), "LightSkyBlue", noStroke());
     allMyDrop.push(myTearDrop);
   }

 }


 function draw() {
   abc = map(rotationY, -180, 180, -10, 10);
   def = map(rotationX, -180, 180, -10, 10);
   background(myImage);

   for (var i = 0; i < allMyDrop.length; i++) {
     var b = allMyDrop[i]; //i dell'array
     b.move();
     b.display();
   }

   var myText = "Merry Christmas!!!"; //text Merry Christmas
   textFont("Lobster");
   textAlign(CENTER);
   textSize(30);
   fill("red");
   text(myText, windowWidth / 2, windowHeight / 2 - 100);
 }

 function deviceShaken() { //function shaken--> song
   myMc.play();
 }

 function touchMoved() {
   return false; //non muovere più lo schermo
 }

 function touchEnded(event) {
   DeviceOrientationEvent.requestPermission();
 }


 function Drop(_x, _y, _d, _color) {
   //properties
   this.size = _d; //variable diameter
   this.x = _x;
   this.y = _y;
   this.color = _color;

   var caso = Math.round(random(-1, 1));
   //methods --> action --> movement
   this.move = function() {
     this.x += abc + caso; //come deve muoversi su x
     this.y += def + caso; //come deve muoversi su y

     if (this.y > windowHeight || this.y < 0) { //condizioni per bouncing
       this.x += -abc;
       this.y += -def;

     } else if (this.x > windowWidth || this.x < 0) { //condizioni per bouncing
       this.x += -abc;
       this.y += -def;
     }
   }

   //methods --> action --> shows the objects
   this.display = function() {
     fill(value);
     ellipse(this.x, this.y, this.size);
   }
 }
