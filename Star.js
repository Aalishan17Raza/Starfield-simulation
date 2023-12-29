var w = window.innerWidth;
var h = window.innerHeight;
function Star(){
    this.x = random(-w, w);
    this.y = random(-h, h);
    this.z = random(w);
    this.pz=this.z;
    
    this.show = function(){
      fill(255);
      noStroke();
      let sx=map(this.x / this.z, 0, 1, 0, w);
      let sy=map(this.y / this.z, 0, 1, 0, h);
      let r=map(this.z, 0, w, 10, 0)
      ellipse(sx,sy,r,r);
      
      var px = map(this.x / this.pz, 0, 1, 0, w);
      var py = map(this.y / this.pz, 0, 1, 0, h);
  
      this.pz = this.z;
      
      stroke(255);
      line(px,py, sx, sy)
    }
    
    this.update=function(){
      this.z = this.z-speed;
      if(this.z<1){
        this.z=width;
        this.x = random(-w, w);
        this.y = random(-h, h);
        this.pz=this.z;
      }
    }
    
  }