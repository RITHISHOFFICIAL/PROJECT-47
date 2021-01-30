class slingshot {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:   0.05,
            length: 300
         }
         this.pointB=pointB;
         this.sling=Constraint.create(options);
         World.add(world,this.sling);
    }
    //fly(){
       //this.sling.bodyA=null;

  //  }

    display(){
        
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            push();
            fill("white");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        
            }
}