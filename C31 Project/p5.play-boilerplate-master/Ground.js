
class Ground {
    constructor(x, y, width, height) {
        var ground_options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENETR);
        fill(229, 229, 229);
        rect(pos.x, pos.y, this.width, this.height);
    }
}