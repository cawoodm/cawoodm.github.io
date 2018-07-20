Camera = function(options) {
    this.x=options.x||0;
    this.y=options.y||0;
    this.w=options.w||500;
    this.h=options.h||500;
    this.box={x:0, y:0, w: options.box||300, h: options.box||300}
    g.ui.canvas.width=this.w;
    g.ui.canvas.height=this.h;
    g.ctx.scale(g.ui.scaleX, g.ui.scaleY);
}
Camera.prototype.update = function() {
    // Let box follow player if player reaches box's bounds
    if (g.player.x<this.box.x) this.box.x = g.player.x;
    if (g.player.x+g.player.w>this.box.x+this.box.w) this.box.x = g.player.x+g.player.w-this.box.w;
    if (g.player.y<this.box.y) this.box.y = g.player.y;
    if (g.player.y+g.player.h>(this.box.y+this.box.h)) this.box.y = g.player.y+g.player.h-this.box.h;
    
    // Keep camera centered on the box around the player
    let boxCenter = {x: this.box.x+this.box.w/2, y: this.box.y+this.box.h/2}
    let camCenter = {x: this.x+this.w/2, y: this.y+this.h/2}
    if (boxCenter.x!=camCenter.x || boxCenter.y!=camCenter.y) {
        this.x += boxCenter.x-camCenter.x;
        this.y += boxCenter.y-camCenter.y;
    }
}
Camera.prototype.renderer = function(ctx) {
    return;
    g.ctx.strokeStyle='#00F'
    g.ctx.strokeRect(this.box.x, this.box.y, 300, 300)
    g.ctx.fillStyle='#F00'
    g.ctx.fillRect(this.x+this.w/2-2, this.y+this.h/2-5, 4, 10)
    g.ctx.fillStyle='#00F'
    g.ctx.strokeRect(this.box.x+this.box.w/2-5, this.box.y+this.box.h/2-5, 10, 10)
}