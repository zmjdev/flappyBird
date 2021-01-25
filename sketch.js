var bird;
var pillars=[];
var spacing =100;
function setup() {
  createCanvas(600,400);
  bird=new Bird(width/4,height/2,30);
  var height_=random(0,height-100);
  pillars.push(new Pillar(height_,bird));
  console.log();
}

function keyPressed(){
  if (key==' '){
  bird.jump();
  console.log(bird.vel.y);
  }     
}
function draw() {
  background(0);
  
  for(var i=pillars.length-1;i>=0;i--){
    pillars[i].display();
    pillars[i].move();

    if(pillars[i].isHit(i)){
      pillars[i].col=100;
    } 
  
    if(pillars[i].pos.x<-(pillars[i].width)){
        pillars.splice(i,1);
      
     }
  }

  if(frameCount%100==0){
    var height_=random(0,height-spacing);
    pillars.push(new Pillar(height_,bird));
  }
  bird.move();
  bird.display(); 
}
function isHit(index){
  if((bird.pos.x + 2 * bird.diameter>=pillars[index].pos.x && bird.pos.x<=pillars[index].pos.x+pillars[index].width)){   
    if(bird.pos.y<=pillars[index].height || bird.pos.y+bird.diameter*2>=pillars[index].height+3/2*spacing){
        return true; 
    }    
    else{
        false;
    }     
  }
}
function isHit2(index){
  if((bird.pos.x + 2 * bird.diameter>=pillars[index].pos.x && bird.pos.x<=pillars[index].pos.x+pillars[index].width)){   
    return true;    
  }

}
