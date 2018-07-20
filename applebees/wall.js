function Wall(options) {
	this.x = options.x || 0;
	this.y = options.y  || 0;
    this.size = options.size  || 100;
    this.collider=1;
    this.sprite = new Sprite({sprite: "sprites", x: this.x, y: this.y, w: 100, h: 100, offX: 400, offY: 100, scale: 1});
    this.tag = "wall";
}
Wall.prototype.renderer = function(ctx) {
    // Drop shadow
    ctx.fillStyle="rgba(100,100,100,0.5)"
    ctx.fillRect(this.x+15, this.y+15, g.ui.blockSize, g.ui.blockSize);
    this.sprite.renderer(ctx);
}