function Message(options) {
    this.x = options.x || 10;
    this.y = options.y || 10;
    this.tag="message";
    this.scale=1;
    this.text = options.text;
}
Message.prototype.update = function(delta) {
    this.scale = this.scale<8?this.scale+0.1:this.scale;
}
Message.prototype.renderer = function(ctx) {
    g.ctx.globalAlpha=0.6;
    g.ctx.fillStyle = '#000';
    let s = this.scale;
    g.ctx.scale(s, s)
    g.ctx.fillRect(this.x, this.y, 100, 20);
    g.ctx.fillStyle="#0F0";
    g.ctx.fillText(this.text, this.x, (this.y+10));
}