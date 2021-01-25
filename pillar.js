function Pillar(height_,bird_){
    //defining position vector
    this.pos=createVector();
    this.pos.x=width;

    //defining properties of the pillar
    this.height=height_;
    this.width=20;
    this.speed=2 ;
    this.col=255;
    spacing=100;

    //defining bird
    this.bird=bird_;

    //draw function
    this.display = function(){
        rectMode(CORNER);
        fill(this.col);
        noStroke();
        
        rect(this.pos.x-this.width,0,this.width,this.height);
        rect(this.pos.x-this.width,this.height+spacing,this.width,height-(this.height+spacing) );
        console.log("bird"+this.bird.pos.x);
        console.log('pilar'+this.pos.x);
    }

    //movement
    this.move=function(){  
        this.pos.x-=this.speed;
    }
    this.isHit=function(){
        if((this.bird.pos.x + this.bird.diameter>=this.pos.x && this.bird.pos.x<=this.pos.x+this.width)){   
            if(this.bird.pos.y-1/2*this.bird.diameter<=this.height || this.bird.pos.y+this.bird.diameter*2>=this.height+3/2*spacing){
                return true; 
            }    
            else{
                false;
            }     
        }
    }
}
 