class Plinko {
    constructor(x, y, r) {
        var particles_options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, particles_options);//here it should be circle or ellipse
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(229, 229, 229);
        this.ellipse(pos.x, pos.y, this.r);//check here whether this.r should come or something related to pi
    }
}