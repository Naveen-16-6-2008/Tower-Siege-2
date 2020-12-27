const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    function preload(){

    }

    function setup(){
    createCanvas(2000, 700);

        
	engine = Engine.create();
    world = engine.world;
    
    //Create the Bodies Here.
	ground1 = new Ground(600,height,2000,20);
	ground2 = new Ground(590,400,255,10);
    ground3 = new Ground(1000,250,225,10);
    polygon = new Polygon(200,250,30);

block1 = new Block(495,375,30,40);
block2 = new Block(525,375,30,40);
block3 = new Block(555,375,30,40);
block4 = new Block(585,375,30,40);
block5 = new Block(610,375,30,40);
block6 = new Block(640,375,30,40);
block7 = new Block(670,375,30,40);

    block8 = new Block(525, 335, 30, 40) ;
    block9 = new Block (555, 335, 30, 40) ;
    block10 = new Block(585, 335, 30, 40) ;
    block11 = new Block(610, 335, 30, 40) ;
    block12 = new Block(640, 335, 30, 40) ;
    //level three
    block13 = new Block(555, 295, 30, 40) ;
    block14 = new Block(585, 295, 30, 40) ;
    block15 = new Block(610, 295, 30, 40) ;
    //top
    block16 = new Block(582, 255, 30, 40) ;
    block17 = new Block(925, 225, 30, 40) ;
    block18 = new Block (955, 225, 30, 40) ;
    block19 = new Block(985, 225, 30, 40) ;
    block20 = new Block(1015, 225, 30, 40) ;
    block21 = new Block(1045, 225, 30, 40) ;
    //level three
    block22 = new Block(955, 185, 30, 40) ;
    block23 = new Block(985, 185, 30, 40) ;
    block24 = new Block(1015, 185, 30, 40) ;
    //top
    block25 = new Block(985, 145, 30, 40) ;


	slingshot = new SlingShot(polygon.body,{x:200,y:250});


    Engine.run(engine);

    }

    function draw(){
    background(225);
    textSize(25);

	text("Drag the Hexagonal Stone and Release it, to launch it towards the block",100,50);
    
    
        ground1.display();
        ground2.display();
        ground3.display();
        fill(135,206,234);

        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        fill(255,192,203);
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        fill(63,224,208);

        block13.display();
        block14.display();

        block15.display();
        fill(128,128,128);
        block16.display();
        fill(135,206,234);

        block17.display();

        block18.display();
        block19.display();
        block20.display();

        block21.display();
        fill(255,192,203);

        block22.display();
        block23.display();
        block24.display();
        fill(128,128,128);

        block25.display();


        polygon.display();
        slingshot.display();
    }

    function mouseDragged(){
        Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    }
    
    function mouseReleased(){
        slingshot.fly();		
    }

function keyPressed() {
 if (keyCode === 32){
    Matter . Body .setPosition(polygon. body, {x:200, y:250})
    slingshot.attach(polygon.body);
    }
}
    
