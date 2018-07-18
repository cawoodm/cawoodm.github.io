function Wall(options) {
	this.x = options.x || 0;
	this.y = options.y  || 0;
	this.size = options.size  || 100;
    this.img = Images.get.wall;
    this.tag = "wall";
}
Wall.prototype.renderer = function(ctx) {// Drop shadow
    ctx.fillStyle="rgba(100,100,100,0.5)"
    ctx.fillRect(this.x+15, this.y+15, g.ui.blockSize, g.ui.blockSize);
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
}