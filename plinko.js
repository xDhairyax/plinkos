class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.radius=20;
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);

     }
     display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,20,20);
     }
}