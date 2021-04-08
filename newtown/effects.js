function Porthole(ctx) {
  this.w = ctx.canvas.width/2;
  this.h = ctx.canvas.height/2  ;
  let center = {x: this.w / 2, y: this.h / 2};
  this.frame = ctx.createRadialGradient(center.x, center.y, 30, center.x, center.y, this.w/1.4);
  this.frame.addColorStop(0, 'transparent');
  this.frame.addColorStop(1, 'black');
  //this.frame.addColorStop(1, 'rgba(20, 20, 20, 0.95)');
  return this;
}
Porthole.prototype.draw = function(ctx) {
  /*
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,this.w,this.h);
  */
 ctx.fillStyle = this.frame;
 ctx.translate(g.player.x-this.w/2, g.player.y-this.h/2)
 //ctx.translate(g.player.x, g.player.y)
 ctx.filter = "blur(5px)";
 //ctx.fillRect(0, 0, this.w, this.h);
  ctx.fillRect(-g.camera.box.w, -g.camera.box.h, this.w + 2*g.camera.box.w, this.h + 2*g.camera.box.h);
};
function Grid(ctx) {
  this.w = ctx.canvas.width/2;
  this.h = ctx.canvas.height/2;
  this.static = true;
}
Grid.prototype.renderer = function(ctx) {
  ctx.strokeStyle = 'rgba(0,0,200,0.2)';
  ctx.beginPath();
  for (let x=0; x <= this.w; x+=g.ui.bz) {
    ctx.moveTo(x, 0);ctx.lineTo(x, this.h);
  }
  for (let y=0; y <= this.h; y+=g.ui.bz) {
    ctx.moveTo(0, y);ctx.lineTo(this.w, y);
  }
  ctx.stroke();
}