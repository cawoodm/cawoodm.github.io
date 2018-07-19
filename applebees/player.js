function Player(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
    this.sprite = new Sprite({sprite: "sprites", w: 100, h: 100, offX: 300, offY: 0, scale: 1});
    this.collider=2;
    this.tag='player';
    this.acc={x:0, y:0};
    this.speed={x:0, y:0};
    this.velocity = options.velocity || 5;
    this.frame=0;
    this.bulletSpeed=25;
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
    // Drop shadow
    ctx.beginPath();
    ctx.fillStyle="rgba(100,100,100,0.5)"
    ctx.ellipse(x+g.ui.blockSize/2, y+g.ui.blockSize, g.ui.blockSize/2, g.ui.blockSize/5, 0, 0, 2 * Math.PI);
    ctx.fill();
    this.sprite.x=this.x;
    this.sprite.y=this.y;
    this.sprite.offX=this.frame*g.ui.blockSize;
    this.sprite.renderer(ctx);
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
    if (off.x==0 && off.y==0) off.x=1; // No bullet if we're not moving
    g.entity.add(new Bullet({x: g.player.x+off.x*g.ui.blockSize/3, y: g.player.y+off.y*g.ui.blockSize/3, speed: off, velocity: this.bulletSpeed}));
}
Player.prototype.stop = function() {
    this.speed={x: 0, y:0};
}