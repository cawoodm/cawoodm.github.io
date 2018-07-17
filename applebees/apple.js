function Apple(options) {
	this.x = options.x || 0;
    this.y = options.y  || 0;
    this.collider=25;
    this.img = Images.get.apple;
    this.tag="apple";
    return this;
}
//Apple.prototype.update = function(delta) {}
Apple.prototype.renderer = function(ctx) {
    ctx.drawImage(this.img, this.x, this.y);
}