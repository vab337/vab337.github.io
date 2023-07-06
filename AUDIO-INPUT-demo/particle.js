class Particle {
    constructor() {
        this.r = vol*100;

        this.x = random(width);
        this.y = random(height);
        this.vx = random(-5, 5);
        this.vy = random(-5, 5);
        this.alpha = 255; 
    }

    show() {
        noStroke();
        fill(frameCount%255+30,frameCount%100+30,frameCount%200,this.alpha);
        ellipse(this.x, this.y, this.r);
        }
    

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 1;
    }

    finished() {
        return this.alpha < 0;
      }


    
 }
