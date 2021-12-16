const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42;
var d1, d2, d3, d4, d5, d6, d7;
var ground;



function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  // p1 = new Plinko();
  // p2 = new Plinko();
  // p3 = new Plinko();
  // p4 = new Plinko();
  // p5 = new Plinko();
  // p6 = new Plinko();
  // p7 = new Plinko();
  // p8 = new Plinko();
  // p9 = new Plinko();
  // p10 = new Plinko();
  // p11 = new Plinko();
  // p12 = new Plinko();
  // p13 = new Plinko();
  // p14 = new Plinko();
  // p15 = new Plinko();
  // p16 = new Plinko();
  // p17 = new Plinko();
  // p18 = new Plinko();
  // p19 = new Plinko();
  // p20 = new Plinko();
  // p21 = new Plinko();
  // p22 = new Plinko();
  // p23 = new Plinko();
  // p24 = new Plinko();
  // p25 = new Plinko();
  // p26 = new Plinko();
  // p27 = new Plinko();
  // p28 = new Plinko();
  // p29 = new Plinko();
  // p30 = new Plinko();
  // p31 = new Plinko();
  // p32 = new Plinko();
  // p33 = new Plinko();
  // p34 = new Plinko();
  // p35 = new Plinko();
  // p36 = new Plinko();
  // p37 = new Plinko();
  // p38 = new Plinko();
  // p39 = new Plinko();
  // p40 = new Plinko();
  // p41 = new Plinko();
  // p42 = new Plinko();

  d1 = new Divisions(20, 500, 5, 200);//why is there a black screen and the objects arent visible i am working on a few projects but this is the same issue with every one of them
  // d2 = new Divisions();
  // d3 = new Divisions();
  // d4 = new Divisions();
  // d5 = new Divisions();
  // d6 = new Divisions();
  // d7 = new Divisions();

  // ground = new Ground();
}

function draw() {

  background(20, 33, 61);

  // p1.display();
  // p2.display();
  // p3.display();
  // p4.display();
  // p5.display();
  // p6.display();
  // p7.display();
  // p8.display();
  // p9.display();
  // p10.display();
  // p11.display();
  // p12.display();
  // p13.display();
  // p14.display();
  // p15.display();
  // p16.display();
  // p17.display();
  // p18.display();
  // p19.display();
  // p20.display();
  // p21.display();
  // p22.display();
  // p23.display();
  // p24.display();
  // p25.display();
  // p26.display();
  // p27.display();
  // p28.display();
  // p29.display();
  // p30.display();
  // p31.display();
  // p32.display();
  // p33.display();
  // p34.display();
  // p35.display();
  // p36.display();
  // p37.display();
  // p38.display();
  // p39.display();
  // p40.display();
  // p41.display();
  // p42.display();

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();

  ground.display();

  drawSprites();//check if needed or not
}
