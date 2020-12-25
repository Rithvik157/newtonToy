class Rod{
constructor(x,y){
var options ={
 isStatic : true
}
this.body = Bodies.rectangle(x,y,230,25,options);
this.width = 170;
this.height = 10;
World.add(world,this.body);
}
display(){
push()
translate(this.body.position.x,this.body.position.y);
angleMode(RADIANS);
fill("grey");
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop()
}
}