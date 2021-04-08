function Player(options) {
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.w = options.w || g.ui.bz;
  this.h = options.h || g.ui.bz;
  this.sprite = g.ui.sprites.player;
  this.collider=0;
  this.tag='player';
  this.acc={x:0, y:0};
  this.speed={x:0, y:0};
  this.velocity = options.velocity || 5;
  this.direction=0;
  this.frame = 0;
  this.lastFrameTime = Date.now();
  g.collider.check(this, ["block", "sea"], (e1, e2)=>{g.player.stop()}, 0) 
  g.collider.check(this, ["gem"], (e1, e2)=>{
    g.manager.addGem(e2);
  }, 10); 
  return this;
}
Player.prototype.update = function(delta) {
  if (g.state!="play") return;
  //if (Math.round(this.distanceFrom(g.startPoint)) == 0) g.manager.atstartPoint();
  if (this.nextMove) this.move(this.nextMove);
  this.speed.x += this.acc.x * delta;
  this.speed.y += this.acc.y * delta;
  this.x += this.speed.x;// * delta;
  this.y += this.speed.y;//    * delta;
  let frameDelta = Date.now() - this.lastFrameTime;
  this.stationary = false;
  if (this.speed.x>0) this.direction=0; // Right
  else if (this.speed.x<0) this.direction=1; // Left
  else if (this.speed.y<0) this.direction=2;
  else if (this.speed.y>0) this.direction=3;
  else this.stationary = true;
  if(frameDelta > 100) {
    if (this.stationary && this.direction !== 1) {
      // Stop walking up/down and face right
      this.direction=0;
      this.frame=0;
    }
    let blink = rnd(1,70) === 3;
    if (this.stationary && frameDelta > 200 && (this.frame >= 1 || blink)) {
      this.frame = this.frame < 1 ? this.frame + 1 : 0;
      this.lastFrameTime = Date.now();
    }
    if (!this.stationary) {
      this.frame = this.frame < 5 ? this.frame + 1 : 2;
      this.lastFrameTime = Date.now();
    }
  }
}
Player.prototype.renderer = function(ctx) {
  this.sprite.x=this.x;
  this.sprite.y=this.y;
  this.sprite.offX=this.frame*(g.ui.bz);
  this.sprite.offY=(6+this.direction)*(g.ui.bz);
  this.sprite.renderer(ctx);
  g.manager.carrying.forEach((p,i)=>{
    let o = {x: 14, y: 14, xi:-3, yi:0};
    if (this.direction==1) o = {x: 10, y: 14, xi:3, yi:0}
    else if (this.direction==2) o = {x: 19, y:7, xi:0, yi:3}
    else if (this.direction==3) o = {x: 6, y:22, xi:0, yi:-3}
    g.manager.carrying.forEach((gem, i) => {
      gem.sprite.renderer(ctx, g.player.x+o.x+i*o.xi, g.player.y+o.y+i*o.yi, 0.5)
    })
  });
}
Player.prototype.move = function(dir) {
  this.nextMove = null;
  if (dir.x*this.velocity==this.speed.x && dir.y*this.velocity==this.speed.y) return this.stop();
  let oldSpeed = {x: this.speed.x, y: this.speed.y};
  let ghost = {tag: "ghost", x: this.x, y: this.y, w: this.w, h: this.h, speed: {x: dir.x*this.velocity, y: dir.y*this.velocity}}
  let wouldCollide = Collider.collide(ghost, ["sea", "block"], 0);
  let isColliding = Collider.collide(this, ["sea", "block"], 1);
  let stationary = this.speed.x+this.speed.y==0;
  // Move up/down only if on X-grid (left/right)
  let onGrid = (dir.y!==0 && this.x % g.ui.bz == 0)||(dir.x!==0 && this.y % g.ui.bz == 0);
  //dp( this.x % g.ui.bz == 0)
  //dp(isColliding, wouldCollide, stationary, onGrid, this.x, this.x);
  if (isColliding && wouldCollide) {
    // Do nothing
  } else if (stationary && !wouldCollide) {
    // Move now
    this.speed = ghost.speed;
  } else if (wouldCollide || !onGrid) {
    // If we can't move now, move later
    this.nextMove=dir;
  } else {
    // Move now
    this.speed = ghost.speed;
  }
}
Player.prototype.stop = function() {
  this.speed={x: 0, y:0};
}
Player.prototype.distanceFrom = function(ent) {
  return Math.sqrt(Math.pow(ent.x-this.x,2)+Math.pow(ent.y-this.y,2))/g.ui.bz 
};