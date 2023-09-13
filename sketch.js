
const R = 150;
const xh = angle => R / 15.0 * 16 * Math.pow(Math.sin(angle), 3);
const yh = p => R / 15.0 * (-13 * Math.cos(p) + 5 * Math.cos(2 * p) + 2 * Math.cos(3 * p) + Math.cos(4 * p));

function setup() {
    createCanvas(1600, 1000);
    background(204,229,255);
}

function draw() {
    fill(255, 204, 229);
    stroke(255);
    strokeWeight(3);
    ellipse(400, 400, 400, 400);
    fill(255, 255, 204);
    stroke(255,153,153);
    ellipse(300, 350, 80, 80);
    ellipse(500, 350, 80, 80);
    fill(0);
    ellipse(300, 350, 40, 40);
    ellipse(500, 350, 40, 40);
    fill(255, 255, 204);
    triangle(390, 435, 418, 380, 446, 435);
    stroke(0);
    line(350,500, 450, 500)
    
    fill(255, 255, 204);
    stroke(255,153,153);
    beginShape();
    let n = 200;
    for (let i = 0; i < n; i++) {
      let x = width / 2 + xh(TAU * i / n);
      let y = height / 2 + yh(TAU * i / n);
      vertex(x, y);
    }
    endShape();
}
