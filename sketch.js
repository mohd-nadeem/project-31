const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var ground;
var engine, world
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world
  ground = new Ground(200, 780, 800, 20)

  createSprite(400, 200, 50, 50);

}

function draw() {
  background(0);
  ground.display();

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

}
