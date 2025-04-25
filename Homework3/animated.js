let backgroundImg;
let paper;
let paper2;
let angle = 0;
let ropeAngle = 0;

function preload() {
    backgroundImg = loadImage('images/balloon.jpeg');
    paper = loadImage('images/paper2.jpeg');
    bgPaper = loadImage('images/Red.jpg');
}

function setup() {
    createCanvas(475, 500);
}

function draw() {
    angle += 0.03;
    ropeAngle += 0.01;
    let sway = sin(angle) * 12;
    let ropeX = sin(ropeAngle) * 8;
    background(paper);
    
    fill(180, 50, 50);
    strokeWeight(2);
    circle(235 + sway, 110, 100);

    fill(180, 50, 50);
    strokeWeight(1);
    circle(-11, 120, 167);

    strokeWeight();
    rect(0, 130, 73, 100);

    fill(150, 180);
    strokeWeight(1);
    circle(39, 208, 71);

    fill(170, 130, 90);
    strokeWeight(1);
    rect(0, 228, 73, 180);

    strokeWeight();
    rect(68, 325, 43, 85);

    fill(130, 160, 100);
    strokeWeight(1);
    rect(111, 325, 35, 85);

    fill("black");
    strokeWeight(1);
    rect(147, 325, 61, 85);

    fill(60, 90, 130, 130);
    triangle(208, 324, 238, 324, 238, 300);

    fill("pink");
    strokeWeight(1);
    rect(208, 325, 30, 250);

    fill(130, 160, 100);
    triangle(208, 500, 208, 408, 320, 500);

    fill(180, 50, 50);
    triangle(370, 135, 475, 0, 475, 135);

    fill(230, 200, 100, 120);
    strokeWeight(1);
    square(74, 230, 95);

    fill(180, 50, 50);
    triangle(143, 324, 113, 324, 113, 297);

    fill(150, 180);
    strokeWeight(1);
    rect(0, 408, 208, 92);

    fill(180, 50, 50);
    rect(329, 395, 40, 105);

    fill(130, 160, 100);
    rect(369, 318, 43, 77);

    fill(180, 50, 50);
    rect(369, 231, 43, 87);

    fill(230, 200, 100, 120);
    rect(369, 195, 33, 35);

    fill(230, 200, 100, 120);
    rect(318, 231, 50, 87);

    fill(110, 80);
    rect(369, 135, 130, 59);

    fill("black");
    rect(347, 164, 22, 31);

    fill("pink");
    rect(347, 196, 22, 35);

    fill("pink");
    strokeWeight();
    triangle(318, 231, 348, 195, 348, 231);

    strokeWeight(2);
    line(242 + sway, 161, 242 + sway, 214);

    line(224 + sway, 161, 224 + sway, 214);

    noFill();
    bezier(242 + sway, 214, 242 + sway, 224, 242 + sway, 234, 242 + ropeX, 262);

    strokeWeight(1);
    line(242 + sway, 161, 224 + sway, 214);
    line(242 + sway, 214, 224 + sway, 161);

    fill("black");
    arc(233 + sway, 213, 18, 25, 0, PI);

    tint(170, 110);
    image(bgPaper, 0, 0, width, height);
}