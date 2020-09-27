class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
       var rad = this.body.radius;
       ellipse(pos.x,pos.y,rad);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
    }
}