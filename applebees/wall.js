function Wall(options) {
	this.x = options.x || 0;
	this.y = options.y  || 0;
	this.size = options.size  || 100;
    this.img = Images.get.wall;
}
Wall.prototype.renderer = function(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
}