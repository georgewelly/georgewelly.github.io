
function setup() { 
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height - 30;
    var dx = 4;
    var dy = -4;
    var ballRadius = 10;
    
    // varibles declared to handle the movement of paddles
    var leftUpPressed = false;
    var leftDownPressed = false;
    var rightUpPressed = false;
    var rightDownPressed = false;
}


function DownHandler(e) {
    if (e.keyCode == 90) {
        leftUpPressed = true;
    }
    else if (e.keyCode == 83) {
        leftDownPressed = true;
    }
    if (e.keyCode == 38) {
        rightUpPressed = true;
    }
    else if (e.keyCode == 40) {
        rightDownPressed = true;
    }
}

function UpHandler(e) {
    if (e.keyCode == 90) {
        leftUpPressed = false;
    }
    else if (e.keyCode == 83) {
        leftDownPressed = false;
    }
    if (e.keyCode == 38) {
        rightUpPressed = false;
    }
    else if (e.keyCode == 40) {
        rightDownPressed = false;
    }
}

function Ball() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
var leftScore = 0;
var rightScore = 0;

function Scores() {
    ctx.font = "80px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText(leftScore, (canvas.width / 2) - 80, 70);
    ctx.fillText(rightScore, (canvas.width / 2) + 40, 70);
}

function collisionsWithLeftPaddle() {
    if ((x - ballRadius) <= 5 + l_PaddleWidth) {
        if (y > l_PaddleY && y < l_PaddleY + l_PaddleHeight)
            dx = -dx;
        else if ((x - ballRadius) <= 0) {
            rightScore++;

            //alert("Game Over");
            x = canvas.width / 2;
            y = canvas.height / 2;
            dx = -dx;
            dy = -dy;

            //document.location.reload();
        }
    }
}

function collisionsWithRightPaddle() {
    if ((x + ballRadius) >= canvas.width - (r_PaddleWidth + 5)) {
        if (y > r_PaddleY && y < r_PaddleY + r_PaddleHeight)
            dx = -dx;
        else if (x + ballRadius >= canvas.width) {
            leftScore++;

            //alert("Game Over");
            x = canvas.width / 2;
            y = canvas.height / 2;
            dx = -dx;
            dy = -dy;

            //document.location.reload();
        }
    }
}

function computeCollisionsWithWallsAndPaddle() {
    collisionsWithLeftPaddle();
    collisionsWithRightPaddle();
    if (((y - ballRadius) <= 0) || ((y + ballRadius) >= canvas.height)) {
        dy = -dy;
    }
}

// For left-hand side player 
var l_PaddleHeight = 80
var l_PaddleWidth = 10
var l_PaddleX = 5;
var l_PaddleY = canvas.height / 2 - l_PaddleHeight / 2;
function drawLeftPaddle() {
    ctx.beginPath();
    ctx.rect(l_PaddleX, l_PaddleY, l_PaddleWidth, l_PaddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    if (leftDownPressed && l_PaddleY < canvas.height - l_PaddleHeight) {
        l_PaddleY += 7;
    }
    else if (leftUpPressed && l_PaddleY > 0) {
        l_PaddleY -= 7;
    }
}

// For Right-hand side player 
var r_PaddleHeight = 80
var r_PaddleWidth = 10
var r_PaddleX = canvas.width - (r_PaddleWidth + 5);
var r_PaddleY = canvas.height / 2 - r_PaddleHeight / 2;
function drawRightPaddle() {
    ctx.beginPath();
    ctx.rect(r_PaddleX, r_PaddleY, r_PaddleWidth, r_PaddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    if (rightDownPressed && r_PaddleY < canvas.height - r_PaddleHeight) {
        r_PaddleY += 7;
    }
    else if (rightUpPressed && r_PaddleY > 0) {
        r_PaddleY -= 7;
    }
}

function Scene() {
    ctx.beginPath();
    ctx.rect(canvas.width / 2 - 1, 0, 3, canvas.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    setup();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Scores();
    Scene();
    drawLeftPaddle();
    drawRightPaddle();
    Ball();
    computeCollisionsWithWallsAndPaddle();
    x += dx;
    y += dy;
}

setInterval(draw, 10);
document.addEventListener("keydown", DownHandler, false);
document.addEventListener("keyup", UpHandler, false);