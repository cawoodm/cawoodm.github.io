function GameOver(options) {
    this.gameover = new Sprite({sprite: "sprites", x: g.ui.width/2, y: g.ui.height/2, w: 564, h: 120, offX: 0, offY: 367, center: true, scale: 0.1});
}
GameOver.prototype.update = function(delta) {
    if (this.gameover.w*this.gameover.scale<g.ui.width*0.8) this.gameover.scale +=0.05;
}
GameOver.prototype.renderer = function(ctx) {
    g.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; g.ctx.fillRect(0, 0, g.ui.width, g.ui.height);
    this.gameover.renderer(ctx);
}
