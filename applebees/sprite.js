function Sprite(options) {
	this.x = options.x || 0;
	this.y = options.y  || 0;
	this.w = options.w;
    this.h = options.h;
    this.img = Images.get[options.sprite];
    return this;
}
Sprite.prototype.renderer = function(ctx) {
    if (this.w)
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    else
        ctx.drawImage(this.img, this.x, this.y);
}