function increment_colour() {
    colour_state += 1
    if (colour_state == 100) {
      colour_state = 0
    }

  return colour_state
}

function draw_iteration(controls) {
    if (!controls.parameters_changed()) {
      return
    }
    particle = new Particle(width/3,height/3)
    noStroke()
    var colour = increment_colour();
    background(0,0,0,opacity)
    var a = controls.get_a()
    var b = controls.get_b()
    var c = controls.get_c()
    var d = controls.get_d()
    var iterations = controls.iter_slider.value()
    
    for (var i = 0; i < iterations; i ++) {
      
      stroke(colour,50,100)
          
      particle.move(a,b,c,d)
      particle.show()
  }
}

class CliffordAttractor {
  constructor(a,b,c,d) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    /*
    this.prevA = -1
    this.prevB = -1
    this.prevC = -1
    this.prevD = -1*/
  }
  
  draw_frame() {
    a = a_slider.value()
    b = b_slider.value()
    c = c_slider.value()
    d = d_slider.value()
    iterations = iter_slider.value()
    draw_iteration(a,b,c,d, iterations)
  }

}
