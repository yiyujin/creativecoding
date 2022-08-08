const canvasW = 180
const canvasH = 320

//color google

google = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58']

samsung = ['#63C97C', '#6F6FED', '#68BACC', '#E96146', '#DA354B', '#F5C344']

const s1 = ( c ) => {

  let x = 0;
  let y = 40;
  let speed = 5;

  c.pixelDensity(1) //mobile

  c.setup = () => {
    c.createCanvas(canvasW, canvasH);
    c.pixelDensity(1) //mobile
  };

  c.draw = () => {
    c.background(0,0,0,50)
    c.fill(255)
    c.circle(c.width/2,y,80)
    c.noStroke()
    

    if(y > 320 - 40 || y < 40){
      speed *= -1
    }

    y += speed
  };
};
const s2 = ( c ) => {

  let y = - 40;
  let speed = 5;

  c.setup = () => {
    c.createCanvas(canvasW, canvasH);
    c.pixelDensity(1) //mobile
  };

  c.draw = () => {
    c.background(0,0,0,30)
    c.fill(255)
    c.circle(c.width/2,y,80)
    c.noStroke()
    

    if(y > c.height + 40){      
      y = - 40
    }

    y += speed
  };
};

const s3 = ( c ) => {

  let x = 40
  let y = 40
  let r = 80
  let xSpeed = 5
  let ySpeed = 5

  c.setup = () => {
    c.createCanvas(canvasW, canvasH);
    c.pixelDensity(1) //mobile
  };

  c.draw = () => {
    c.background(0,0,0,50)
    c.fill(255)
    c.circle(x,y,r)
    c.noStroke()
    
    if(x < 40 || x > c.width - r/2){
      xSpeed *= -1
    }
    if(y < 40 || y > c.height - r/2){      
      ySpeed *= -1
    }

    x += xSpeed
    y += ySpeed
  };
};

const s4 = ( c ) => {

  c.setup = () => {

    x = c.width/2
    y = c.height/2
    t = 0;

    c.createCanvas(180, 320);
    c.pixelDensity(1) //mobile
  }
  

  c.draw = () => {
    c.background(0,0,0,30)

    c.noStroke()
    c.circle(x, y, 80)

    x = c.width * c.noise(t + 20)
    y = c.height * c.noise(t + 5)

    t += 0.01;

  };
};

const s5 = ( c ) => {

  let x = - 40;
  let speed = 5;

  c.setup = () => {
    c.createCanvas(180, 320);
    c.pixelDensity(1) //mobile
  };

  c.draw = () => {
    c.background(0,0,0,30)
    c.fill(255)
    c.circle(x,c.height/2,80)
    c.noStroke()
    

    if(x > c.width + 40){      
      x = - 40
    }

    x += speed
  };
};


const s6 = ( c ) => {

  let ballCount = 20;
  let x = [];
  let y = [];

  let xSpeed = [];
  let ySpeed =[];
  let size = [];
  let r = [];
  let g = [];
  let b = [];

  let sysColor = [];

  c.setup = () => {
    c.createCanvas(180, 320);
    c.pixelDensity(1) //mobile

    for(i = 0; i < ballCount; i++){
      x[i] = c.width/2
      y[i] = c.height/2

      xSpeed[i] = c.random(-5, 5)
      ySpeed[i] = c.random(-5, 5)

      size[i] = c.random(10,50)

      r[i] = c.random(0,255)
      g[i] = c.random(0,255)
      b[i] = c.random(0,255)

      sysColor[i] = c.random(google)
    }
  };

  c.draw = () => {
    c.background(0,0,0,90)
    c.noStroke()

    for(i = 0; i < ballCount; i++){
      x[i] += xSpeed[i]
      y[i] += ySpeed[i]

      if(x[i] < size[i]/2 || x[i] > c.width - size[i]/2){
        xSpeed[i] *= -1
      }

      if(y[i] < size[i]/2 || y[i] > c.height - size[i]/2){
        ySpeed[i] *= -1
      }

      c.fill(sysColor[i])
      c.circle(x[i], y[i], size[i])
    }

  };
};

const s6a = ( c ) => {

  let ballCount = 20;
  let x = [];
  let y = [];

  let xSpeed = [];
  let ySpeed =[];
  let size = [];
  let r = [];
  let g = [];
  let b = [];

  let sysColor = [];

  c.setup = () => {
    c.createCanvas(180, 320);
    c.pixelDensity(1) //mobile

    for(i = 0; i < ballCount; i++){
      x[i] = c.width/2
      y[i] = c.height/2

      xSpeed[i] = c.random(-5, 5)
      ySpeed[i] = c.random(-5, 5)

      size[i] = c.random(10,50)

      r[i] = c.random(0,255)
      g[i] = c.random(0,255)
      b[i] = c.random(0,255)

      sysColor[i] = c.random(samsung)
    }
  };

  c.draw = () => {
    c.background(0,0,0,90)
    c.noStroke()

    for(i = 0; i < ballCount; i++){
      x[i] += xSpeed[i]
      y[i] += ySpeed[i]

      if(x[i] < size[i]/2 || x[i] > c.width - size[i]/2){
        xSpeed[i] *= -1
      }

      if(y[i] < size[i]/2 || y[i] > c.height - size[i]/2){
        ySpeed[i] *= -1
      }

      c.fill(sysColor[i])
      c.circle(x[i], y[i], size[i])
    }

  };
};

