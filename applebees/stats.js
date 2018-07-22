function Stats(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.static=true;
	this.score = 0;
	this.lives = 3;
	this.scale = options.scale || 1;
	this.sprite = new Sprite({sprite: "sprites", w: 100, h: 100, offX: 300, offY: 0, scale: 0.3});
}
Stats.prototype.update = function(delta) {
	if (g.state!="play") return;
	if (g.entity.count("apple")==0) {
		g.state="message";
		g.entity.add(new Message({text:"Next Level!", callback:()=>{
			g.nextLevel();
		}}));
	}
}
Stats.prototype.renderer = function(ctx) {
	
	ctx.scale(this.scale, this.scale);

	ctx.fillStyle="rgba(50, 50, 50, 0.5)";
	ctx.fillRect(0, 0, g.ui.vWidth, 40);

	for (let i=1; i<=this.lives; i++) {
		this.sprite.x = (g.ui.canvas.width-50+i*this.sprite.w*2*this.sprite.scale)/this.scale;
		this.sprite.y = 5;
		this.sprite.renderer(ctx);
	}
	
	ctx.fillStyle="#99C";
	ctx.font="30px Arial";
	ctx.fillText("Level: " + g.level + "  Score: " + this.score, this.x, this.y);
}
Stats.prototype.die = function() {
	this.lives--;
	g.state="message";
	g.entity.add(new Message({text:"Owww!", callback:()=>{
		if (g.stats.lives > 0)
			g.nextLevel(g.level--);
		else
			g.gameOver();	
	}}));
	
}