function increment_colour() {
  colour_state += 1
  if (colour_state == 100) {
    colour_state = 0
  }
  return colour_state
}

function animate_attractor(a,b,c,d, iterations) {
    particle = new Particle(width/2,height/2)
    stroke(100)

    noStroke()
    var colour = increment_colour();

    for (var i = 0; i < iterations; i ++) {
      stroke(colour,50,100)
      particle.increment(a,b,c,d)
      particle.show()
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
  
  animate() {
    let a = a_slider.value()
    let b = b_slider.value()
    let c = c_slider.value()
    let d = d_slider.value()
    var iterations = iter_slider.value()
    animate_attractor(a,b,c,d, iterations)
  }

}
