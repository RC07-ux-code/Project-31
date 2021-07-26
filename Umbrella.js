class Umbrella{
    constructor(x,y){
         var options = { isStatic: true, 
        } 
        
        this.umbrella = Bodies.circle(x,y,80,options); 
        this.radius = 50;
         World.add(world, this.umbrella) }
         display(){
              var pos = this.umbrella.position;
               ellipseMode(RADIUS);
                //ellipse(pos.x,pos.y+70,150,150); 
            }
}