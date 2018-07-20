function Stats(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.static=true;
	this.score = 0;
	this.scale = options.scale || 1;
}
Stats.prototype.update = function(delta) {
	if (!g.player) return;
	if (g.entity.count("apple")==0) return g.nextLevel();
}
Stats.prototype.renderer = function(ctx) {
	ctx.scale(this.scale, this.scale);
	ctx.fillStyle="rgba(50, 50, 50, 0.5)";
	ctx.fillRect(0, 0, g.ui.vWidth, 40);
	ctx.fillStyle="#99C";
	ctx.font="30px Arial";
	ctx.fillText("Level: " + g.level + "   Score: " + this.score, this.x, this.y);
}