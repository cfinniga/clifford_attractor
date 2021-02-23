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
    ellipse(100*this.x + 60,100*this.y,1)

    pop()
  }
}