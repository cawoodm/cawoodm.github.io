function Bullet(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.tag = "bullet";
	this.collider=25;
	this.velocity=25;
    this.speed = {x: options.speed.x, y: options.speed.y};
    this.sprite = new Sprite({sprite: "sprites", x: this.x, y: this.y, w: 100, h: 100, offX: 300, offY: 100, scale: 1});
    return this;
}
Bullet.prototype.update = function(delta) {
    this.x += this.speed.x * this.velocity * delta;
    this.y += this.speed.y * this.velocity * delta;
}
Bullet.prototype.renderer = function(ctx) {
    this.sprite.x=this.x;
    this.sprite.y=this.y;
    this.sprite.renderer(ctx);
}