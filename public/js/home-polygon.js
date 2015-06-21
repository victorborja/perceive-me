function setup() {
  var myCanvas = createCanvas(400, 250);
  myCanvas.parent('home-polygon');
}

function draw() {
  background(213,91,25);
  
  var secs = second();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  fill(0,0,0);
  polygon(0, 0, 80, secs); 
  pop();
  
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}