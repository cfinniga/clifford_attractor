let controls = new Controls()
let colour_state = 0
let animation_state = 'off'
let opacity = 100
let prev_controls = new Controls()
let d_iter

function pretty() {
  a = 1
  b = 1
  c = 0
  let d = 0
  for (let i = -200; i < 200; i ++){
    d = i/100
    controls.d_slider.elt.value = d
    draw_iteration(controls,1000)
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

    draw_iteration(a,b,d,c,iters)
  }
}

function setup_buttons(slider_spacing,slider_offset) {
  let bound = 2
  a = 1.2
  b = -0.945652
  c = -0.847
  d = 1.2

  
  text('Speed', fr_slider.x + 10, fr_slider.y - canvas_y + 15)
}


function setup() {
  colorMode(HSB, 100);
  renderer = createCanvas(1000, 550).parent('sketch-holder');
  canvas_x = renderer.position().x
  canvas_y = renderer.position().y

  controls.initialize(canvas_x,canvas_y)
  d_iter = 0
  
  start_y = 20

}

function draw() {

  if (animation_state == 'on') {
    d_iter = controls.d_slider.value() + 0.005
    if (d_iter > 2) {
      d_iter = -2
    }
    controls.d_slider.elt.value = d_iter
  }

  push()
  fill(40,50,100)
  translate(100,0)
  
  if (controls == prev_controls) {
      draw_iteration(controls)
  }

  pop()
  noStroke()
  fill(100)
  rect(0,0,width/3,height)
  controls.update_text()
  prev_controls = controls
}