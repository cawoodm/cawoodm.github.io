function Message(options) {
    this.tag="message";
    this.scale=1;
    this.static=true;
    this.text = options.text;
    this.callback = options.callback;
}
Message.prototype.update = function(delta) {
    if (this.scale<30)
        this.scale += 0.5;
    else {
        g.entity.remove(this);
        if (typeof this.callback == "function") this.callback();
    }
}
Message.prototype.renderer = function(ctx) {
    g.ctx.fillStyle = 'rgba(0,0,0,0.5)';
    let s = this.scale;
    g.ctx.translate(g.ui.vWidth/2, g.ui.vHeight/2)
    g.ctx.scale(s, s)
    g.ctx.fillRect(-50, -50, 100, 100);
    g.ctx.fillStyle="#99C";g.ctx.fillText(this.text, -20, 0);
}