function TitleScreen(options) {
    this.text = options.text;
    this.imgApple = Images.get.apple;
    this.imgBee = Images.get.bee;
    this.imgPlayer = Images.get.player;
}
TitleScreen.prototype.renderer = function(ctx) {
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, g.ui.width, g.ui.height);
    
    ctx.drawImage(this.imgApple, 2*g.ui.blockSize, 2*g.ui.blockSize);
    ctx.drawImage(this.imgBee, 12*g.ui.blockSize, 2*g.ui.blockSize);
    ctx.scale(5,5)
    ctx.drawImage(this.imgPlayer, 6*g.ui.blockSize/5, 7*g.ui.blockSize/5);
    ctx.fillStyle="#0F0";
    ctx.fillText(this.text, 130, 100);
    
}
