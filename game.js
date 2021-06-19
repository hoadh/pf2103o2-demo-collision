
class Game {
    constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.context = context;
        this.drawableShape = [];
        this.player = new Rect(50, 200, 60, 60, "red", context);
        this.init();
    }

    init() {
        for (let i = 0; i < 10; i++) {
            let randomX = Math.floor(Math.random() * 770 + 1);
            let randomSpeed = Math.floor(Math.random() * 6 + 2);

            let rect = new Rect(randomX, 0, 30, 30, "green", context);
            rect.speed = randomSpeed;
            this.drawableShape.push(rect);
        }
    }

    start() {

        this.interval = setInterval( () => {

            this.context.clearRect(0, 0, this.width, this.height);
            this.player.draw();
            
            for (let i = 0; i < this.drawableShape.length; i++) {
                let rect = this.drawableShape[i];

                if (this.isCollision(rect, this.player)) {
                    this.stop();
                }
                rect.y += rect.speed;
                rect.draw();
            }
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