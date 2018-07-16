function Player(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
    this.img = Images.get.player;
    this.tag='player';
    this.acc={x:0, y:0};
    this.speed={x:0, y:0};
    this.velocity = options.velocity || 5;
    return this;
}
Player.prototype.update = function(delta) {
    if (g.state!="play") return;
    if (this.x + g.ui.blockSize*2+this.speed.x > g.ui.width || this.y + g.ui.blockSize*2 + this.speed.y > g.ui.height || this.x+this.speed.x < g.ui.blockSize || this.y+this.speed.y < g.ui.blockSize) {
        this.speed={x:0,y:0};
        this.acc={x:0,y:0};
        return
    }
    this.speed.x += this.acc.x;
    this.speed.y += this.acc.y;
    this.x += this.speed.x;
    this.y += this.speed.y;
}
Player.prototype.renderer = function(ctx) {
    let one = 1, off=0;
    if (this.speed.x<0) {one=-1;off=g.ui.blockSize;ctx.scale(-1,1);}
    ctx.drawImage(this.img, one*this.x-off, this.y);
}