
class Divisions {
    constructor(x, y, width, height) {
        var division_options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, division_options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(229, 229, 229);
        rect(pos.x, pos.y, this.width, this.height);
    }
}