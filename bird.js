function Bird(x_,y_,diameter_){
    //Creating the position Vectors of the bird
    this.pos=createVector();
    this.pos.x=x_;
    this.pos.y=y_;

    //creating the velocity vectors of the bird
    this.vel=createVector();
    this.vel.x=0;
    this.vel.y=0;

    //creating the acceleration vector of the bird
    this.gravity=createVector();
    this.gravity.x=0;
    this.gravity.y=0.2;
    
    // defining lifting force

    this.lift=-5;

    //diameter of the bird
    this.diameter=diameter_;
    
    
    this.display=function(){
        rectMode(CORNER);
        noFill();
        stroke(255);
        ellipse(this.pos.x,this.pos.y,this.diameter);
    } 
    this.move=function(){
        this.vel.y+=this.gravity.y;              
        this.pos.y+=this.vel.y+0.5*this.gravity.y;
        if(this.pos.y>=height-this.diameter/2){
            this.vel.y=0;
            this.pos.y=height-this.diameter/2;
        }
    }
    this.jump=function(){         
        this.vel.y=this.lift;
    }
}

