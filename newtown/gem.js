function Gem({x, y, w, h, c}) {
  this.x = x;h
  this.y = y;
  this.w = w;
  this.h = h;
  this.gemColor = c;
  this.tag = 'gem';
  this.sprite = new Sprite({w: g.ui.bz, h: g.ui.bz, offX: g.ui.bz * c, offY: g.ui.bz*4, scale: 1});
  return this;
}
Gem.prototype.renderer = function(ctx) {
  this.sprite.x=this.x;
  this.sprite.y=this.y;
  //this.sprite.offX=this.frame*(g.ui.bz);
  this.sprite.renderer(ctx);
}