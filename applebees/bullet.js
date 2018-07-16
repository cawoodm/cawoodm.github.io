function Bullet(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.tag = "bullet";
    this.speed = {x: Math.abs(options.speed)/options.speed || 1, y: 0};
    this.img = Images.get.bullet;
    return this;
}
Bullet.prototype.update = function(delta) {
    this.x += this.speed.x * 20;
    this.y += this.speed.y * 20;
}
Bullet.prototype.renderer = function(ctx) {
    ctx.drawImage(this.img, this.x, this.y);
}