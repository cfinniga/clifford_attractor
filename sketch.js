
    //some really nice parameters

    /*
     a = 1.3
  b = 1.6
  c = -0.6*/
    
    /*
  a = 1.01088
  b = -1.46739
    c = 0.717391*/
    
    /*
    a = -1.5652
    b = 0.88043
    c = 0.782609*/


let colour_state = 0
let animation_state = 'off'
let opacity = 100
function download() {
  to_save = get( width/3, 0, width, height )
  to_save.save('Image.png')
}


function start() {
  startButton.style('color:gray')
  stopButton.style('color:black')
  animation_state = 'on'
}

function stop () {
  startButton.style('color:black')
  stopButton.style('color:gray')
  animation_state = 'off'
}

function pretty() {
  a = 1
  b = 1
  c = 0
  let d = 0
  for (let i = -200; i < 200; i ++){
    d = i/100
    print(d,i)
    animate_attractor(a,b,c,d,1000)
  }
}
function fadeChanged() {
  if (this.checked()) {
    print('checked')
    opacity = 5
  }
  else {
    print('no')
    opacity = 100
  }
}

function animate_checked() {
  if (animation_state == 'off') {
    animation_state = 'on'
  }
  else {
    animation_state = 'off'
  }
}
function random_animate() {
  a = 1
  b = 1
  c = 0
  let d = 0
  let iters = 100
  for (let i = 180; i < 200; i ++){
    
    d = i/100

    animate_attractor(a,b,d,c,iters)
    //print(3234)
  }
}

function setup() {

  colorMode(HSB, 100);
  d_iter = 0
  let bound = 2

  slider_spacing = 50
  
  a = 1.2
  b = -0.945652
  c = 0.6
  c = -0.847
  d = 1.2
  /*
  a = 1.2
  b = -1.3
  c = 0.6 */
  renderer = createCanvas(1000, 550).parent('sketch-holder');
  canvas_x = renderer.position().x
  canvas_y = renderer.position().y
  let start_y = canvas_y
  let offset = 0//140
  let slider_offset = 100
  a_slider = createSlider(-bound, bound, a, 0.01);
  a_slider.position(10+ offset,start_y + slider_offset)
  a_slider.style('width', '200px');
  
  b_slider = createSlider(-bound, bound, b, 0.01);
  b_slider.position(10 + offset,start_y + slider_spacing + slider_offset)
  b_slider.style('width', '200px');
  
  c_slider = createSlider(-bound, bound, c, 0.01);
  c_slider.position(10 + offset,start_y + slider_spacing*2 + slider_offset)
  c_slider.style('width', '200px');
  
  d_slider = createSlider(-bound, bound, d, 0);
  d_slider.position(10 + offset,start_y + slider_spacing*3 + slider_offset)
  d_slider.style('width', '200px');
  
  iter_slider = createSlider(50, 1000, 100, 10);
  iter_slider.position(10 + offset,start_y + slider_spacing*4 + slider_offset)
  iter_slider.style('width', '200px');
  
    fr_slider = createSlider(5, 60, 30, 5);
  fr_slider.position(10 + offset,start_y + slider_spacing*5 + slider_offset)
  fr_slider.style('width', '200px');
  
  startButton = createButton('start')
  startButton.position(10,start_y)
  startButton.mousePressed(start);
  startButton.size(100,50)
  
  stopButton = createButton('pause')
  stopButton.position(110,start_y)
  stopButton.mousePressed(stop);
  stopButton.size(100,50)
  
  button = createButton('download image');
  button.position(10,iter_slider.y  + slider_spacing*2)
  button.mousePressed(download);
  button.size(200,50)
  /*
  animate_radio = createCheckbox('Start',false)
  animate_radio.position(10,start_y)
  animate_radio.style('width','80px')
  animate_radio.changed(animate_checked);
  animate_radio.style.transform = 'scale(4)'
  checkbox = animate_radio.elt.getElementsByTagName('input')[0];
  checkbox.style.width = 30
  checkbox.style.height = 20*/
  
  fadeCheck = createCheckbox('Fade',false)
  fadeCheck.position(10,start_y + 60)
  fadeCheck.style('width','80px')
  fadeCheck.changed(fadeChanged);
  background(0,0,0,opacity)
    fill(100) 

  rect(0,0,width/3,height)
  fill(0)
  text('a', a_slider.x + a_slider.width + 10, a_slider.y - canvas_y + 15);
  text('b', b_slider.x + b_slider.width + 10, b_slider.y - canvas_y + 15);
  text('c', c_slider.x + c_slider.width + 10, c_slider.y - canvas_y + 15);
  text('d', d_slider.x + d_slider.width + 10, d_slider.y -canvas_y + 15);
  text('number of iterations', iter_slider.x + 10, iter_slider.y - canvas_y + 15);
  text('Speed', fr_slider.x + 10, fr_slider.y - canvas_y + 15);
  

}

function draw() {
  frameRate(fr_slider.value())
  //scale(0.9)
    let a = a_slider.value()
  let b = b_slider.value()
  let c = c_slider.value()
  let d = d_slider.value()
  let iters = iter_slider.value()
  if (animation_state == 'on') {
    

  //iters = 500
  d_iter += 1
  d_iter = d_iter%200
  d = d_iter/50 - 2
  background(0,0,0,opacity)
  push()
  translate(100,0)
  animate_attractor(a,b,c,d,iters)
  pop()
  }
 
  if (animation_state == 'off') {
    //background(0)
/*
    attractor = new CliffordAttractor(a,b,c,d)     // I don't like this
    attractor.animate()*/
  }
    noStroke()
    fill(100)
  rect(0,0,width/3,height)
    fill(0)
  text_x_offset = 10
  text_y_offset = -15
    text('a = ' + a, a_slider.x , a_slider.y - canvas_y + 15 + text_y_offset);
    text('b = ' + b, b_slider.x, b_slider.y - canvas_y + 15 + text_y_offset);
    text('c = ' + c, c_slider.x, c_slider.y - canvas_y + 15 + text_y_offset);
    text('d = ' + d, d_slider.x, d_slider.y -canvas_y + 15 + text_y_offset);
    text('number of iterations = ' + iters, iter_slider.x, iter_slider.y - canvas_y + 15 + text_y_offset);
  
    text('Speed = ' + fr_slider.value(), fr_slider.x, fr_slider.y - canvas_y + 15 +  text_y_offset);

}