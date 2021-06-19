class Rect {
    constructor(x, y, width, height, color, context) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.color = color;
        this.context = context;
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.w, this.h);
    }
}