function Bee(options) {
	this.x = options.x || 0;
	this.y = options.y  || 0;
    this.img = new Image();
    this.img.src='./resources/bee.png';
    this.tag="bee";
    this.velocity = options.velocity||5;
    ang = rnd(0,Math.PI);
    this.speed={x: this.velocity*Math.cos(ang), y: this.velocity*Math.sin(ang)};
    this.acc={x:0, y:0};
    return this;
}
Bee.prototype.update = function(delta) {
    if (g.state!="play") return;
    if (rnd(0,70)==0) this.bounce(true);
    if (this.x + g.ui.blockSize*2+this.speed.x > g.ui.width || this.x+this.speed.x < g.ui.blockSize ) {
        this.speed.x*=-1;
        this.bounce();
    }
    if (this.y + g.ui.blockSize*2 + this.speed.y > g.ui.height || this.y+this.speed.y < g.ui.blockSize) {
        this.speed.y*=-1;
        this.bounce();
        return
    }
    this.speed.x += this.acc.x;
    this.speed.y += this.acc.y;
    this.x += this.speed.x;
    this.y += this.speed.y;
}
Bee.prototype.bounce = function(changeDir) {
    if (changeDir) dir = {x:rnda([-1, 1]), y: rnda([-1, 1])}; else dir = {x: this.speed.x==0?0:Math.abs(this.speed.x)/this.speed.x, y: this.speed.y==0?0:Math.abs(this.speed.y)/this.speed.y};
    ang = rnd(0,Math.PI);
    this.speed={x: dir.x*Math.abs(this.velocity*Math.cos(ang)), y: dir.y*Math.abs(this.velocity*Math.sin(ang))};
}
Bee.prototype.renderer = function(ctx) {
    let one = 1, off=0;
    if (this.speed.x<0) {one=-1;off=g.ui.blockSize;ctx.scale(-1,1);}
    ctx.drawImage(this.img, one*this.x-off, this.y);
}