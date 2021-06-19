
let gameScreen = document.getElementById("game_screen");
const height = 500, width = 500;

let context = gameScreen.getContext("2d");

let rect = new Rect(50, 50, 30, 30, "green", context);
let rect2 = new Rect(50, 200, 60, 60, "red", context);

// xác định va chạm giữa 2 hình chữ nhật (đối tượng Rect)
function isCollision(rect1, rect2) {
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

setInterval(function() {
    context.clearRect(0, 0, width, height);

    if (!isCollision(rect, rect2)) {
        rect.y += 2;
    }

    rect2.draw();
    rect.draw();
}, 50);