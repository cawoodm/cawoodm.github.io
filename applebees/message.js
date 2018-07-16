function Message(options) {
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.tag="message";
    this.text = options.text;
}
Message.prototype.renderer = function(ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(4*g.ui.blockSize, 4*g.ui.blockSize, 8*g.ui.blockSize, 6*g.ui.blockSize);
    ctx.fillStyle="#0F0";
    ctx.scale(8, 8)
    ctx.fillText(this.text, 72, 75);
}