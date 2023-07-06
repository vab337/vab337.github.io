class Mood {
    constructor(x,y,color1, color2) {
        this.x = x;
        this.y = y
        this.color1 = color1;
        this.color2 = color2; 
        this.gradStart = this.y;
        this.stop1 = 0;
        this.stop2 = 0.5;
        this.inc = 0.005;
    }


    linearGradientFill() {
        let x2 = this.x+w;
        let y2 = this.y+h;
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(this.x, this.y, x2, this.y);
        gradient.addColorStop(this.stop1, this.color1);
        gradient.addColorStop(this.stop2, this.color2);
        ctx.fillStyle = gradient;
      }
    
    display() {
        noStroke();
        rect(this.x,this.y,w,h);
    }

    moveGradient() {
      this.stop2+=this.inc;

      if (this.stop2 > 0.9 || this.stop2<0.4) {
        this.inc = -this.inc
      }


    }
      
}