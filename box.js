class box{
    constructor(x,y){
        var options={
            'friction':1.5,
            'density':0.04,
            
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("yellow");
        rect(0,0,this.width,this.height);
        
        pop();
    }
}