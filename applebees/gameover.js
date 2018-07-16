function GameOver(options) {
    this.text = options.text;
    this.imgApple = Images.get.apple;
    this.imgBee = Images.get.bee;
    this.imgPlayer = Images.get.player;
}
GameOver.prototype.renderer = function(ctx) {
    let scale = 5;
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, g.ui.width, g.ui.height);
    
    ctx.scale(scale, scale)
    
    ctx.drawImage(this.imgApple, 20, 20);
    ctx.drawImage(this.imgBee, 140, 140);
    ctx.drawImage(this.imgPlayer, 180, 30);

    ctx.fillStyle="#0F0";
    ctx.fillText(this.text, 130, 100);
    
}
