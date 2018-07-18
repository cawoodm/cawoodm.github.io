function Stats(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.score = 0;
	this.scale = options.scale || 1;
}
Stats.prototype.renderer = function(ctx) {
	ctx.scale(this.scale, this.scale);
	ctx.fillStyle="#445";
	ctx.font="30px Arial";
	ctx.fillText("01 Level: " + g.level + "   Score: " + this.score, this.x, this.y);
}
Stats.prototype.update = function(delta) {
	if (!g.player) return;
	if (g.entity.count("apple")==0) return g.nextLevel();
}
