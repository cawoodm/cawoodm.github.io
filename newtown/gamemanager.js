function GameManager(options) {
  this.static = true;
  this.flash = false;
  this.level = 1;
  this.carrying=[];
  this.filter=0;
  g.sprites = {
    cloud: new Sprite({w: 32, h: 32, offX: 32*4, offY: 32*1}),
  };
  return this;
}
GameManager.prototype.update = function(dt) {
  if (g.state!="play") return;
  // Every 1/2 second
  if (g.ticker.ticks % 30 == 0) this.flash = !this.flash;
  //if (this.lost.length>5) return g.GameOver("Too many unhappy customers!");
}
GameManager.prototype.addGem = function(gem) {
  this.filter++;
  this.carrying.push(gem);
  g.scene.remove(gem);
};
//GameManager.prototype.renderer = function(ctx) {}
function ArrayShuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
function ArrayRemove(arr, item) {
  for(let i=0; i<arr.length; i++) if (arr[i]===item) return arr.splice(i,1);
}