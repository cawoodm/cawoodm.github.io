function Player(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
    this.img = Images.get.player;
    this.tag='player';
    this.acc={x:0, y:0};
    this.speed={x:0, y:0};
    this.velocity = options.velocity || 5;
    this.frame=0;
    return this;
}
Player.prototype.update = function(delta) {
    if (g.state!="play") return;
    this.speed.x += this.acc.x;
    this.speed.y += this.acc.y;
    this.x += this.speed.x;
    this.y += this.speed.y;
    if (this.speed.x>0) this.frame=0;
    else if (this.speed.x<0) this.frame=1;
    else if (this.speed.y<0) this.frame=2;
    else if (this.speed.y>0) this.frame=3;
}
Player.prototype.renderer = function(ctx) {
    let one = 1, off=0;
    g.ctx.drawImage(this.img, this.frame*g.ui.blockSize, 0, g.ui.blockSize, g.ui.blockSize, one*this.x-off, this.y, g.ui.blockSize, g.ui.blockSize);
    g.ctx.strokeStyle="#DDD";
    g.ctx.strokeRect(this.x, this.y, g.ui.blockSize, g.ui.blockSize)
}
Player.prototype.shoot = function() {
    g.entity.add(new Bullet({x: g.player.x, y: g.player.y, speed: this.speed}));
}
Player.prototype.stop = function() {
    this.speed={x: 0, y:0};
}