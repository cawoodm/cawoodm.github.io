function GameWon(options) {
    this.static=true;
    this.gameover = new Sprite({sprite: "sprites", x: g.ui.vWidth/2, y: g.ui.vHeight/2, w: 437, h: 157, offX: 0, offY: 490, center: true, scale: 0.1});
}
GameWon.prototype.update = function(delta) {
    if (this.gameover.w*this.gameover.scale<g.ui.vWidth*0.8) this.gameover.scale +=0.05;
}
GameWon.prototype.renderer = function(ctx) {
    g.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; g.ctx.fillRect(0, 0, g.ui.vWidth, g.ui.vHeight);
    this.gameover.renderer(ctx);
}
