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
    difficulty: 1,
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
  if (t===0)
    return g.entities.push(new Bubbles({x: x||rand.range(0, g.canvas.width), y: g.canvas.height, height: g.canvas.height, lifetime: 1200, gravity: -50, size:rand.range(3,10), num: rand.range(10,30), hue: rand.range(120, 260)}));
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let word = alphabet.charAt(rand.range(0, 23));
  g.entities.push(new Fish({
    x: x||rand.range(0, g.canvas.width),
    y: y||rand.range(0, g.canvas.height),
    width: g.canvas.width,
    lifetime: 2000, size:rand.range(12,18),
    num: 1,
    word: word,
    gravity: 0,
    dd: 50,
    hue: rand.range(0, 360)
  }));
};
function restart() {
  g.entities.length = 0;
  g.entities.push(new Ocean({width: g.canvas.width, height: g.canvas.height})); 
  for (let i=0; i<10; i++) spawn(0);
  for (let i=0; i<g.difficulty; i++) spawn(1);
}
function countFish() {
  return g.entities.reduce((n, e)=> {
    return n + (e instanceof Fish)?1:0
  }, 0);
}
loop.start(function(elapsed) {
  
  // Clear the screen
  g.ctx.fillStyle="white";
  g.ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
  
  g.ticks++;
  if (g.ticks%30===0) {
    spawn(0);
    if (countFish()<g.difficulty) spawn(1);
  }
  
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
  Object.assign(this, {x: 0, y:0, width:1, num: 1, word: "", hue: 120, size: 5, lifetime: 100, gravity: 2, dd: 100});
  Object.assign(this, options);
  this.objs = [];
  dp(this.width, this.x, Math.abs((this.width-this.x)/(this.width-this.x)))
  let f = Math.sqrt(this.num)*5;
  for (let i=0; i<this.num; i++) {
    let ang = Math.PI*i/this.num;
    this.objs.push({
      x: this.x+rand.range(-this.size*f, this.size*f),
      y: this.y+rand.range(-this.size*f, this.size*f),
      life: 0,
      size: this.size*rand.range(10,30)/10,
      dx: Math.abs((this.width-this.x)/(this.width-this.x))*rand.range(this.dd/2, this.dd),
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
    ctx.scale(Math.abs(obj.dx)/obj.dx, 1);
    ctx.fillStyle = "black";
    ctx.font = Math.round(obj.size*1.5)+"px Verdana";
    ctx.fillText(this.word, -u/2, u/2); // Word
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcVXNlcnNcXG1hcmNcXEdvb2dsZSBEcml2ZVxcV29ya1xcSmF2YVNjcmlwdFxcZ2FtZXNcXGZpc2gtcmVhZGVyXFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCIuL3NyYy9tYWluIiwiQzovTWFyYy93b3JrL0phdmFTY3JpcHQvZ2FtZXMvZmlzaC1yZWFkZXIvc3JjL2J1YmJsZXMuanMiLCJDOi9NYXJjL3dvcmsvSmF2YVNjcmlwdC9nYW1lcy9maXNoLXJlYWRlci9zcmMvZXhwbG9zaW9uLmpzIiwiQzovTWFyYy93b3JrL0phdmFTY3JpcHQvZ2FtZXMvZmlzaC1yZWFkZXIvc3JjL2Zpc2guanMiLCJDOi9NYXJjL3dvcmsvSmF2YVNjcmlwdC9nYW1lcy9maXNoLXJlYWRlci9zcmMvZnVuY3Rpb25zLmpzIiwiQzovTWFyYy93b3JrL0phdmFTY3JpcHQvZ2FtZXMvZmlzaC1yZWFkZXIvc3JjL29jZWFuLmpzIiwiQzovTWFyYy93b3JrL0phdmFTY3JpcHQvZ2FtZXMvZmlzaC1yZWFkZXIvc3JjL3JhZi5qcyIsIkM6L01hcmMvd29yay9KYXZhU2NyaXB0L2dhbWVzL2Zpc2gtcmVhZGVyL3NyYy9ybmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBsb29wID0gcmVxdWlyZShcIi4vcmFmXCIpO1xyXG5sZXQgcmFuZCA9IHJlcXVpcmUoXCIuL3JuZ1wiKShNYXRoLnJhbmRvbSgpKTtcclxubGV0IGYgPSByZXF1aXJlKFwiLi9mdW5jdGlvbnNcIik7XHJcbmxldCBFeHBsb3Npb24gPSByZXF1aXJlKFwiLi9leHBsb3Npb25cIik7XHJcbmxldCBGaXNoID0gcmVxdWlyZShcIi4vZmlzaFwiKTtcclxubGV0IEJ1YmJsZXMgPSByZXF1aXJlKFwiLi9idWJibGVzXCIpO1xyXG5sZXQgT2NlYW4gPSByZXF1aXJlKFwiLi9vY2VhblwiKTtcclxuXHJcbndpbmRvdy5kcD1mLmRwO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBcclxuICB3aW5kb3cuZyA9IHtcclxuICAgIHRpY2tzOiAwLFxyXG4gICAgZGlmZmljdWx0eTogMSxcclxuICB9O1xyXG4gIFxyXG4gIGcuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGcuY2FudmFzKTtcclxuICBnLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGluaXQoZS5jbGllbnRYLCBlLmNsaWVudFksIGUpKTtcclxuICBnLmNhbnZhcy53aWR0aD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7IC8vd2luZG93LnNjcmVlbi53aWR0aC9hdmFpbFdpZHRoXHJcbiAgZy5jYW52YXMuaGVpZ2h0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7IC8vYXZhaWxIZWlnaHRcclxuICBnLmN0eCA9IGcuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBcclxuICBnLmVudGl0aWVzID0gW107XHJcbiAgbGV0IG9zYyA9IGcub3NjID0gW107XHJcbiAgb3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbiAgb3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbiAgb3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbiAgXHJcbiAgc2V0SW50ZXJ2YWwoKCk9Pm9zY2lsbGF0ZShvc2NbMF0pLCAyMDAwKTtcclxuICBcclxuICByZXN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwYXduKHQsIHgsIHkpIHtcclxuICBvc2NpbGxhdGUoZy5vc2NbMV0pO1xyXG4gIGlmICh0PT09MClcclxuICAgIHJldHVybiBnLmVudGl0aWVzLnB1c2gobmV3IEJ1YmJsZXMoe3g6IHh8fHJhbmQucmFuZ2UoMCwgZy5jYW52YXMud2lkdGgpLCB5OiBnLmNhbnZhcy5oZWlnaHQsIGhlaWdodDogZy5jYW52YXMuaGVpZ2h0LCBsaWZldGltZTogMTIwMCwgZ3Jhdml0eTogLTUwLCBzaXplOnJhbmQucmFuZ2UoMywxMCksIG51bTogcmFuZC5yYW5nZSgxMCwzMCksIGh1ZTogcmFuZC5yYW5nZSgxMjAsIDI2MCl9KSk7XHJcbiAgbGV0IGFscGhhYmV0ID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xyXG4gIGxldCB3b3JkID0gYWxwaGFiZXQuY2hhckF0KHJhbmQucmFuZ2UoMCwgMjMpKTtcclxuICBnLmVudGl0aWVzLnB1c2gobmV3IEZpc2goe1xyXG4gICAgeDogeHx8cmFuZC5yYW5nZSgwLCBnLmNhbnZhcy53aWR0aCksXHJcbiAgICB5OiB5fHxyYW5kLnJhbmdlKDAsIGcuY2FudmFzLmhlaWdodCksXHJcbiAgICB3aWR0aDogZy5jYW52YXMud2lkdGgsXHJcbiAgICBsaWZldGltZTogMjAwMCwgc2l6ZTpyYW5kLnJhbmdlKDEyLDE4KSxcclxuICAgIG51bTogMSxcclxuICAgIHdvcmQ6IHdvcmQsXHJcbiAgICBncmF2aXR5OiAwLFxyXG4gICAgZGQ6IDUwLFxyXG4gICAgaHVlOiByYW5kLnJhbmdlKDAsIDM2MClcclxuICB9KSk7XHJcbn07XHJcbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XHJcbiAgZy5lbnRpdGllcy5sZW5ndGggPSAwO1xyXG4gIGcuZW50aXRpZXMucHVzaChuZXcgT2NlYW4oe3dpZHRoOiBnLmNhbnZhcy53aWR0aCwgaGVpZ2h0OiBnLmNhbnZhcy5oZWlnaHR9KSk7IFxyXG4gIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSBzcGF3bigwKTtcclxuICBmb3IgKGxldCBpPTA7IGk8Zy5kaWZmaWN1bHR5OyBpKyspIHNwYXduKDEpO1xyXG59XHJcbmZ1bmN0aW9uIGNvdW50RmlzaCgpIHtcclxuICByZXR1cm4gZy5lbnRpdGllcy5yZWR1Y2UoKG4sIGUpPT4ge1xyXG4gICAgcmV0dXJuIG4gKyAoZSBpbnN0YW5jZW9mIEZpc2gpPzE6MFxyXG4gIH0sIDApO1xyXG59XHJcbmxvb3Auc3RhcnQoZnVuY3Rpb24oZWxhcHNlZCkge1xyXG4gIFxyXG4gIC8vIENsZWFyIHRoZSBzY3JlZW5cclxuICBnLmN0eC5maWxsU3R5bGU9XCJ3aGl0ZVwiO1xyXG4gIGcuY3R4LmZpbGxSZWN0KDAsIDAsIGcuY2FudmFzLndpZHRoLCBnLmNhbnZhcy5oZWlnaHQpO1xyXG4gIFxyXG4gIGcudGlja3MrKztcclxuICBpZiAoZy50aWNrcyUzMD09PTApIHtcclxuICAgIHNwYXduKDApO1xyXG4gICAgaWYgKGNvdW50RmlzaCgpPGcuZGlmZmljdWx0eSkgc3Bhd24oMSk7XHJcbiAgfVxyXG4gIFxyXG4gIG9zY2lsbGF0ZShnLm9zY1syXSlcclxuICBcclxuICBnLmVudGl0aWVzLmZvckVhY2goKGVudCwgaW5kZXgpPT57XHJcbiAgICBlbnQudXBkYXRlKGVsYXBzZWQpO1xyXG4gICAgaWYgKGVudC5vYmpzICYmIGVudC5vYmpzLmxlbmd0aD09PTApIHJldHVybiBnLmVudGl0aWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBnLmN0eC5zYXZlKCk7XHJcbiAgICBlbnQucmVuZGVyKGcuY3R4KTtcclxuICAgIGcuY3R4LnJlc3RvcmUoKTtcclxuICB9KTtcclxuICBcclxufSk7XHJcblxyXG5mdW5jdGlvbiBvc2NpbGxhdGUobykge1xyXG4gIG8uYSA9ICgoMTAqKytvLmEpJTEwKS83O1xyXG4gIG8ueD1NYXRoLmNvcyhvLmEpO1xyXG4gIG8ueT1NYXRoLnNpbihvLmEpO1xyXG59XHJcblxyXG5pbml0KCk7IiwidmFyIHJuZyA9IHJlcXVpcmUoXCIuL3JuZ1wiKTtcclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcbnZhciBkcCA9IGNvbnNvbGUubG9nO1xyXG5cclxudmFyIEJ1YmJsZXMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7eDogMCwgeTowLCBoZWlnaHQ6IDEsIG51bTogcmFuZC5yYW5nZSgxMCwgNDApLCBodWU6IDI0MCwgc2l6ZTogMjUsIGxpZmV0aW1lOiAxMTAwLCBncmF2aXR5OiAtMjB9KTtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIHRoaXMub3ggPSB0aGlzLng7XHJcbiAgdGhpcy5veSA9IHRoaXMueTtcclxuICB0aGlzLmFuZyA9IDA7XHJcbiAgdGhpcy5hZ2UgPSAwO1xyXG4gIHRoaXMub2JqcyA9IFtdO1xyXG4gIGZvciAobGV0IGk9MDsgaTx0aGlzLm51bTsgaSsrKSB7XHJcbiAgICBsZXQgYW5nID0gTWF0aC5QSSppLyh0aGlzLm51bS0xKTtcclxuICAgIGxldCBkeSA9IHJhbmQucmFuZ2UoLTMwLCAzMCk7XHJcbiAgICBsZXQgZHN5ID0gMS0oZHkrMzApLzYwO1xyXG4gICAgdGhpcy5vYmpzLnB1c2goe1xyXG4gICAgICB4OiB0aGlzLnggKyByYW5kLnJhbmdlKC0zKnRoaXMuc2l6ZSwgMyp0aGlzLnNpemUpLFxyXG4gICAgICB5OiB0aGlzLnkgKyBkeSxcclxuICAgICAgZHk6IHRoaXMuZ3Jhdml0eSArIGR5KmRzeSxcclxuICAgICAgbGlmZTogMCxcclxuICAgICAgc2l6ZTogdGhpcy5zaXplICogZHN5LFxyXG4gICAgICBzY2FsZTogcmFuZC5yYW5nZSgxLDMpLFxyXG4gICAgICBjb2w6IHtoOiB0aGlzLmh1ZSArIHJhbmQucmFuZ2UoLTEwLCAxMCksIHM6IDMwLCBsOiA4MH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuQnViYmxlcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcclxuICB0aGlzLmFuZyA9ICgrK3RoaXMuYW5nKSUzNjA7XHJcbiAgdGhpcy5hbHBoYSA9IE1hdGgubWF4KDAsIDAuNi10aGlzLmFnZSk7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgsIG9ianMpID0+IHtcclxuXHJcbiAgICAvLyBMaWZldGltZVxyXG4gICAgb2JqLmxpZmUgKz0gZGVsdGEgKiA1MDtcclxuICAgIG9iai5hZ2UgPSAodGhpcy5oZWlnaHQtb2JqLnkpL3RoaXMuaGVpZ2h0O1xyXG4gICAgaWYgKG9iai5hZ2UgPj0gMS4wKSByZXR1cm4gb2Jqcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgXHJcbiAgICAvLyBHcm93IHdpdGggYWdlXHJcbiAgICBvYmouc2l6ZSA9IDErMC41Km9iai5zY2FsZSp0aGlzLnNpemUqb2JqLmFnZTtcclxuXHJcbiAgICAvLyBQaHlzaWNzIGFuZCBncmF2aXR5XHJcbiAgICBsZXQgbHNoaWZ0ID0gMTUqb2JqLmFnZTtcclxuICAgIGxldCBzaGlmdCA9IDM2MCAqIGluZGV4L29ianMubGVuZ3RoICsgcmFuZC5yYW5nZSgtbHNoaWZ0LCBsc2hpZnQpO1xyXG4gICAgbGV0IGxzcGVlZCA9IDQ7XHJcbiAgICBsZXQgZm4gPSBpbmRleCUyPT09MD9NYXRoLnNpbjpNYXRoLmNvcztcclxuICAgIGxldCBkeCA9IDAuMSoob2JqLnktdGhpcy5veSkqZm4oKHNoaWZ0K3RoaXMuYW5nKmxzcGVlZCkqTWF0aC5QSS8xODApO1xyXG4gICAgb2JqLnggPSB0aGlzLm94ICsgZHg7XHJcbiAgICBvYmoueSArPSBvYmouZHkgKiBkZWx0YTtcclxuICAgIHRoaXMuYWdlID0gTWF0aC5tYXgodGhpcy5hZ2UsIG9iai5hZ2UpO1xyXG4gIH0pO1xyXG59O1xyXG5CdWJibGVzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcclxuICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmFscGhhO1xyXG4gIHRoaXMub2Jqcy5mb3JFYWNoKChvYmosIGluZGV4LCBvYmpzKSA9PiB7XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYGhzbCgke29iai5jb2wuaH0sICR7b2JqLmNvbC5zfSUsICR7b2JqLmNvbC5sfSUpYDtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqLngsIG9iai55KTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoMCwgMCwgb2JqLnNpemUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfSk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gQnViYmxlczsiLCJ2YXIgcm5nID0gcmVxdWlyZShcIi4vcm5nXCIpO1xyXG52YXIgcmFuZCA9IHJuZyhNYXRoLnJhbmRvbSgpKTtcclxuXHJcbnZhciBFeHBsb3Npb24gPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7eDogMCwgeTowLCBudW06IDIwMCwgZGQ6IDEwMCwgaHVlOiAxMjAsIHNpemU6IDUsIGxpZmV0aW1lOiAxMDAsIGdyYXZpdHk6IDIsIGRkOiAxMDB9KTtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIHRoaXMub2JqcyA9IFtdO1xyXG4gIGZvciAobGV0IGk9MDsgaTx0aGlzLm51bTsgaSsrKSB7XHJcbiAgICBsZXQgYW5nID0gTWF0aC5QSSppLyh0aGlzLm51bS0xKTtcclxuICAgIHRoaXMub2Jqcy5wdXNoKHtcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIGxpZmU6IDAsXHJcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgZHg6IHJhbmQucmFuZ2UoLXRoaXMuZGQsIHRoaXMuZGQpKk1hdGguY29zKGFuZyksXHJcbiAgICAgIGR5OiByYW5kLnJhbmdlKC10aGlzLmRkLCB0aGlzLmRkKSpNYXRoLnNpbihhbmcpLTQqdGhpcy5kZCxcclxuICAgICAgY29sOiB7aDogdGhpcy5odWUgKyByYW5kLnJhbmdlKC0xMCwgMTApLCBzOiA4MCwgbDogNTB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbkV4cGxvc2lvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCwgb2JqcykgPT4ge1xyXG5cclxuICAgIC8vIExpZmV0aW1lXHJcbiAgICBvYmoubGlmZSArPSBkZWx0YSAqIDUwO1xyXG4gICAgaWYgKG9iai5saWZlID4gdGhpcy5saWZldGltZSkgb2Jqcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgXHJcbiAgICAvLyBGYWRlIHdpdGggYWdlXHJcbiAgICBvYmouYWxwaGEgPSAxLW9iai5saWZlL3RoaXMubGlmZXRpbWU7XHJcblxyXG4gICAgLy8gUGh5c2ljcyBhbmQgZ3Jhdml0eVxyXG4gICAgb2JqLmR5ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgIG9iai54ICs9IG9iai5keCAqIGRlbHRhO1xyXG4gICAgb2JqLnkgKz0gb2JqLmR5ICogZGVsdGE7XHJcblxyXG4gIH0pO1xyXG59O1xyXG5FeHBsb3Npb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub2Jqc1swXS5hbHBoYTtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGBoc2woJHtvYmouY29sLmh9LCAke29iai5jb2wuc30lLCAke29iai5jb2wubH0lKWA7XHJcbiAgICBjdHguZmlsbFJlY3Qob2JqLngsIG9iai55LCBvYmouc2l6ZSwgb2JqLnNpemUpO1xyXG4gIH0pO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEV4cGxvc2lvbjsiLCJ2YXIgcm5nID0gcmVxdWlyZShcIi4vcm5nXCIpO1xyXG52YXIgcmFuZCA9IHJuZyhNYXRoLnJhbmRvbSgpKTtcclxuXHJcbnZhciBGaXNoID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgd2lkdGg6MSwgbnVtOiAxLCB3b3JkOiBcIlwiLCBodWU6IDEyMCwgc2l6ZTogNSwgbGlmZXRpbWU6IDEwMCwgZ3Jhdml0eTogMiwgZGQ6IDEwMH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5vYmpzID0gW107XHJcbiAgZHAodGhpcy53aWR0aCwgdGhpcy54LCBNYXRoLmFicygodGhpcy53aWR0aC10aGlzLngpLyh0aGlzLndpZHRoLXRoaXMueCkpKVxyXG4gIGxldCBmID0gTWF0aC5zcXJ0KHRoaXMubnVtKSo1O1xyXG4gIGZvciAobGV0IGk9MDsgaTx0aGlzLm51bTsgaSsrKSB7XHJcbiAgICBsZXQgYW5nID0gTWF0aC5QSSppL3RoaXMubnVtO1xyXG4gICAgdGhpcy5vYmpzLnB1c2goe1xyXG4gICAgICB4OiB0aGlzLngrcmFuZC5yYW5nZSgtdGhpcy5zaXplKmYsIHRoaXMuc2l6ZSpmKSxcclxuICAgICAgeTogdGhpcy55K3JhbmQucmFuZ2UoLXRoaXMuc2l6ZSpmLCB0aGlzLnNpemUqZiksXHJcbiAgICAgIGxpZmU6IDAsXHJcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSpyYW5kLnJhbmdlKDEwLDMwKS8xMCxcclxuICAgICAgZHg6IE1hdGguYWJzKCh0aGlzLndpZHRoLXRoaXMueCkvKHRoaXMud2lkdGgtdGhpcy54KSkqcmFuZC5yYW5nZSh0aGlzLmRkLzIsIHRoaXMuZGQpLFxyXG4gICAgICBkeTogcmFuZC5yYW5nZSgtdGhpcy5kZC80LCB0aGlzLmRkLzQpKk1hdGguc2luKGFuZyksXHJcbiAgICAgIGNvbDoge2g6IHRoaXMuaHVlICsgcmFuZC5yYW5nZSgtMTAsIDEwKSwgczogODArIHJhbmQucmFuZ2UoLTEwLCAxMCksIGw6IDUwKyByYW5kLnJhbmdlKC0xMCwgMTApfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5GaXNoLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xyXG4gIHRoaXMub2Jqcy5mb3JFYWNoKChvYmosIGluZGV4LCBvYmpzKSA9PiB7XHJcblxyXG4gICAgLy8gTGlmZXRpbWVcclxuICAgIG9iai5saWZlICs9IGRlbHRhICogNTA7XHJcbiAgICBpZiAob2JqLmxpZmUgPiB0aGlzLmxpZmV0aW1lKSBvYmpzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBcclxuICAgIC8vIFBoeXNpY3MgYW5kIGdyYXZpdHlcclxuICAgIG9iai5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICBvYmoueCArPSBvYmouZHggKiBkZWx0YTtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGRlbHRhO1xyXG5cclxuICB9KTtcclxufTtcclxuRmlzaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4KSB7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke29iai5jb2wuaH0sICR7b2JqLmNvbC5zfSUsICR7b2JqLmNvbC5sfSUpYDtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqLnggKyBvYmouc2l6ZS8yLCBvYmoueSArIG9iai5zaXplLzIpO1xyXG4gICAgY3R4LnNjYWxlKE1hdGguYWJzKG9iai5keCkvb2JqLmR4LCAxKTtcclxuICAgIGxldCB1ID0gb2JqLnNpemU7XHJcbiAgICBjaXJjbGUoLTMqdSwgLXUvMywgdS80LCAzLCAxLCAyMCwgMCwgMCwgMCwgMC44LCB0cnVlKTsgLy8gVGFpbCB0b3BcclxuICAgIGNpcmNsZSgtMyp1LCB1LzMsIHUvNCwgMywgMSwgLTIwLCAwLCAwLCAwLCAwLjgsIHRydWUpOyAvLyBUYWlsIGJvdHRvbVxyXG4gICAgY2lyY2xlKDAsIDAsIHUsIDMsIDEsIDAsIDAsIDAsIDAsIDEsIHRydWUpOyAvLyBCb2R5XHJcbiAgICBjaXJjbGUodS8yLCB1LzMsIHUvNCwgMiwgMC4yLCAwLCAwLCAwLCAxMCwgMC44LCB0cnVlKTsgLy8gRmluXHJcbiAgICBjaXJjbGUodS8yLCB1LzQsIHUvNCwgMiwgMC4yLCAxMCwgMCwgMCwgMTAsIDAuOCwgdHJ1ZSk7IC8vIEZpblxyXG4gICAgY2lyY2xlKHUvMiwgdS82LCB1LzQsIDIsIDAuMiwgMjAsIDAsIDAsIDEwLCAwLjgsIHRydWUpOyAvLyBGaW5cclxuICAgIGNpcmNsZSgyKnUsIC11LzQsIHUvNCwgMSwgMSwgMCwgMCwgMCwgMzAsIDEpOyAvLyBFeWVcclxuICAgIGNpcmNsZSgyKnUsIC11LzQsIHUvMTAsIDEsIDEsIDAsIDAsIDAsIC0xMDAsIDEpOyAvLyBFeWVcclxuICAgIGN0eC5zY2FsZShNYXRoLmFicyhvYmouZHgpL29iai5keCwgMSk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZvbnQgPSBNYXRoLnJvdW5kKG9iai5zaXplKjEuNSkrXCJweCBWZXJkYW5hXCI7XHJcbiAgICBjdHguZmlsbFRleHQodGhpcy53b3JkLCAtdS8yLCB1LzIpOyAvLyBXb3JkXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgZnVuY3Rpb24gY2lyY2xlKHgsIHksIHIsIHcsIGgsIHJvdCwgaHVlLCBzYXQsIGx1bSwgYWxwaGE9MSwgc3Ryb2tlPWZhbHNlKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsYSgke29iai5jb2wuaCtodWV9LCAke29iai5jb2wucytzYXR9JSwgJHtvYmouY29sLmwrbHVtfSUsICR7YWxwaGF9KWA7XHJcbiAgICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2VTdHlsZSA9IGBoc2xhKCR7b2JqLmNvbC5oK2h1ZX0sICR7b2JqLmNvbC5zK3NhdH0lLCAke29iai5jb2wubC0yMH0lLCAkezAuNX0pYDtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgIGlmIChyb3QpIGN0eC5yb3RhdGUocm90Kk1hdGguUEkvMTgwKTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguc2NhbGUodywgaCk7XHJcbiAgICAgIGN0eC5hcmMoMCwgMCwgciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2UoKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBGaXNoOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGRwOiBjb25zb2xlLmxvZ1xyXG5cdCxkcDE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGFyZ3MgPSBbXTtcclxuXHRcdGZvciAobGV0IGEgaW4gYXJndW1lbnRzKSBhcmdzLnB1c2godHlwZW9mIGFyZ3VtZW50c1thXSA9PSBcIm51bWJlclwiP2FyZ3VtZW50c1thXS50b0ZpeGVkKDIpOmFyZ3VtZW50c1thXSlcclxuXHRcdGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG5cdH1cclxuXHQsJDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxyXG59OyIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG5cclxudmFyIE9jZWFuID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgd2lkdGg6IDAsIGhlaWdodDowLCBzcmM6IFwiYmcuanBnXCIsIGFuZzogMH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICB0aGlzLmltZy5zcmMgPSB0aGlzLnNyYztcclxufTtcclxuT2NlYW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgLy8gUm9jayBiYWNrZ3JvdW5kIGJhY2sgYW5kIGZvcnRoIGJ5IDEwcHhcclxuICB0aGlzLmFuZyA9IHRoaXMuYW5nID4gTWF0aC5QSSoyPzA6dGhpcy5hbmcrMC4wMTtcclxuICB0aGlzLnggPSAxMCpNYXRoLnNpbih0aGlzLmFuZyk7XHJcbiAgdGhpcy55ID0gMTAqTWF0aC5zaW4odGhpcy5hbmcpO1xyXG59O1xyXG5PY2Vhbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4KSB7XHJcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgMCwgMCwgdGhpcy5pbWcud2lkdGgsIHRoaXMuaW1nLmhlaWdodCwgLTEwK3RoaXMueCwgLTEwK3RoaXMueSwgdGhpcy53aWR0aCsyKjEwLCB0aGlzLmhlaWdodCsyKjEwKVxyXG4gIGxldCBncmQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy53aWR0aC81MCwgdGhpcy5oZWlnaHQvMyk7XHJcbiAgZ3JkLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMCwgMCwgMCwgMC4zMDApXCIpO1xyXG4gIGdyZC5hZGRDb2xvclN0b3AoMC4yLCBcInJnYmEoMjQsIDU4LCAxMjQsIDAuNjApXCIpO1xyXG4gIGdyZC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDQsIDIsIDI0LCAxKVwiKTtcclxuICBjdHguZmlsbFN0eWxlID0gZ3JkO1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gT2NlYW47IiwiLy8gSG9sZHMgbGFzdCBpdGVyYXRpb24gdGltZXN0YW1wLlxyXG52YXIgdGltZSA9IDA7XHJcblxyXG4vKipcclxuICogQ2FsbHMgYGZuYCBvbiBuZXh0IGZyYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm4ge2ludH0gVGhlIHJlcXVlc3QgSURcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiByYWYoZm4pIHtcclxuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgIHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICB2YXIgZWxhcHNlZCA9IG5vdyAtIHRpbWU7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiA5OTkpIHtcclxuICAgICAgZWxhcHNlZCA9IDEgLyA2MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsYXBzZWQgLz0gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lID0gbm93O1xyXG4gICAgZm4oZWxhcHNlZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxzIGBmbmAgb24gZXZlcnkgZnJhbWUgd2l0aCBgZWxhcHNlZGAgc2V0IHRvIHRoZSBlbGFwc2VkXHJcbiAgICogdGltZSBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7aW50fSBUaGUgcmVxdWVzdCBJRFxyXG4gICAqIEBhcGkgcHVibGljXHJcbiAgICovXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICByZXR1cm4gcmFmKGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xyXG4gICAgICBmbihlbGFwc2VkKTtcclxuICAgICAgcmFmKHRpY2spO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDYW5jZWxzIHRoZSBzcGVjaWZpZWQgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2ludH0gaWQgVGhlIHJlcXVlc3QgSURcclxuICAgKiBAYXBpIHB1YmxpY1xyXG4gICAqL1xyXG4gIHN0b3A6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWVkKSB7XHJcbiAgZnVuY3Rpb24gcmFuZG9tKCkge1xyXG4gICAgdmFyIHggPSBNYXRoLnNpbigwLjg3NjUxMTExNTk1OTI4MjggKyBzZWVkKyspICogMWU0XHJcbiAgICByZXR1cm4geCAtIE1hdGguZmxvb3IoeClcclxuICB9XHJcbiAgXHJcbiAgdmFyIHJuZyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGludGVnZXIgd2l0aGluIFswLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gW21heF1cclxuICAgICAqIEByZXR1cm4ge2ludH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGludDogZnVuY3Rpb24obWF4KSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSAqIChtYXggfHwgMHhmZmZmZmZmKSB8IDA7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBmbG9hdCB3aXRoaW4gWzAuMCwgMS4wKS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtmbG9hdH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGZsb2F0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHJhbmRvbSgpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgYm9vbGVhbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgYm9vbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSA+IDAuNTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbiBpbnRlZ2VyIHdpdGhpbiBbbWluLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gbWluXHJcbiAgICAgKiBAcGFyYW0gIHtpbnR9IG1heFxyXG4gICAgICogQHJldHVybiB7aW50fVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICAgIHJldHVybiBybmcuaW50KG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBQaWNrIGFuIGVsZW1lbnQgZnJvbSB0aGUgc291cmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge21peGVkW119IHNvdXJjZVxyXG4gICAgICogQHJldHVybiB7bWl4ZWR9XHJcbiAgICAgKiBAYXBpIHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBwaWNrOiBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHNvdXJjZVtybmcucmFuZ2UoMCwgc291cmNlLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBybmc7XHJcbn07XHJcbiJdfQ==
