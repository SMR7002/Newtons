class Rope {

    constructor(Anchor1X, Anchor1y,Anchor2x, Anchor2y){
        var options = {
            Anchor1X :Anchor1y,
            Anchor2x :Anchor2y,
            length:10,
            stiffness:0.3
        }
        this.rope = Constraint.create(options);
        World.add(world , this.rope)
    }
    display(){
        var PointA=this.rope.bodyA.position;
        var PointB=this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X = PointA.x
        var Anchor1y = PointA.y

        var Anchor2x = pointB.v+this.offsetX
        var Anchor2y = pointB.v+this.offsetY


        strokeWeight(10)
        line(Anchor1X, Anchor1y, Anchor2x, Anchor2y);
    }



}