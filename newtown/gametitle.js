function GameTitle() {
  this.texts = [
      "The world has lost all it's color!",
      "Only YOU can save us!",
      "Collect all 3 color gems...",
      "...to restore color to our world!",
      "GOOD LUCK!",
      ""
  ];
  this.sprite = new Sprite(g.ui.sprites.player);
  this.player = {x: g.ui.bz*(g.ui.blocksInView-3), y: 10, speed: 2};
  this.frame=0;
  this.ticker=0;
}
GameTitle.prototype.update = function(delta) {
  //if (this.player.x > g.ui.bz*(g.ui.blocksInView-1) || this.player.x < 0) this.player.speed *= -1;
  //this.player.x += this.player.speed;
  this.ticker++;
}
GameTitle.prototype.renderer = function(ctx) {
  ctx.fillStyle='#333';
  g.rect(0, 0, g.ui.width, g.ui.height)
  this.sprite.x = this.player.x;
  this.sprite.y = this.player.y;
  this.sprite.renderer(ctx);
  ctx.fillStyle='#EEE';
  ctx.font='20pt Consolas';
  ctx.fillText("ColorGone!", 20, 40)
  if (this.ticker > 90) this.nextFrame();
  if (this.frame==this.texts.length) return g.restart(false);
  ctx.font='12pt Consolas';
  let off = 0;
  for (let i=0; i<this.frame; i++)
      ctx.fillText(this.texts[i], 20, 80+20*i);
};
GameTitle.prototype.nextFrame = function() {
  this.frame++;
  this.ticker=0;
};