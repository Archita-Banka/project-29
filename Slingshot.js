class Slingshot{
    constructor(bodyA, pointB){

        var options = {
            bodyA:bodyA.body,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }

        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }

    display() {
        if(this.slingshot.bodyA){
            
        var pointA = this.slingshot.bodyA.position;
         var pointB = this.slingshot.pointB;
         strokeWeight(6);
         stroke(48, 22, 8);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
         }
                
                
    }
    fly(){
        this.slingshot.bodyA= null;
    }

    attach(body) {
        this.slingshot.bodyA = body;
    }
}