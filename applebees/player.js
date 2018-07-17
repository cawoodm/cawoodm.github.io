function Player(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
    this.img = Images.get.player;
    this.collider=2;
    this.tag='player';
    this.acc={x:0, y:0};
    this.speed={x:0, y:0};
    this.velocity = options.velocity || 5;
    this.frame=0;
    return this;
}
Player.prototype.update = function(delta) {
    if (g.state!="play") return;
    if (this.nextMove) this.move(this.nextMove);
    this.speed.x += this.acc.x * delta;
    this.speed.y += this.acc.y * delta;
    this.x += this.speed.x;
    this.y += this.speed.y;
    if (this.speed.x>0) this.frame=0;
    else if (this.speed.x<0) this.frame=1;
    else if (this.speed.y<0) this.frame=2;
    else if (this.speed.y>0) this.frame=3;
}
Player.prototype.renderer = function(ctx) {
    x = this.x;
    y = this.y;
    //if (this.speed.y!=0) x = g.ui.blockSize * Math.round(x/g.ui.blockSize);
    //else if (this.speed.x!=0) y = g.ui.blockSize * Math.round(y/g.ui.blockSize);
    g.ctx.drawImage(this.img, this.frame*g.ui.blockSize, 0, g.ui.blockSize, g.ui.blockSize, x, y, g.ui.blockSize, g.ui.blockSize);
}
Player.prototype.move = function(dir) {
    let oldSpeed = {x: this.speed.x, y: this.speed.y};
    this.speed.x=dir.x*this.velocity;
    this.speed.y=dir.y*this.velocity;
    if (Collider.collide(this, "wall", 2)) {
        // If we can't move now, move later
        this.speed = oldSpeed;
        this.nextMove=dir;
    } else this.nextMove = null;
}
Player.prototype.shoot = function() {
    let off = {x: Math.sign(this.speed.x), y: Math.sign(this.speed.y)}
    if (off.x==0 && off.y==0) return; // No bullet if we're not moving
    g.entity.add(new Bullet({x: g.player.x+off.x*g.ui.blockSize/2, y: g.player.y+off.y*g.ui.blockSize/2, speed: off}));
}
Player.prototype.stop = function() {
    this.speed={x: 0, y:0};
}