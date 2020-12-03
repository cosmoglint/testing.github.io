let slid;

var i = 0;
function setup() {
  ww = windowWidth;
  wh = windowHeight;
  createCanvas(windowWidth,windowHeight);
  p  = PI;
  var angle = PI/4;

  slid = createSlider(-p,p ,100,0.01);


}

function random_col(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  return color(r,g,b);
}

// function reportsize(){
//   init();
// }

// window.addEventListener('resize',reportsize);


function draw() {
  background(200);
  var n = height*0.4;
  translate(width/2,height); //move the origin to root of the tree
  // a = ((2*PI)/(360-i));
  // a = slid.value();
  // if (i==360){
  //   i = 0;
  //   a = 0;
  // }
  // console.log(((4*PI)/(360-i)));
  // i = i + 1;

  a = map(mouseX,0,width,-1*p,1*p,true);
  b = map(mouseY,0,width,-1*p,1*p,true);
  c = slid.value();

  recu(n);
  // recu(2*n);



}

function recu(n){
  // stroke(random_col());
  line(0,0,0,-n);
  // rect(0,-n,n,n);
  translate(0,-n);
  if (n>53) {
    push();
    rotate(a);
    recu(n*0.6);
    pop();
    push();
    rotate(-a);
    recu(n*0.6);
    pop();
    push();
    rotate(b);
    recu(n*0.6);
    pop();
    push();
    rotate(-b);
    recu(n*0.6);
    pop();
    push();
    rotate(c);
    recu(n*0.6);
    pop();
    push();
    rotate(-c);
    recu(n*0.6);
    pop();

  }
}
