function Sprite(options) {
	this.x = options.x || 0;
	this.y = options.y  || 0;
	this.w = options.w || g.ui.blockSize;
    this.h = options.h || g.ui.blockSize;
    this.offX = options.offX || 0;
    this.offY = options.offY || 0;
    this.scale = options.scale || 1;
    this.center = options.center || false;
    this.img = Images.get[options.sprite];
    return this;
}
Sprite.prototype.renderer = function(ctx) {
    ctx.save();
    this.offW = this.w * this.scale;
    this.offH = this.h * this.scale;
    if (this.center) g.ctx.translate(-this.offW/2, -this.offH/2)
    ctx.drawImage(this.img, this.offX, this.offY, this.w, this.h, this.x, this.y, this.offW, this.offH);
    ctx.restore();
}