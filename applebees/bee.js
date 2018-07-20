function Bee(options) {
	this.x = options.x || 0;
    this.y = options.y  || 0;
    this.sprite = new Sprite({sprite: "sprites", w: 100, h: 100, offX: 200, offY: 100, scale: 1});
    this.tag="bee";
    this.collider=1;
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
    if (dir.x!=null) this.speed.x = dir.x*this.velocity;
    if (dir.y!=null) this.speed.y = dir.y*this.velocity;
}
Bee.prototype.renderer = function(ctx) {
    // Drop shadow
    ctx.beginPath();
    ctx.fillStyle="rgba(100,100,100,0.5)"
    ctx.ellipse(this.x+15+g.ui.blockSize/2, this.y+g.ui.blockSize*1.3, g.ui.blockSize/2, g.ui.blockSize/5, 0, 0, 2 * Math.PI);
    ctx.fill();
    let one = 1, off=0;
    if (this.speed.x>0) {this.sprite.offX=200} else {this.sprite.offX=100}
    this.sprite.x=this.x;
    this.sprite.y=this.y;
    this.sprite.renderer(ctx);
}