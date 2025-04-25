let backgroundImg;
let paper;
let paper2;
let popped = false;
let balloonSound;
let fall = 0;
let change = 0;
let xMargin = 0;
let yMargin = 0;
let x1 = 0, x2 = 0, x3 = 0, x4 = 0;
let y1 = 0, y2 = 0, y3 = 0, y4 = 0;

function preload() {
    backgroundImg = loadImage('images/balloon.jpeg');
    paper = loadImage('images/paper2.jpeg');
    bgPaper = loadImage('images/Red.jpg');
    balloonSound = loadSound('balloonPop.mp3');
}

function setup() {
    createCanvas(475, 500);
}
function draw() {
    background(paper);
    
    if(popped == false) {
        fill(180, 50, 50);
        strokeWeight(2);
        circle(235, 110, 100);

        strokeWeight(2);
        line(242, 161 + fall, 242, 214 + fall);

        line(224, 161 + fall, 224, 214 + fall);

        noFill();
        bezier(242, 214, 242, 224, 242, 234, 242, 262);

        strokeWeight(1);
        line(242, 161 + fall, 224, 214 + fall);
        line(242, 214 + fall, 224, 161 + fall);

        fill("black");
        arc(233, 213 + fall, 18, 25, 0, PI);
    } else {
        fall += 18;
        if (fall >= 78) {
            fall = 78;

            if (change <= 130) {
                change += 25;
                x4 -= 2, x3 -= 2;
            } else if (change < 160){
                change += 15;
                if(yMargin < 7) {
                    yMargin += 7;
                }
                x4 -= 2, x3 -= 2;
            } else if (change < 220) {
                xMargin += 11;
                change += 12;
                x4 -= 4, x3 -= 1;
            }
            
            push();
            translate(235, 188 + fall);
            rotate(radians(-change));
            translate(-235, -(188 + fall));

            strokeWeight(2);
            line(242 + xMargin, 161 + fall - yMargin, 242 + xMargin, 214 + fall - yMargin);

            line(224 + xMargin, 161 + fall - yMargin, 224 + xMargin, 214 + fall - yMargin);

            noFill();
            bezier(242 + x1 + xMargin, 214 + y1 + fall - yMargin, 242 + x2 + xMargin, 224 + y2 + fall - yMargin, 242 + x3 + xMargin, 234 + y3 + fall - yMargin, 242 + x4 + xMargin, 262 + y4 + fall - yMargin);

            strokeWeight(1);
            line(242 + xMargin, 161 + fall - yMargin, 224 + xMargin, 214 + fall - yMargin);
            line(242 + xMargin, 214 + fall - yMargin, 224 + xMargin, 161 + fall - yMargin);

            fill("black");
            arc(233 + xMargin, 213 + fall - yMargin, 18, 25, 0, PI);

            pop();
        } else {
            strokeWeight(2);
            line(242, 161 + fall, 242, 214 + fall);

            line(224, 161 + fall, 224, 214 + fall);

            noFill();
            bezier(242 + x1 + xMargin, 214 + y1 + fall - yMargin, 242 + x2 + xMargin, 224 + y2 + fall - yMargin, 242 + x3 + xMargin, 234 + y3 + fall - yMargin, 242 + x4 + xMargin, 262 + y4 + fall - yMargin);

            strokeWeight(1);
            line(242, 161 + fall, 224, 214 + fall);
            line(242, 214 + fall, 224, 161 + fall);

            fill("black");
            arc(233, 213 + fall, 18, 25, 0, PI);
        }
    }

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

    noFill();
    strokeWeight(0);
    rect(224, 165, 18, 49);

    tint(170, 110);
    image(bgPaper, 0, 0, width, height);
}

function doubleClicked() {

    if(dist(mouseX, mouseY, 235, 110) < 50) {
        popped = true;

        push();
        noStroke();
        fill(255);
        circle(235, 110, 100); 
        pop();

        balloonSound.play();
    }
}