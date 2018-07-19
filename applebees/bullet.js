function Bullet(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.tag = "bullet";
	this.collider=25;
	this.velocity=2;
    this.speed = {x: options.speed.x, y: options.speed.y};
    this.img = Images.get.bullet;
    return this;
}
Bullet.prototype.update = function(delta) {
    this.x += this.speed.x * this.velocity * delta;
    this.y += this.speed.y * this.velocity * delta;
}
Bullet.prototype.renderer = function(ctx) {
    ctx.drawImage(this.img, this.x, this.y);
}