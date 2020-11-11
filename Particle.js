class Particle {
    constructor(x, y) {
        var options = {
            isStatic: false,
            friction: 0.5,
            density: 1
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x, pos.y, 10, 10);
        pop();
    }

}