class Plinko {
    constructor(x, y) {
        var options = {
            isStatic: false,
            friction: 0.5,
            density: 1
        }
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(255);
        ellipse(pos.x, pos.y, 10, 10);
        pop();
    }

}