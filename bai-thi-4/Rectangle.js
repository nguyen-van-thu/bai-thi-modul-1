class Rectangle {
    constructor() {
        this.width = number;
        this.height = number;
        this.x = number;
        this.y = number;
        this.color = color;
    }
}

let render = document.getElementById("Rectangle");
let ctx = render.getContext("2d");
ctx.beginPath();
ctx.rect(10, 10, 200, 100);
ctx.fillStyle = `#000000`
ctx.fill();
ctx.stroke();