
class Game {
    constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.context = context;
        this.init();
    }

    init() {
        this.rect = new Rect(50, 50, 30, 30, "green", context);
        this.rect2 = new Rect(50, 200, 60, 60, "red", context);
    }

    start() {

        this.interval = setInterval( () => {
            if (this.isCollision(this.rect, this.rect2)) {
                this.stop();
            }
        
            this.context.clearRect(0, 0, this.width, this.height);
            this.rect.y += 2;
            this.rect2.draw();
            this.rect.draw();
        }, 50);
    }

    stop() {
        clearInterval(this.interval);
    }

    isCollision(rect1, rect2) {
        let distX = (rect1.x + (rect1.w/2)) - (rect2.x + (rect2.w)/2);
        if (distX < 0)
            distX = -distX;

        const distW = (rect1.w + rect2.w)/2;

        let distY =(rect1.y + (rect1.h/2)) - (rect2.y + (rect2.h)/2);
        if(distY < 0)
            distY = -distY;

        const distH = (rect1.h + rect2.h)/2;

        return (distX <= distW && distY <= distH);
    }
}