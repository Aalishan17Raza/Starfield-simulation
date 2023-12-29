var speed;
let stars =[]
function setup() {
  createCanvas(w-3.35, h-3.35);
  for(let i=0;i< w+40; i++){
    stars[i]=new Star();
  }
}

function draw() {
  background(0);
  speed=map(mouseX,0,w,0,30);
  translate(w/2, h/2);
  for(let i=0;i< stars.length ; i++){
    stars[i].update();
    stars[i].show();
  }
}