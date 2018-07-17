function Message(options) {
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.tag="message";
    this.text = options.text;
}
Message.prototype.renderer = function(ctx) {
    g.ctx.globalAlpha=0.4;
    g.ctx.fillStyle = '#000';
    g.ctx.fillRect(4*g.ui.blockSize, 4*g.ui.blockSize, 8*g.ui.blockSize, 6*g.ui.blockSize);
    g.ctx.scale(8, 8)
    g.ctx.fillStyle="#0F0";
    g.ctx.fillText(this.text, 72, 75);
}