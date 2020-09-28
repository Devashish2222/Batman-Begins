class Umbrella{
    constructor(x, y,r) {
      var options = {
           isStatic : true,
           'restitution' : 0,
           'friction' : 0.1,
           'density' : 1.2
      }
      this.image = loadImage("walking_1.png");
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(220);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image,150,300, this.r*8, this.r*8);
      pop();
    }
  }