const s7 = ( c ) => {

  let ballCount = 50;
  let x = [];
  let y = [];

  let xSpeed = [];
  let ySpeed =[];
  let size = [];
  let r = [];
  let g = [];
  let b = [];

  let sysColor = [];

  c.setup = () => {
    c.createCanvas(180, 320);
    c.pixelDensity(1) //mobile

    for(i = 0; i < ballCount; i++){
      x[i] = c.width/2
      y[i] = 400

      // xSpeed[i] = c.random(-5, 5)
      ySpeed[i] = c.random(1, 5)

      size[i] = c.random(5,20)
    }
  };

  c.draw = () => {
    c.background(0,0,0)
    c.noStroke()

    for(i = 0; i < ballCount; i++){
      x[i] += c.random(-3,3)
      y[i] -= ySpeed[i]

      // if(x[i] < 100 || x[i] > c.width - 100){
      //   x[i] *= c.random(-3,3)
      // }

      if(y[i] < 0){
        y[i] = 400
      }

      c.fill('white')
      c.circle(x[i], y[i], size[i])
    }

  };
};

const s8 = ( c ) => {

  let ballCount = 100;
  let x = [];
  let y = [];

  let xSpeed = [];
  let ySpeed =[];
  let w = [];
  let h = [];

  let r = [];
  let g = [];
  let b = [];

  let sysColor = [];

  c.setup = () => {
    c.createCanvas(180, 320);
    c.pixelDensity(1) //mobile

    for(i = 0; i < ballCount; i++){
      x[i] = c.width/2
      y[i] = c.height/2

      xSpeed[i] = c.random(-3, 3)
      ySpeed[i] = c.random(-3, 3)

      w[i] = c.random(2,5)
      h[i] = c.random(2,5)

      r[i] = c.random(150,255)
      g[i] = c.random(150,255)
      b[i] = c.random(0,50)

      sysColor[i] = c.random(google)
    }
  };

  c.draw = () => {
    c.background(0,0,0,90)
    c.noStroke()

    for(i = 0; i < ballCount; i++){
      x[i] += c.random(-2, 2)
      y[i] += c.random(-2, 2)

      if(x[i] < 100 || x[i] > c.width - 100){
        x[i] *= -1
      }

      if(y[i] < 100| y[i] > c.height - 100){
        y[i] *= -1
      }

      c.fill(r[i],g[i],b[i],c.random(10,255))
      c.ellipse(x[i], y[i], w[i],h[i])
    }

  };
};

const s9 = ( c ) => {


  c.setup = () => {
    c.createCanvas(180, 320);
    c.pixelDensity(1) //mobile
    c.noStroke()


    fade = 0;
    fadeAmount = 5;
  };

  c.draw = () => {
    c.background(0,0,0)

    c.fill(255,255,255,fade)
    c.circle(c.width/2, c.height/2, 80)

    if(fade < 0){
      fadeAmount = 5;
    }
    
    if (fade > 255){
      fadeAmount *= -1;
    }

    fade += fadeAmount;

    

  };
};

const s10 = ( c ) => {
  c.setup = () => {
    c.createCanvas(180, 320);
    c.pixelDensity(1) //mobile
    c.noStroke()


    fade1 = 0;
    blink = 20;
  };

  c.draw = () => {
    c.background(0,0,0)

    c.fill(255,255,255,fade1)
    c.circle(c.width/2, c.height/2, 20)

    if(fade1 < 0){
      blink = 20;
    }
    
    if (fade1 > 255){
      blink *= -1;
    }

    fade1 += blink;
  };
};

const s11 = ( c ) => {

  startColor = c.color(255,255,255)
  newColor = c.color(c.random(google))
  amt = 0;

  c.setup = () => {
    c.createCanvas(180, 320);
    c.background('black')

    c.fill(startColor)
  };

  c.draw = () => {
    c.fill(c.lerpColor(startColor, newColor, amt))

    amt += 0.05;

    if(amt >= 1){
      amt = 0;
      startColor = newColor;
      newColor = c.color(c.random(google))
    }

    c.circle(c.width/2,c.height/2,80)
  };
};

// assign to div
new p5(s1, 's1');
new p5(s2, 's2');
new p5(s3, 's3');
new p5(s4, 's4');
new p5(s5, 's5');
new p5(s6, 's6');
new p5(s6a, 's6a');
new p5(s7, 's7');
new p5(s8, 's8');
new p5(s9, 's9');
new p5(s10, 's10');
new p5(s11, 's11');



//
const sample = ( c ) => {

  c.setup = () => {
    c.createCanvas(180, 320);
  };

  c.draw = () => {
  
  };
};