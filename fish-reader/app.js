(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let loop = require("./raf");
let rand = require("./rng")(Math.random());
let f = require("./functions");
let Explosion = require("./explosion");
let Fish = require("./fish");
let Bubbles = require("./bubbles");
let Ocean = require("./ocean");

window.dp=f.dp;

function init() {
  
  window.g = {
    ticks: 0,
  };
  
  g.canvas = document.createElement("canvas");
  document.body.appendChild(g.canvas);
  g.canvas.addEventListener("click", (e) => init(e.clientX, e.clientY, e));
  g.canvas.width=document.documentElement.clientWidth; //window.screen.width/availWidth
  g.canvas.height=document.documentElement.clientHeight; //availHeight
  g.ctx = g.canvas.getContext("2d");
  
  g.entities = [];
  let osc = g.osc = [];
  osc.push({a:rand.float(1)})
  osc.push({a:rand.float(1)})
  osc.push({a:rand.float(1)})
  
  setInterval(()=>oscillate(osc[0]), 2000);
  
  restart();
}

function spawn(t, x, y) {
  oscillate(g.osc[1]);
  if (t===1)
    g.entities.push(new Fish({x: x||rand.range(0, g.canvas.width/5), y: y||rand.range(0, g.canvas.height), lifetime: 2000, size:rand.range(12,18), num: 1, gravity: 0, dd: 50, hue: rand.range(0, 360)}));
  else
    g.entities.push(new Bubbles({x: x||rand.range(0, g.canvas.width), y: g.canvas.height, height: g.canvas.height, lifetime: 1200, gravity: -50, size:rand.range(3,10), num: rand.range(10,30), hue: rand.range(120, 260)}));
};
function restart() {
  g.entities.length = 0;
  g.entities.push(new Ocean({width: g.canvas.width, height: g.canvas.height})); 
  for (let i=0; i<10; i++) spawn(0);
  for (let i=0; i<10; i++) spawn(1);
}
loop.start(function(elapsed) {
  
  // Clear the screen
  g.ctx.fillStyle="white";
  g.ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
  
  g.ticks++;
  if (g.ticks%30===0) spawn(0);
  
  oscillate(g.osc[2])
  
  g.entities.forEach((ent, index)=>{
    ent.update(elapsed);
    if (ent.objs && ent.objs.length===0) return g.entities.splice(index, 1);
    g.ctx.save();
    ent.render(g.ctx);
    g.ctx.restore();
  });
  
});

function oscillate(o) {
  o.a = ((10*++o.a)%10)/7;
  o.x=Math.cos(o.a);
  o.y=Math.sin(o.a);
}

init();
},{"./bubbles":2,"./explosion":3,"./fish":4,"./functions":5,"./ocean":6,"./raf":7,"./rng":8}],2:[function(require,module,exports){
var rng = require("./rng");
var rand = rng(Math.random());
var dp = console.log;

var Bubbles = function(options) {
  Object.assign(this, {x: 0, y:0, height: 1, num: rand.range(10, 40), hue: 240, size: 25, lifetime: 1100, gravity: -20});
  Object.assign(this, options);
  this.ox = this.x;
  this.oy = this.y;
  this.ang = 0;
  this.age = 0;
  this.objs = [];
  for (let i=0; i<this.num; i++) {
    let ang = Math.PI*i/(this.num-1);
    let dy = rand.range(-30, 30);
    let dsy = 1-(dy+30)/60;
    this.objs.push({
      x: this.x + rand.range(-3*this.size, 3*this.size),
      y: this.y + dy,
      dy: this.gravity + dy*dsy,
      life: 0,
      size: this.size * dsy,
      scale: rand.range(1,3),
      col: {h: this.hue + rand.range(-10, 10), s: 30, l: 80}
    });
  }
};
Bubbles.prototype.update = function(delta) {
  this.ang = (++this.ang)%360;
  this.alpha = Math.max(0, 0.6-this.age);
  this.objs.forEach((obj, index, objs) => {

    // Lifetime
    obj.life += delta * 50;
    obj.age = (this.height-obj.y)/this.height;
    if (obj.age >= 1.0) return objs.splice(index, 1);
    
    // Grow with age
    obj.size = 1+0.5*obj.scale*this.size*obj.age;

    // Physics and gravity
    let lshift = 15*obj.age;
    let shift = 360 * index/objs.length + rand.range(-lshift, lshift);
    let lspeed = 4;
    let fn = index%2===0?Math.sin:Math.cos;
    let dx = 0.1*(obj.y-this.oy)*fn((shift+this.ang*lspeed)*Math.PI/180);
    obj.x = this.ox + dx;
    obj.y += obj.dy * delta;
    this.age = Math.max(this.age, obj.age);
  });
};
Bubbles.prototype.render = function(ctx) {
  ctx.globalAlpha = this.alpha;
  this.objs.forEach((obj, index, objs) => {
    ctx.save();
    ctx.strokeStyle = `hsl(${obj.col.h}, ${obj.col.s}%, ${obj.col.l}%)`;
    ctx.translate(obj.x, obj.y);
    ctx.beginPath();
    ctx.arc(0, 0, obj.size, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  });
};
module.exports = Bubbles;
},{"./rng":8}],3:[function(require,module,exports){
var rng = require("./rng");
var rand = rng(Math.random());

var Explosion = function(options) {
  Object.assign(this, {x: 0, y:0, num: 200, dd: 100, hue: 120, size: 5, lifetime: 100, gravity: 2, dd: 100});
  Object.assign(this, options);
  this.objs = [];
  for (let i=0; i<this.num; i++) {
    let ang = Math.PI*i/(this.num-1);
    this.objs.push({
      x: this.x,
      y: this.y,
      life: 0,
      size: this.size,
      dx: rand.range(-this.dd, this.dd)*Math.cos(ang),
      dy: rand.range(-this.dd, this.dd)*Math.sin(ang)-4*this.dd,
      col: {h: this.hue + rand.range(-10, 10), s: 80, l: 50}
    });
  }
};
Explosion.prototype.update = function(delta) {
  this.objs.forEach((obj, index, objs) => {

    // Lifetime
    obj.life += delta * 50;
    if (obj.life > this.lifetime) objs.splice(index, 1);
    
    // Fade with age
    obj.alpha = 1-obj.life/this.lifetime;

    // Physics and gravity
    obj.dy += this.gravity;
    obj.x += obj.dx * delta;
    obj.y += obj.dy * delta;

  });
};
Explosion.prototype.render = function(ctx) {
  ctx.globalAlpha = this.objs[0].alpha;
  this.objs.forEach((obj, index) => {
    ctx.fillStyle = `hsl(${obj.col.h}, ${obj.col.s}%, ${obj.col.l}%)`;
    ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
  });
};
module.exports = Explosion;
},{"./rng":8}],4:[function(require,module,exports){
var rng = require("./rng");
var rand = rng(Math.random());

var Fish = function(options) {
  Object.assign(this, {x: 0, y:0, num: 1, hue: 120, size: 5, lifetime: 100, gravity: 2, dd: 100});
  Object.assign(this, options);
  this.objs = [];
  let f = Math.sqrt(this.num)*5;
  for (let i=0; i<this.num; i++) {
    let ang = Math.PI*i/this.num;
    this.objs.push({
      x: this.x+rand.range(-this.size*f, this.size*f),
      y: this.y+rand.range(-this.size*f, this.size*f),
      life: 0,
      size: this.size*rand.range(10,30)/10,
      dx: rand.pick([1,-1])*rand.range(this.dd/2, this.dd),
      dy: rand.range(-this.dd/4, this.dd/4)*Math.sin(ang),
      col: {h: this.hue + rand.range(-10, 10), s: 80+ rand.range(-10, 10), l: 50+ rand.range(-10, 10)}
    });
  }
};
Fish.prototype.update = function(delta) {
  this.objs.forEach((obj, index, objs) => {

    // Lifetime
    obj.life += delta * 50;
    if (obj.life > this.lifetime) objs.splice(index, 1);
    
    // Physics and gravity
    obj.dy += this.gravity;
    obj.x += obj.dx * delta;
    obj.y += obj.dy * delta;

  });
};
Fish.prototype.render = function(ctx) {
  this.objs.forEach((obj, index) => {
    ctx.save();
    ctx.fillStyle = `hsl(${obj.col.h}, ${obj.col.s}%, ${obj.col.l}%)`;
    ctx.translate(obj.x + obj.size/2, obj.y + obj.size/2);
    ctx.scale(Math.abs(obj.dx)/obj.dx, 1);
    let u = obj.size;
    circle(-3*u, -u/3, u/4, 3, 1, 20, 0, 0, 0, 0.8, true); // Tail top
    circle(-3*u, u/3, u/4, 3, 1, -20, 0, 0, 0, 0.8, true); // Tail bottom
    circle(0, 0, u, 3, 1, 0, 0, 0, 0, 1, true); // Body
    circle(u/2, u/3, u/4, 2, 0.2, 0, 0, 0, 10, 0.8, true); // Fin
    circle(u/2, u/4, u/4, 2, 0.2, 10, 0, 0, 10, 0.8, true); // Fin
    circle(u/2, u/6, u/4, 2, 0.2, 20, 0, 0, 10, 0.8, true); // Fin
    circle(2*u, -u/4, u/4, 1, 1, 0, 0, 0, 30, 1); // Eye
    circle(2*u, -u/4, u/10, 1, 1, 0, 0, 0, -100, 1); // Eye
    ctx.restore();
    function circle(x, y, r, w, h, rot, hue, sat, lum, alpha=1, stroke=false) {
      ctx.save();
      ctx.fillStyle = `hsla(${obj.col.h+hue}, ${obj.col.s+sat}%, ${obj.col.l+lum}%, ${alpha})`;
      if (stroke) ctx.strokeStyle = `hsla(${obj.col.h+hue}, ${obj.col.s+sat}%, ${obj.col.l-20}%, ${0.5})`;
      ctx.lineWidth = 2;
      ctx.translate(x, y);
      if (rot) ctx.rotate(rot*Math.PI/180);
      ctx.beginPath();
      ctx.scale(w, h);
      ctx.arc(0, 0, r, 0, Math.PI * 2, true);
      ctx.closePath();
      if (stroke) ctx.stroke();
      ctx.fill();
      ctx.restore();
    }
  });
};
module.exports = Fish;
},{"./rng":8}],5:[function(require,module,exports){
module.exports = {
	dp: console.log
	,dp1: function() {
		let args = [];
		for (let a in arguments) args.push(typeof arguments[a] == "number"?arguments[a].toFixed(2):arguments[a])
		console.log.apply(console, args);
	}
	,$: document.querySelector.bind(document)
};
},{}],6:[function(require,module,exports){
var rng = require("./rng");
var rand = rng(Math.random());

var Ocean = function(options) {
  Object.assign(this, {x: 0, y:0, width: 0, height:0, src: "bg.jpg", ang: 0});
  Object.assign(this, options);
  this.img = new Image();
  this.img.src = this.src;
};
Ocean.prototype.update = function(delta) {
  // Rock background back and forth by 10px
  this.ang = this.ang > Math.PI*2?0:this.ang+0.01;
  this.x = 10*Math.sin(this.ang);
  this.y = 10*Math.sin(this.ang);
};
Ocean.prototype.render = function(ctx) {
  ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, -10+this.x, -10+this.y, this.width+2*10, this.height+2*10)
  let grd = ctx.createLinearGradient(0, 0, this.width/50, this.height/3);
  grd.addColorStop(0, "rgba(0, 0, 0, 0.300)");
  grd.addColorStop(0.2, "rgba(24, 58, 124, 0.60)");
  grd.addColorStop(1, "rgba(4, 2, 24, 1)");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, this.width, this.height);
};
module.exports = Ocean;
},{"./rng":8}],7:[function(require,module,exports){
// Holds last iteration timestamp.
var time = 0;

/**
 * Calls `fn` on next frame.
 *
 * @param  {Function} fn The function
 * @return {int} The request ID
 * @api private
 */
function raf(fn) {
  return window.requestAnimationFrame(function() {
    var now = window.performance.now();
    var elapsed = now - time;

    if (elapsed > 999) {
      elapsed = 1 / 60;
    } else {
      elapsed /= 1000;
    }

    time = now;
    fn(elapsed);
  });
}

module.exports = {
  /**
   * Calls `fn` on every frame with `elapsed` set to the elapsed
   * time in milliseconds.
   *
   * @param  {Function} fn The function
   * @return {int} The request ID
   * @api public
   */
  start: function(fn) {
    return raf(function tick(elapsed) {
      fn(elapsed);
      raf(tick);
    });
  },
  /**
   * Cancels the specified animation frame request.
   *
   * @param {int} id The request ID
   * @api public
   */
  stop: function(id) {
    window.cancelAnimationFrame(id);
  }
};

},{}],8:[function(require,module,exports){
module.exports = function(seed) {
  function random() {
    var x = Math.sin(0.8765111159592828 + seed++) * 1e4
    return x - Math.floor(x)
  }
  
  var rng = {
    /**
     * Return an integer within [0, max).
     *
     * @param  {int} [max]
     * @return {int}
     * @api public
     */
    int: function(max) {
      return random() * (max || 0xfffffff) | 0;
    },
    /**
     * Return a float within [0.0, 1.0).
     *
     * @return {float}
     * @api public
     */
    float: function() {
      return random();
    },
    /**
     * Return a boolean.
     *
     * @return {Boolean}
     * @api public
     */
    bool: function() {
      return random() > 0.5;
    },
    /**
     * Return an integer within [min, max).
     *
     * @param  {int} min
     * @param  {int} max
     * @return {int}
     * @api public
     */
    range: function(min, max) {
      return rng.int(max - min) + min;
    },
    /**
     * Pick an element from the source.
     *
     * @param  {mixed[]} source
     * @return {mixed}
     * @api public
     */
    pick: function(source) {
      return source[rng.range(0, source.length)];
    }
  };

  return rng;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcVXNlcnNcXG1hcmNcXEdvb2dsZSBEcml2ZVxcV29ya1xcSmF2YVNjcmlwdFxcZ2FtZXNcXGZpc2gtcmVhZGVyXFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCIuL3NyYy9tYWluIiwiQzovTWFyYy93b3JrL0phdmFTY3JpcHQvZ2FtZXMvZmlzaC1yZWFkZXIvc3JjL2J1YmJsZXMuanMiLCJDOi9NYXJjL3dvcmsvSmF2YVNjcmlwdC9nYW1lcy9maXNoLXJlYWRlci9zcmMvZXhwbG9zaW9uLmpzIiwiQzovTWFyYy93b3JrL0phdmFTY3JpcHQvZ2FtZXMvZmlzaC1yZWFkZXIvc3JjL2Zpc2guanMiLCJDOi9NYXJjL3dvcmsvSmF2YVNjcmlwdC9nYW1lcy9maXNoLXJlYWRlci9zcmMvZnVuY3Rpb25zLmpzIiwiQzovTWFyYy93b3JrL0phdmFTY3JpcHQvZ2FtZXMvZmlzaC1yZWFkZXIvc3JjL29jZWFuLmpzIiwiQzovTWFyYy93b3JrL0phdmFTY3JpcHQvZ2FtZXMvZmlzaC1yZWFkZXIvc3JjL3JhZi5qcyIsIkM6L01hcmMvd29yay9KYXZhU2NyaXB0L2dhbWVzL2Zpc2gtcmVhZGVyL3NyYy9ybmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgbG9vcCA9IHJlcXVpcmUoXCIuL3JhZlwiKTtcclxubGV0IHJhbmQgPSByZXF1aXJlKFwiLi9ybmdcIikoTWF0aC5yYW5kb20oKSk7XHJcbmxldCBmID0gcmVxdWlyZShcIi4vZnVuY3Rpb25zXCIpO1xyXG5sZXQgRXhwbG9zaW9uID0gcmVxdWlyZShcIi4vZXhwbG9zaW9uXCIpO1xyXG5sZXQgRmlzaCA9IHJlcXVpcmUoXCIuL2Zpc2hcIik7XHJcbmxldCBCdWJibGVzID0gcmVxdWlyZShcIi4vYnViYmxlc1wiKTtcclxubGV0IE9jZWFuID0gcmVxdWlyZShcIi4vb2NlYW5cIik7XHJcblxyXG53aW5kb3cuZHA9Zi5kcDtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgXHJcbiAgd2luZG93LmcgPSB7XHJcbiAgICB0aWNrczogMCxcclxuICB9O1xyXG4gIFxyXG4gIGcuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGcuY2FudmFzKTtcclxuICBnLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGluaXQoZS5jbGllbnRYLCBlLmNsaWVudFksIGUpKTtcclxuICBnLmNhbnZhcy53aWR0aD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7IC8vd2luZG93LnNjcmVlbi53aWR0aC9hdmFpbFdpZHRoXHJcbiAgZy5jYW52YXMuaGVpZ2h0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7IC8vYXZhaWxIZWlnaHRcclxuICBnLmN0eCA9IGcuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBcclxuICBnLmVudGl0aWVzID0gW107XHJcbiAgbGV0IG9zYyA9IGcub3NjID0gW107XHJcbiAgb3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbiAgb3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbiAgb3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbiAgXHJcbiAgc2V0SW50ZXJ2YWwoKCk9Pm9zY2lsbGF0ZShvc2NbMF0pLCAyMDAwKTtcclxuICBcclxuICByZXN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwYXduKHQsIHgsIHkpIHtcclxuICBvc2NpbGxhdGUoZy5vc2NbMV0pO1xyXG4gIGlmICh0PT09MSlcclxuICAgIGcuZW50aXRpZXMucHVzaChuZXcgRmlzaCh7eDogeHx8cmFuZC5yYW5nZSgwLCBnLmNhbnZhcy53aWR0aC81KSwgeTogeXx8cmFuZC5yYW5nZSgwLCBnLmNhbnZhcy5oZWlnaHQpLCBsaWZldGltZTogMjAwMCwgc2l6ZTpyYW5kLnJhbmdlKDEyLDE4KSwgbnVtOiAxLCBncmF2aXR5OiAwLCBkZDogNTAsIGh1ZTogcmFuZC5yYW5nZSgwLCAzNjApfSkpO1xyXG4gIGVsc2VcclxuICAgIGcuZW50aXRpZXMucHVzaChuZXcgQnViYmxlcyh7eDogeHx8cmFuZC5yYW5nZSgwLCBnLmNhbnZhcy53aWR0aCksIHk6IGcuY2FudmFzLmhlaWdodCwgaGVpZ2h0OiBnLmNhbnZhcy5oZWlnaHQsIGxpZmV0aW1lOiAxMjAwLCBncmF2aXR5OiAtNTAsIHNpemU6cmFuZC5yYW5nZSgzLDEwKSwgbnVtOiByYW5kLnJhbmdlKDEwLDMwKSwgaHVlOiByYW5kLnJhbmdlKDEyMCwgMjYwKX0pKTtcclxufTtcclxuZnVuY3Rpb24gcmVzdGFydCgpIHtcclxuICBnLmVudGl0aWVzLmxlbmd0aCA9IDA7XHJcbiAgZy5lbnRpdGllcy5wdXNoKG5ldyBPY2Vhbih7d2lkdGg6IGcuY2FudmFzLndpZHRoLCBoZWlnaHQ6IGcuY2FudmFzLmhlaWdodH0pKTsgXHJcbiAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIHNwYXduKDApO1xyXG4gIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSBzcGF3bigxKTtcclxufVxyXG5sb29wLnN0YXJ0KGZ1bmN0aW9uKGVsYXBzZWQpIHtcclxuICBcclxuICAvLyBDbGVhciB0aGUgc2NyZWVuXHJcbiAgZy5jdHguZmlsbFN0eWxlPVwid2hpdGVcIjtcclxuICBnLmN0eC5maWxsUmVjdCgwLCAwLCBnLmNhbnZhcy53aWR0aCwgZy5jYW52YXMuaGVpZ2h0KTtcclxuICBcclxuICBnLnRpY2tzKys7XHJcbiAgaWYgKGcudGlja3MlMzA9PT0wKSBzcGF3bigwKTtcclxuICBcclxuICBvc2NpbGxhdGUoZy5vc2NbMl0pXHJcbiAgXHJcbiAgZy5lbnRpdGllcy5mb3JFYWNoKChlbnQsIGluZGV4KT0+e1xyXG4gICAgZW50LnVwZGF0ZShlbGFwc2VkKTtcclxuICAgIGlmIChlbnQub2JqcyAmJiBlbnQub2Jqcy5sZW5ndGg9PT0wKSByZXR1cm4gZy5lbnRpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgZy5jdHguc2F2ZSgpO1xyXG4gICAgZW50LnJlbmRlcihnLmN0eCk7XHJcbiAgICBnLmN0eC5yZXN0b3JlKCk7XHJcbiAgfSk7XHJcbiAgXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb3NjaWxsYXRlKG8pIHtcclxuICBvLmEgPSAoKDEwKisrby5hKSUxMCkvNztcclxuICBvLng9TWF0aC5jb3Moby5hKTtcclxuICBvLnk9TWF0aC5zaW4oby5hKTtcclxufVxyXG5cclxuaW5pdCgpOyIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG52YXIgZHAgPSBjb25zb2xlLmxvZztcclxuXHJcbnZhciBCdWJibGVzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgaGVpZ2h0OiAxLCBudW06IHJhbmQucmFuZ2UoMTAsIDQwKSwgaHVlOiAyNDAsIHNpemU6IDI1LCBsaWZldGltZTogMTEwMCwgZ3Jhdml0eTogLTIwfSk7XHJcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuICB0aGlzLm94ID0gdGhpcy54O1xyXG4gIHRoaXMub3kgPSB0aGlzLnk7XHJcbiAgdGhpcy5hbmcgPSAwO1xyXG4gIHRoaXMuYWdlID0gMDtcclxuICB0aGlzLm9ianMgPSBbXTtcclxuICBmb3IgKGxldCBpPTA7IGk8dGhpcy5udW07IGkrKykge1xyXG4gICAgbGV0IGFuZyA9IE1hdGguUEkqaS8odGhpcy5udW0tMSk7XHJcbiAgICBsZXQgZHkgPSByYW5kLnJhbmdlKC0zMCwgMzApO1xyXG4gICAgbGV0IGRzeSA9IDEtKGR5KzMwKS82MDtcclxuICAgIHRoaXMub2Jqcy5wdXNoKHtcclxuICAgICAgeDogdGhpcy54ICsgcmFuZC5yYW5nZSgtMyp0aGlzLnNpemUsIDMqdGhpcy5zaXplKSxcclxuICAgICAgeTogdGhpcy55ICsgZHksXHJcbiAgICAgIGR5OiB0aGlzLmdyYXZpdHkgKyBkeSpkc3ksXHJcbiAgICAgIGxpZmU6IDAsXHJcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSAqIGRzeSxcclxuICAgICAgc2NhbGU6IHJhbmQucmFuZ2UoMSwzKSxcclxuICAgICAgY29sOiB7aDogdGhpcy5odWUgKyByYW5kLnJhbmdlKC0xMCwgMTApLCBzOiAzMCwgbDogODB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbkJ1YmJsZXMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgdGhpcy5hbmcgPSAoKyt0aGlzLmFuZyklMzYwO1xyXG4gIHRoaXMuYWxwaGEgPSBNYXRoLm1heCgwLCAwLjYtdGhpcy5hZ2UpO1xyXG4gIHRoaXMub2Jqcy5mb3JFYWNoKChvYmosIGluZGV4LCBvYmpzKSA9PiB7XHJcblxyXG4gICAgLy8gTGlmZXRpbWVcclxuICAgIG9iai5saWZlICs9IGRlbHRhICogNTA7XHJcbiAgICBvYmouYWdlID0gKHRoaXMuaGVpZ2h0LW9iai55KS90aGlzLmhlaWdodDtcclxuICAgIGlmIChvYmouYWdlID49IDEuMCkgcmV0dXJuIG9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIFxyXG4gICAgLy8gR3JvdyB3aXRoIGFnZVxyXG4gICAgb2JqLnNpemUgPSAxKzAuNSpvYmouc2NhbGUqdGhpcy5zaXplKm9iai5hZ2U7XHJcblxyXG4gICAgLy8gUGh5c2ljcyBhbmQgZ3Jhdml0eVxyXG4gICAgbGV0IGxzaGlmdCA9IDE1Km9iai5hZ2U7XHJcbiAgICBsZXQgc2hpZnQgPSAzNjAgKiBpbmRleC9vYmpzLmxlbmd0aCArIHJhbmQucmFuZ2UoLWxzaGlmdCwgbHNoaWZ0KTtcclxuICAgIGxldCBsc3BlZWQgPSA0O1xyXG4gICAgbGV0IGZuID0gaW5kZXglMj09PTA/TWF0aC5zaW46TWF0aC5jb3M7XHJcbiAgICBsZXQgZHggPSAwLjEqKG9iai55LXRoaXMub3kpKmZuKChzaGlmdCt0aGlzLmFuZypsc3BlZWQpKk1hdGguUEkvMTgwKTtcclxuICAgIG9iai54ID0gdGhpcy5veCArIGR4O1xyXG4gICAgb2JqLnkgKz0gb2JqLmR5ICogZGVsdGE7XHJcbiAgICB0aGlzLmFnZSA9IE1hdGgubWF4KHRoaXMuYWdlLCBvYmouYWdlKTtcclxuICB9KTtcclxufTtcclxuQnViYmxlcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4KSB7XHJcbiAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5hbHBoYTtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCwgb2JqcykgPT4ge1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGBoc2woJHtvYmouY29sLmh9LCAke29iai5jb2wuc30lLCAke29iai5jb2wubH0lKWA7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iai54LCBvYmoueSk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKDAsIDAsIG9iai5zaXplLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEJ1YmJsZXM7IiwidmFyIHJuZyA9IHJlcXVpcmUoXCIuL3JuZ1wiKTtcclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcblxyXG52YXIgRXhwbG9zaW9uID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgbnVtOiAyMDAsIGRkOiAxMDAsIGh1ZTogMTIwLCBzaXplOiA1LCBsaWZldGltZTogMTAwLCBncmF2aXR5OiAyLCBkZDogMTAwfSk7XHJcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuICB0aGlzLm9ianMgPSBbXTtcclxuICBmb3IgKGxldCBpPTA7IGk8dGhpcy5udW07IGkrKykge1xyXG4gICAgbGV0IGFuZyA9IE1hdGguUEkqaS8odGhpcy5udW0tMSk7XHJcbiAgICB0aGlzLm9ianMucHVzaCh7XHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBsaWZlOiAwLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIGR4OiByYW5kLnJhbmdlKC10aGlzLmRkLCB0aGlzLmRkKSpNYXRoLmNvcyhhbmcpLFxyXG4gICAgICBkeTogcmFuZC5yYW5nZSgtdGhpcy5kZCwgdGhpcy5kZCkqTWF0aC5zaW4oYW5nKS00KnRoaXMuZGQsXHJcbiAgICAgIGNvbDoge2g6IHRoaXMuaHVlICsgcmFuZC5yYW5nZSgtMTAsIDEwKSwgczogODAsIGw6IDUwfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5FeHBsb3Npb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgsIG9ianMpID0+IHtcclxuXHJcbiAgICAvLyBMaWZldGltZVxyXG4gICAgb2JqLmxpZmUgKz0gZGVsdGEgKiA1MDtcclxuICAgIGlmIChvYmoubGlmZSA+IHRoaXMubGlmZXRpbWUpIG9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIFxyXG4gICAgLy8gRmFkZSB3aXRoIGFnZVxyXG4gICAgb2JqLmFscGhhID0gMS1vYmoubGlmZS90aGlzLmxpZmV0aW1lO1xyXG5cclxuICAgIC8vIFBoeXNpY3MgYW5kIGdyYXZpdHlcclxuICAgIG9iai5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICBvYmoueCArPSBvYmouZHggKiBkZWx0YTtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGRlbHRhO1xyXG5cclxuICB9KTtcclxufTtcclxuRXhwbG9zaW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcclxuICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9ianNbMF0uYWxwaGE7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsKCR7b2JqLmNvbC5ofSwgJHtvYmouY29sLnN9JSwgJHtvYmouY29sLmx9JSlgO1xyXG4gICAgY3R4LmZpbGxSZWN0KG9iai54LCBvYmoueSwgb2JqLnNpemUsIG9iai5zaXplKTtcclxuICB9KTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBFeHBsb3Npb247IiwidmFyIHJuZyA9IHJlcXVpcmUoXCIuL3JuZ1wiKTtcclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcblxyXG52YXIgRmlzaCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIHt4OiAwLCB5OjAsIG51bTogMSwgaHVlOiAxMjAsIHNpemU6IDUsIGxpZmV0aW1lOiAxMDAsIGdyYXZpdHk6IDIsIGRkOiAxMDB9KTtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIHRoaXMub2JqcyA9IFtdO1xyXG4gIGxldCBmID0gTWF0aC5zcXJ0KHRoaXMubnVtKSo1O1xyXG4gIGZvciAobGV0IGk9MDsgaTx0aGlzLm51bTsgaSsrKSB7XHJcbiAgICBsZXQgYW5nID0gTWF0aC5QSSppL3RoaXMubnVtO1xyXG4gICAgdGhpcy5vYmpzLnB1c2goe1xyXG4gICAgICB4OiB0aGlzLngrcmFuZC5yYW5nZSgtdGhpcy5zaXplKmYsIHRoaXMuc2l6ZSpmKSxcclxuICAgICAgeTogdGhpcy55K3JhbmQucmFuZ2UoLXRoaXMuc2l6ZSpmLCB0aGlzLnNpemUqZiksXHJcbiAgICAgIGxpZmU6IDAsXHJcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSpyYW5kLnJhbmdlKDEwLDMwKS8xMCxcclxuICAgICAgZHg6IHJhbmQucGljayhbMSwtMV0pKnJhbmQucmFuZ2UodGhpcy5kZC8yLCB0aGlzLmRkKSxcclxuICAgICAgZHk6IHJhbmQucmFuZ2UoLXRoaXMuZGQvNCwgdGhpcy5kZC80KSpNYXRoLnNpbihhbmcpLFxyXG4gICAgICBjb2w6IHtoOiB0aGlzLmh1ZSArIHJhbmQucmFuZ2UoLTEwLCAxMCksIHM6IDgwKyByYW5kLnJhbmdlKC0xMCwgMTApLCBsOiA1MCsgcmFuZC5yYW5nZSgtMTAsIDEwKX1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuRmlzaC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCwgb2JqcykgPT4ge1xyXG5cclxuICAgIC8vIExpZmV0aW1lXHJcbiAgICBvYmoubGlmZSArPSBkZWx0YSAqIDUwO1xyXG4gICAgaWYgKG9iai5saWZlID4gdGhpcy5saWZldGltZSkgb2Jqcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgXHJcbiAgICAvLyBQaHlzaWNzIGFuZCBncmF2aXR5XHJcbiAgICBvYmouZHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgb2JqLnggKz0gb2JqLmR4ICogZGVsdGE7XHJcbiAgICBvYmoueSArPSBvYmouZHkgKiBkZWx0YTtcclxuXHJcbiAgfSk7XHJcbn07XHJcbkZpc2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gIHRoaXMub2Jqcy5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGBoc2woJHtvYmouY29sLmh9LCAke29iai5jb2wuc30lLCAke29iai5jb2wubH0lKWA7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iai54ICsgb2JqLnNpemUvMiwgb2JqLnkgKyBvYmouc2l6ZS8yKTtcclxuICAgIGN0eC5zY2FsZShNYXRoLmFicyhvYmouZHgpL29iai5keCwgMSk7XHJcbiAgICBsZXQgdSA9IG9iai5zaXplO1xyXG4gICAgY2lyY2xlKC0zKnUsIC11LzMsIHUvNCwgMywgMSwgMjAsIDAsIDAsIDAsIDAuOCwgdHJ1ZSk7IC8vIFRhaWwgdG9wXHJcbiAgICBjaXJjbGUoLTMqdSwgdS8zLCB1LzQsIDMsIDEsIC0yMCwgMCwgMCwgMCwgMC44LCB0cnVlKTsgLy8gVGFpbCBib3R0b21cclxuICAgIGNpcmNsZSgwLCAwLCB1LCAzLCAxLCAwLCAwLCAwLCAwLCAxLCB0cnVlKTsgLy8gQm9keVxyXG4gICAgY2lyY2xlKHUvMiwgdS8zLCB1LzQsIDIsIDAuMiwgMCwgMCwgMCwgMTAsIDAuOCwgdHJ1ZSk7IC8vIEZpblxyXG4gICAgY2lyY2xlKHUvMiwgdS80LCB1LzQsIDIsIDAuMiwgMTAsIDAsIDAsIDEwLCAwLjgsIHRydWUpOyAvLyBGaW5cclxuICAgIGNpcmNsZSh1LzIsIHUvNiwgdS80LCAyLCAwLjIsIDIwLCAwLCAwLCAxMCwgMC44LCB0cnVlKTsgLy8gRmluXHJcbiAgICBjaXJjbGUoMip1LCAtdS80LCB1LzQsIDEsIDEsIDAsIDAsIDAsIDMwLCAxKTsgLy8gRXllXHJcbiAgICBjaXJjbGUoMip1LCAtdS80LCB1LzEwLCAxLCAxLCAwLCAwLCAwLCAtMTAwLCAxKTsgLy8gRXllXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgZnVuY3Rpb24gY2lyY2xlKHgsIHksIHIsIHcsIGgsIHJvdCwgaHVlLCBzYXQsIGx1bSwgYWxwaGE9MSwgc3Ryb2tlPWZhbHNlKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsYSgke29iai5jb2wuaCtodWV9LCAke29iai5jb2wucytzYXR9JSwgJHtvYmouY29sLmwrbHVtfSUsICR7YWxwaGF9KWA7XHJcbiAgICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2VTdHlsZSA9IGBoc2xhKCR7b2JqLmNvbC5oK2h1ZX0sICR7b2JqLmNvbC5zK3NhdH0lLCAke29iai5jb2wubC0yMH0lLCAkezAuNX0pYDtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgIGlmIChyb3QpIGN0eC5yb3RhdGUocm90Kk1hdGguUEkvMTgwKTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguc2NhbGUodywgaCk7XHJcbiAgICAgIGN0eC5hcmMoMCwgMCwgciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2UoKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBGaXNoOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGRwOiBjb25zb2xlLmxvZ1xyXG5cdCxkcDE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGFyZ3MgPSBbXTtcclxuXHRcdGZvciAobGV0IGEgaW4gYXJndW1lbnRzKSBhcmdzLnB1c2godHlwZW9mIGFyZ3VtZW50c1thXSA9PSBcIm51bWJlclwiP2FyZ3VtZW50c1thXS50b0ZpeGVkKDIpOmFyZ3VtZW50c1thXSlcclxuXHRcdGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG5cdH1cclxuXHQsJDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxyXG59OyIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG5cclxudmFyIE9jZWFuID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgd2lkdGg6IDAsIGhlaWdodDowLCBzcmM6IFwiYmcuanBnXCIsIGFuZzogMH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICB0aGlzLmltZy5zcmMgPSB0aGlzLnNyYztcclxufTtcclxuT2NlYW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgLy8gUm9jayBiYWNrZ3JvdW5kIGJhY2sgYW5kIGZvcnRoIGJ5IDEwcHhcclxuICB0aGlzLmFuZyA9IHRoaXMuYW5nID4gTWF0aC5QSSoyPzA6dGhpcy5hbmcrMC4wMTtcclxuICB0aGlzLnggPSAxMCpNYXRoLnNpbih0aGlzLmFuZyk7XHJcbiAgdGhpcy55ID0gMTAqTWF0aC5zaW4odGhpcy5hbmcpO1xyXG59O1xyXG5PY2Vhbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4KSB7XHJcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgMCwgMCwgdGhpcy5pbWcud2lkdGgsIHRoaXMuaW1nLmhlaWdodCwgLTEwK3RoaXMueCwgLTEwK3RoaXMueSwgdGhpcy53aWR0aCsyKjEwLCB0aGlzLmhlaWdodCsyKjEwKVxyXG4gIGxldCBncmQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy53aWR0aC81MCwgdGhpcy5oZWlnaHQvMyk7XHJcbiAgZ3JkLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMCwgMCwgMCwgMC4zMDApXCIpO1xyXG4gIGdyZC5hZGRDb2xvclN0b3AoMC4yLCBcInJnYmEoMjQsIDU4LCAxMjQsIDAuNjApXCIpO1xyXG4gIGdyZC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDQsIDIsIDI0LCAxKVwiKTtcclxuICBjdHguZmlsbFN0eWxlID0gZ3JkO1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gT2NlYW47IiwiLy8gSG9sZHMgbGFzdCBpdGVyYXRpb24gdGltZXN0YW1wLlxyXG52YXIgdGltZSA9IDA7XHJcblxyXG4vKipcclxuICogQ2FsbHMgYGZuYCBvbiBuZXh0IGZyYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm4ge2ludH0gVGhlIHJlcXVlc3QgSURcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiByYWYoZm4pIHtcclxuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgIHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICB2YXIgZWxhcHNlZCA9IG5vdyAtIHRpbWU7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiA5OTkpIHtcclxuICAgICAgZWxhcHNlZCA9IDEgLyA2MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsYXBzZWQgLz0gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lID0gbm93O1xyXG4gICAgZm4oZWxhcHNlZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxzIGBmbmAgb24gZXZlcnkgZnJhbWUgd2l0aCBgZWxhcHNlZGAgc2V0IHRvIHRoZSBlbGFwc2VkXHJcbiAgICogdGltZSBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7aW50fSBUaGUgcmVxdWVzdCBJRFxyXG4gICAqIEBhcGkgcHVibGljXHJcbiAgICovXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICByZXR1cm4gcmFmKGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xyXG4gICAgICBmbihlbGFwc2VkKTtcclxuICAgICAgcmFmKHRpY2spO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDYW5jZWxzIHRoZSBzcGVjaWZpZWQgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2ludH0gaWQgVGhlIHJlcXVlc3QgSURcclxuICAgKiBAYXBpIHB1YmxpY1xyXG4gICAqL1xyXG4gIHN0b3A6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWVkKSB7XHJcbiAgZnVuY3Rpb24gcmFuZG9tKCkge1xyXG4gICAgdmFyIHggPSBNYXRoLnNpbigwLjg3NjUxMTExNTk1OTI4MjggKyBzZWVkKyspICogMWU0XHJcbiAgICByZXR1cm4geCAtIE1hdGguZmxvb3IoeClcclxuICB9XHJcbiAgXHJcbiAgdmFyIHJuZyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGludGVnZXIgd2l0aGluIFswLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gW21heF1cclxuICAgICAqIEByZXR1cm4ge2ludH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGludDogZnVuY3Rpb24obWF4KSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSAqIChtYXggfHwgMHhmZmZmZmZmKSB8IDA7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBmbG9hdCB3aXRoaW4gWzAuMCwgMS4wKS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtmbG9hdH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGZsb2F0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHJhbmRvbSgpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgYm9vbGVhbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgYm9vbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSA+IDAuNTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbiBpbnRlZ2VyIHdpdGhpbiBbbWluLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gbWluXHJcbiAgICAgKiBAcGFyYW0gIHtpbnR9IG1heFxyXG4gICAgICogQHJldHVybiB7aW50fVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICAgIHJldHVybiBybmcuaW50KG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBQaWNrIGFuIGVsZW1lbnQgZnJvbSB0aGUgc291cmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge21peGVkW119IHNvdXJjZVxyXG4gICAgICogQHJldHVybiB7bWl4ZWR9XHJcbiAgICAgKiBAYXBpIHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBwaWNrOiBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHNvdXJjZVtybmcucmFuZ2UoMCwgc291cmNlLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBybmc7XHJcbn07XHJcbiJdfQ==
