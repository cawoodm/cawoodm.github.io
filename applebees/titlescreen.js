function TitleScreen(options) {
    this.static=true;
    this.player = new Sprite({sprite: "sprites", x: g.ui.vWidth/2, y: 0, w: 100, h: 100, offX: 299, offY: 0, center: true, scale: 3});
    this.player.acc=g.ui.blockSize/4;
    this.logo = new Sprite({sprite: "sprites", x: g.ui.vWidth/2, y: g.ui.vHeight/2, w: 822, h: 164, offX: 0, offY: 201, center: true, scale: 0.1});
}
TitleScreen.prototype.update = function(delta) {
    if (this.player.y<g.ui.vHeight/5) {this.player.acc-=0.2; this.player.y += this.player.acc;}
    if (this.logo.w*this.logo.scale<g.ui.vWidth*0.8) this.logo.scale +=0.05;
}
TitleScreen.prototype.renderer = function(ctx) {
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, g.ui.vWidth, g.ui.vHeight);

    this.logo.renderer(ctx);
    this.player.renderer(ctx);

}
