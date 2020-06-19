var bird,birdimg;
var pipes = [];


/*function preload() {
  birdimg = loadAnimation("dragon.png");
}*/
function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
 // bird.addAnimation("bird",birdimg)
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 15 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}