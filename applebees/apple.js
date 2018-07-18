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
    // Drop shadow
    ctx.beginPath();
    ctx.fillStyle="rgba(100,100,100,0.5)"
    ctx.ellipse(this.x+g.ui.blockSize/2, this.y+g.ui.blockSize, g.ui.blockSize/5, g.ui.blockSize/10, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.drawImage(this.img, this.x, this.y);
}