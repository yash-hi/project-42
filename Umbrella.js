    class Umbrella {
    constructor(x,y){
    var options = {
    isStatic: true,
    }

    this.image = loadImage("Walking Frame/walking_1.png");
    this.umbrella = Bodies.circle(x,y,0,options);
    this.radius = 400;
    World.add(world, this.umbrella)
    }

    display(){
    var pos = this.umbrella.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
    }
