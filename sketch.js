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
  ground = new Ground(200, 790, 800, 20)

  //createSprite(400, 200, 50, 50);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 25; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 125));
  }
}

function draw() {
  background(0);
  ground.display();

  Engine.update(engine);

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}