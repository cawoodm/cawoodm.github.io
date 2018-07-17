function Bullet(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.tag = "bullet";
    this.speed = {x: options.speed.x, y: options.speed.y};
    this.img = Images.get.bullet;
    return this;
}
Bullet.prototype.update = function(delta) {
    this.x += this.speed.x * 25 * delta;
    this.y += this.speed.y * 25 * delta;
}
Bullet.prototype.renderer = function(ctx) {
    ctx.drawImage(this.img, this.x, this.y);
}