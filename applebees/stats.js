function Stats(options) {
	this.x = 10;
	this.y = 50;
	this.static=true;
	this.score = 0;
	this.lives = 3;
	this.scale = 1; //options.scale || 1;
	this.sprite = new Sprite({sprite: "sprites", w: 100, h: 100, offX: 300, offY: 0, scale: 0.5});
}
Stats.prototype.update = function(delta) {
	if (g.state!="play") return;
	if (g.scene.count("apple")==0) {
		g.state="message";
		g.scene.add(new Message({text:"Next Level!", callback:()=>{
			g.nextLevel();
		}}));
	}
}
Stats.prototype.renderer = function(ctx) {
	
	ctx.fillStyle="rgba(50, 50, 50, 0.5)";
	ctx.fillRect(0, 0, g.ui.vWidth, 80);

	for (let i=1; i<=this.lives; i++) {
		this.sprite.x = g.ui.canvas.width/g.ui.scaleX-220+i*this.sprite.w*this.sprite.scale;
		this.sprite.y = 10;
		this.sprite.renderer(ctx);
	}
	
	ctx.fillStyle="#99C";
	ctx.font="60px Arial";
	ctx.fillText("Level: " + g.level + "  Score: " + this.score, this.x, this.y);
}
Stats.prototype.die = function() {
	this.lives--;
	g.state="message";
	g.scene.add(new Message({text:"Owww!", callback:()=>{
		if (g.stats.lives > 0)
			g.nextLevel(g.level--);
		else
			g.gameOver();	
	}}));
	
}