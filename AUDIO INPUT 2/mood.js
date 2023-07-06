class Mood {
    constructor(x,y) {
        this.x = x;
        this.y = y
        this.color1;
        this.color2;
        this.gradStart = this.y;
        this.stop1 = 0;
        this.stop2 = 0.5;
        this.inc = 0.005;
        this.alpha = 1;
        this.w =  vol*(width/2);
        this.colors = ['#FE0002', '#FFB202', '#7BD9F2', '#042CA6' , '#FF985E', '#F435A8'];
        this.colorIndex1 = floor(random(this.colors.length));
        this.colorIndex2 = floor(random(this.colors.length));

        this.color1 = this.colors[this.colorIndex1];
        this.color2 = this.colors[this.colorIndex2];

    }


    linearGradientFill() {



        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, height);
        gradient.addColorStop(this.stop1, this.color1);
        gradient.addColorStop(this.stop2, this.color2);
        ctx.fillStyle = gradient;
        //ctx.globalAlpha = this.alpha;

      }
    
    display() {
        noStroke();
        rect(this.x,this.y,this.w,height);
    }

    moveGradient() {
      this.stop2+=this.inc;

      if (this.stop2 > 0.9 || this.stop2<0.4) {
        this.inc = -this.inc
      }
    }

    update() {
      this.alpha -= 0.005;
    }

    finished() {
      return this.alpha < 0.1;
    }
      
}