let colour_state = 0
let animation_state = 'off'

function increment_colour() {
  colour_state += 1
  if (colour_state == 100) {
    colour_state = 0
  }
  return colour_state
}

function start() {
  animation_state = 'on'
}

function stop () {
  animation_state = 'off'
}

function setup() {
  createCanvas(800, 800);
  
  a_slider = createSlider(-2, 2, 1.2, 0);
  a_slider.style('width', '80px');
  
  b_slider = createSlider(-2, 2, -1.3, 0);
  b_slider.style('width', '80px');
  
  c_slider = createSlider(-2, 2, 0.6, 0);
  c_slider.style('width', '80px');
  
  d_slider = createSlider(-2, 2, 1.2, 0);
  d_slider.style('width', '80px');
  
  iter_slider = createSlider(100, 20000, 100, 0);
  iter_slider.style('width', '80px');
  
  startButton = createButton('start')
  startButton.mousePressed(start);
  
  stopButton = createButton('stop')
  stopButton.mousePressed(stop);
  
  text('red', a_slider.x * 2 + a_slider.width, 35);
  text('green', b_slider.x * 2 + b_slider.width, 65);
  text('blue', d_slider.x * 2 + d_slider.width, 95);
  
  background(0)
}

class Particle {
  constructor (x,y) {
    this.x = x
    this.y = y
    this.prevX = x
    this.prevY = y
  }

  increment(a,b,c,d) {
    this.prevX = this.x
    this.prevY = this.y
    this.x = sin(a*this.prevY) + c*cos(a*this.prevX)
    this.y = sin(b*this.prevX) + d*cos(b*this.prevY)
  }
  
  show() {

    fill(10)
    push()
    translate(width/2,height/2)
    ellipse(200*this.x,200*this.y,1)
    //line(50*this.x,50*this.y,50*this.prevX,50*this.prevY)
    //print(this.x,this.y)
    pop()
  }
}

class CliffordAttractor {
  constructor(a,b,c,d) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    
    this.prevA = -1
    this.prevB = -1
    this.prevC = -1
    this.prevD = -1
  }
  
  animate_attractor() {
    //particle = new Particle(random(width/2),random(height/2))
    particle = new Particle(width/2,height/2)
  

    /*
    let a = 1.2
    let b = -1.3
    let c = 0.6
    let d = 1.2*/
    let a = a_slider.value()
    let b = b_slider.value()
    let c = c_slider.value()
    let d = d_slider.value()

    colorMode(HSB, 100);
    //colorMode(RGB,100);
    noStroke()
    var colour = increment_colour();

    for (var i = 0; i < 2000; i ++) {
      stroke(colour,50,100)
      particle.increment(a,b,c,d)
      particle.show()
    }
  }

}

function animate_attractor() {
    //particle = new Particle(random(width/2),random(height/2))
    particle = new Particle(width/2,height/2)
  

    /*
    let a = 1.2
    let b = -1.3
    let c = 0.6
    let d = 1.2*/
    let a = a_slider.value()
    let b = b_slider.value()
    let c = c_slider.value()
    let d = d_slider.value()

    colorMode(HSB, 100);
    //colorMode(RGB,100);
    noStroke()
    var colour = increment_colour();

    var iterations = iter_slider.value()
    for (var i = 0; i < iterations; i ++) {
      stroke(colour,50,100)
      particle.increment(a,b,c,d)
      particle.show()
    }
  }
function draw() {
  let a = a_slider.value()
  let b = b_slider.value()
  let c = c_slider.value()
  let d = d_slider.value()
  
  attractor = new CliffordAttractor(a,b,c,d)
    if (animation_state == 'on') {
      background(0)
      
      animate_attractor()
    }
  
  //noLoop()
}