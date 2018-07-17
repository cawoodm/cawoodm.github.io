function Bee(options) {
	this.x = options.x || 0;
	this.y = options.y  || 0;
    this.img = new Image();
    this.img.src='./resources/bee.png';
    this.tag="bee";
    this.collider=4;
    this.velocity = options.velocity||5;
    ang = rnd(0,Math.PI);
    this.speed={x: this.velocity*Math.cos(ang), y: this.velocity*Math.sin(ang)};
    this.acc={x:0, y:0};
    return this;
}
Bee.prototype.update = function(delta) {
    if (g.state!="play") return;
    if (rnd(0,70)==0) this.bounce();
    this.speed.x += this.acc.x * delta;
    this.speed.y += this.acc.y * delta;
    this.x += this.speed.x;
    this.y += this.speed.y;
}
Bee.prototype.bounce = function(dir) {
    if (!dir) {ang = rnd(0,Math.PI);dir={x: Math.cos(ang), y: Math.sin(ang)};}
    this.speed = {x: dir.x*this.velocity, y: dir.y*this.velocity}
}
Bee.prototype.renderer = function(ctx) {
    let one = 1, off=0;
    if (this.speed.x<0) {one=-1;off=g.ui.blockSize;ctx.scale(-1,1);}
    ctx.drawImage(this.img, one*this.x-off, this.y);
}