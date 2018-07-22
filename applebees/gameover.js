function GameOver(options) {
    this.static=true;
    this.gameover = new Sprite({sprite: "sprites", x: g.ui.vWidth/2, y: g.ui.vHeight/2, w: 564, h: 120, offX: 0, offY: 367, center: true, scale: 0.1});
}
GameOver.prototype.update = function(delta) {
    if (this.gameover.w*this.gameover.scale<g.ui.vWidth*0.8)
        this.gameover.scale +=0.05;
    else
        g.state="gameOver";
}
GameOver.prototype.renderer = function(ctx) {
    g.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; g.ctx.fillRect(0, 0, g.ui.vWidth, g.ui.vHeight);
    this.gameover.renderer(ctx);
}
