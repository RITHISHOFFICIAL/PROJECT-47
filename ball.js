class ball{
  constructor(x,y,r){
      var balloptions={
      'frictionAir':0.01,
      'density':1.0
      }
     this.body= Bodies.circle(x,y,r, balloptions);
     this.r=r;

      World.add(world,this.body);
  }
  display(){
     // this.body.position.x=mouseX;
      //this.body.position.y=mouseY;

      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0,this.r,this.r);
      pop();
  }
 
}