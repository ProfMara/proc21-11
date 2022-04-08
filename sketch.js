var A, B, C, D;
var disminX, disX, disminY, disY;

function setup() {
    createCanvas(1200, 800);
    A = createSprite(600, 400, 50, 80);
    A.shapeColor = "green";
    A.debug = true;
    B = createSprite(400, 200, 80, 30);
    B.shapeColor = "green";
    B.debug = true;

    C = createSprite(690, 400, 40, 120);
    C.shapeColor = "blue";
    C.debug = true;

    D = createSprite(500, 300, 120, 40);
    D.shapeColor = "blue";
    D.debug = true;


}

function draw() {
    background(0, 0, 0);
    A.x = World.mouseX;
    A.y = World.mouseY;
    A.shapeColor = "green";
    B.shapeColor = "green";
    C.shapeColor = "blue";
    D.shapeColor = "blue";

    disminimaX = A.width / 2 + B.width / 2;
    disminimaY = A.height / 2 + B.height / 2;
    
    tocou(A,B);
  

    drawSprites();
}

function tocou(A, B){
    if (A.x - B.x < disminimaX &&
        B.x - A.x < disminimaX &&
        A.y - B.y < disminimaY &&
        B.y - A.y < disminimaY) 
        {
        A.shapeColor = "red";
        B.shapeColor = "red";
          return true;
        }
        else{
            return false;
        }
}

function quicar(){



}