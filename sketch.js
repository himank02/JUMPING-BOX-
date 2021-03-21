var canvas;
var music;
var box;
var surface1, surface2, surface3, surface4;
var edge1, edge2, edge3, edge4;

function preload(){
  
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite (100,580,180,25);
    surface1.shapeColor="blue";
    surface2 = createSprite (300,580,180,25);
    surface2.shapeColor="orange";
    surface3 = createSprite (500,580,180,25);
    surface3.shapeColor="purple";
    surface4 = createSprite (700,580,180,25);
    surface4.shapeColor="green";
    //create box sprite and give velocity
    box = createSprite (random(20,750),30,40,40);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=7.5;

    edge1 = createSprite (0,300,10,600);
    edge1.visible=false;
    edge2 = createSprite (800,300,10,600);
    edge2.visible=false;
    edge3 = createSprite (400,0,800,10);
    edge3.visible=false;
    edge4 = createSprite (400,600,800,10);
    edge4.visible=false;

     // loop sound
  
  // stop sound to prevent it from playing automatically
  music.stop();
  // music visualizer
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    box.bounceOff(edge4); 
    //box.bounceOff(Edges);
    //ball.ifOnEdgeBounce();

    //add condition to check if box touching surface and make it box
    if (surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor="blue";
        box.velocityY=box.velocityY+4;

    }
    if (surface2.isTouching(box) && box.bounceOff(surface2) ) {
        box.shapeColor="orange";
        music.stop();
        music.play();
    }
    if (surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor="purple";
        music.stop();
    }
    if (surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor="green";
        box.velocityY=box.velocityY-4;
    }
    drawSprites();
    textFont("Comic Sans MS");
    textSize(17.5);
    fill("black");
    text("Make Slower", 50, 586);
    text("Play Music", 260, 586);
    fill("white");
    text("Stop Music", 457, 586);
    fill("black")
    text("Make Faster", 655, 586);
}

