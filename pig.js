class Pig {
    constructor (x,y){
        var options = {
            restitution : 2.0
        }
        this.body = Bodies.rectangle (x,y,50,50,options)
        this.width = 50
        this.height = 50
        World.add (world,this.body)
    } 
      display (){
        var angle = this.body.angle
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (angle)
        rectMode(CENTER); 
        fill ("green")
        strokeWeight (4)
        stroke ("yellow")
        rect (0,0,this.width,this.height)
        pop ()
      }
}