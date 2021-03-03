
function create_start_button() {
  startButton = createButton('start')
  startButton.position(10,200)
  startButton.mousePressed(start);
  startButton.size(100,50)
}

function create_stop_button () {
  stopButton = createButton('pause')
  stopButton.position(110,200)
  stopButton.mousePressed(stop);
  stopButton.size(100,50)
}

function start () {
  startButton.style('color:gray')
  stopButton.style('color:black')
  animation_state = 'on'
}

function stop () {
  startButton.style('color:black')
  stopButton.style('color:gray')
  animation_state = 'off'
}

function download() {
  to_save = get( width/3 + 5, 0, width, height )
  to_save.save('Image.png')
}

function create_download_button() {
      
     button = createButton('download image');
    button.position(10,650)
    button.mousePressed(download);
    button.size(200,50)
}

function fadeChanged() {
  if (this.checked()) {
    opacity = 3
  }
  else {
    opacity = 100
  }
}

function create_fade() {
    fadeCheck = createCheckbox('Fade',false)
    fadeCheck.position(10, 600 )
    fadeCheck.style('width','80px')
    fadeCheck.changed(fadeChanged);
}

class Controls {
  
  create_custom_slider(lower_bound,upper_bound,start,y_position) {
    var x_position = this.offset + 10
    var slider = createSlider(lower_bound, upper_bound, start, 0.0001)

    slider.position(x_position,y_position)
    slider.style('width', '200px')
    return slider
  }
  
  create_text(slider,param) {
    fill(0)
    param = param + ' = ' + slider.value()
    text(param, slider.x + 10, slider.y - this.start_y)
  }

  update_text() {
    this.create_text(this.a_slider,'a')
    this.create_text(this.b_slider,'b')
    this.create_text(this.c_slider,'c')
    this.create_text(this.d_slider,'d')
    this.create_text(this.iter_slider,'number of iterations')
    
  }
  
  initialize(canvas_x,canvas_y) {
    let bound = 2
    this.a = 1.2
    this.b = -0.945652
    this.c = -0.847
    this.d = 0
    
    this.prev_a = -10
    this.prev_b = -10
    this.prev_c = -10
    this.prev_d = -10
    
    this.start_y = canvas_y
    
    this.offset = 0
    this.slider_offset = 100
    this.slider_spacing = 60
    fill(100) 

    rect(0,0,width/3,height)
    this.a_slider = this.create_custom_slider(-bound,bound,1.4, this.start_y + this.slider_offset)
    this.b_slider = this.create_custom_slider(-bound,bound,1.4, this.start_y + this.slider_spacing + this.slider_offset)
    this.c_slider = this.create_custom_slider(-bound,bound,1.4, this.start_y + this.slider_spacing*2 + this.slider_offset)
    this.d_slider = this.create_custom_slider(-bound,bound,-2, this.start_y + this.slider_spacing*3 + this.slider_offset)
    this.iter_slider = this.create_custom_slider(50,2000,500, this.start_y + this.slider_spacing*4 + this.slider_offset)
    
    this.update_text()
    
    create_start_button()
    create_stop_button()
    create_download_button()
    create_fade()
  }
  
  constructor(){
    this.a = 1.2
    this.b = -0.945652
    this.c = -0.847
    this.d = 1.2
    
    this.start_y = 100
    
    this.offset = 100
    this.a_slider = 0
  }

  get_a() {
    return this.a_slider.value()
  }
  
  get_b() {
    return this.b_slider.value()
  }
  
  get_c() {
    return this.c_slider.value()
  }
  
  get_d() {
    return this.d_slider.value()
  }

  parameters_changed() {
          this.prev_a = this.a
      this.prev_b = this.b
      this.prev_c = this.c
      this.prev_d = this.d
      this.a = this.a_slider.value()
      this.b = this.b_slider.value()
      this.c = this.c_slider.value()
      this.d = this.d_slider.value()

    if (this.a != this.prev_a || this.b != this.prev_b || this.c != this.prev_c || this.d != this.prev_d) {
      return true
    }
    return false
  }
}