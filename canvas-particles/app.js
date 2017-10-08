(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var raf = require("./raf");
var rng = require("./rng");
var f = require("./functions");
var Explosion = require("./explosion");
var Fish = require("./fish");
var Bubbles = require("./bubbles");
var Ocean = require("./ocean");

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width=document.documentElement.clientWidth; //window.screen.width/availWidth
canvas.height=document.documentElement.clientHeight; //availHeight
var ctx = canvas.getContext("2d");

var rand = rng(Math.random());
var dp=f.dp;
var g = window.g = {
  ticks: 0,
};
var objs = g.objs = [];
var osc = g.osc = [];
osc.push({a:rand.float(1)})
osc.push({a:rand.float(1)})
osc.push({a:rand.float(1)})
let gravity = g.gravity = {l:100, x:canvas.width/2, y:canvas.height/2, f:10000, ans:0.01, d:1};
oscillate(osc[0]);
entities=[];
entities.push(new Ocean({width: canvas.width, height: canvas.height}));
function init(x, y, e) {
  //if (rand.pick([true, false]))
    //entities.push(new Explosion({x: y||canvas.width/2, y: canvas.height/2, hue: rand.range(0, 360)}));
  //else
  let makeFish = (e && e.ctrlKey) || rand.pick([false, false, false, true]);
  if (makeFish)
    entities.push(new Fish({x: x||rand.range(0, canvas.width/5), y: y||rand.range(0, canvas.height), lifetime: 2000, size:rand.range(1,9), num: rand.range(1,30), gravity: 0, dd: 50, hue: rand.range(0, 360)}));
  else
    entities.push(new Bubbles({x: x||rand.range(0, canvas.width), y: canvas.height, lifetime: 1200, gravity: -50, size:rand.range(3,10), num: rand.range(10,30), hue: rand.range(120, 260)}));
};for (let i=0; i<10; i++) init();
//createBalls();setInterval(()=>createBalls(), 1500)
setInterval(()=>oscillate(osc[0]), 2000)
canvas.addEventListener("click", function(e) {
  init(e.clientX, e.clientY, e);
});


function oscillate(o) {
  o.a = ((10*++o.a)%10)/7;
  o.x=Math.cos(o.a);
  o.y=Math.sin(o.a);
}
function createBalls(o) {
  if (objs.length>1000) return;
  o = o||{};
  oscillate(osc[1])
  
  o.x = o.x||canvas.width/2;//+rand.range(-canvas.width/4, canvas.width/4);
  o.y = o.y||canvas.height/2;//rand.int(canvas.height);
  
  o.hue = o.hue || {
    h: osc[0].a*360 // Hue
    ,s: rand.range(50, 100) // Saturation
    ,l: rand.range(50, 100)
  };
  // Size
  o.sr = rand.range(4,36);
  o.spread = {x: rand.range(150, canvas.width), y: rand.range(50, canvas.height/2)};
  o.scale = {x: osc[1].x, y: osc[1].y};
  o.s = o.s||o.sr*osc[0].a;
  
  o.num = o.num||osc[1].a*600;
  o.rot = o.rot||rand.pick([true, false]);
  o.type = o.type||osc[1].a>0.5?"r":"o";
  o.ddx = rand.pick([-100,0,100]);//(Math.round(osc[0].a*10)%2===0)?100:0;
  for (var i = 0; i < o.num; i++) {
    let a = i*360/o.num;
    objs.push({
      x: o.x+o.spread.x*Math.sin(a*Math.PI)
      ,y: o.y+o.spread.y*Math.cos(o.scale.y*o.s*i*Math.PI/180)
      ,size: o.s
      ,scale: o.scale
      ,g: Math.sign(o.ddx)
      ,dx: o.ddx===0?rand.range(-110, 110):0
      ,dy: o.ddx===0?rand.range(-110, 110):0
      ,lifetime: rand.range(250, 300)
      ,lifecount: 0
      ,rot: o.rot
      ,type: o.type
      ,hue: o.hue
    });
  }
}

raf.start(function(elapsed) {
  // Clear the screen
  ctx.fillStyle="white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  g.ticks++;
  if (g.ticks%30===0) init();

  oscillate(osc[2])
  if ((100*osc[0].a)%3===0) {}
  if (osc[0].a>0.7) {
  //ctx.fillStyle="red";ctx.fillRect(gravity.x, gravity.y, 10, 10);
  if (osc[0].a>0.5) gravity.ans = rand.pick([0.001, 0.01, 0.1]);
  gravity.ang = gravity.ang>0?gravity.ang+gravity.ans:gravity.ans;
  gravity.x = canvas.width/2+gravity.l*Math.cos(gravity.ang);
  gravity.y =canvas.height/2+gravity.l*Math.sin(gravity.ang); 
  }

  objs.forEach(function(obj, index, object) {
    return
    // Lifetime
    obj.lifecount += elapsed * 50;
    obj.alpha = 1-obj.lifecount/obj.lifetime;
    
    // Kill
    if (obj.lifecount>obj.lifetime) object.splice(index, 1);
    if (obj.lifecount>obj.lifetime/2) obj.g=rand.pick([-1,0,1]);
    
    // Gravity
    if (obj.g!==0) {
      let [dx, dy] = [gravity.x - obj.x, gravity.y - obj.y];
      let dr = Math.max(10, Math.sqrt(dx**2/1000 + dy**2/1000));
      let [ax, ay] = [dx/Math.abs(dx), dy/Math.abs(dy)];
      //obj.size = dr;
      obj.dx += obj.g * elapsed * ax * gravity.f / dr**2;
      obj.dy += obj.g * elapsed * ay * gravity.f / dr**2;
    }
    let max = {x: 0.5+200*osc[0].x/2, y: 0.5+200*osc[0].x/2};
    obj.dx = obj.dx>0?Math.min(max.x, obj.dx):Math.max(-max.x, obj.dx);
    obj.dy = obj.dy>0?Math.min(max.y, obj.dy):Math.max(-max.y, obj.dy);
    
    // Handle collision against the canvas's edges
    if (osc[0].x>0.5) if (obj.x - obj.size < 0 && obj.dx < 0 || obj.x + obj.size > canvas.width && obj.dx > 0) obj.dx = -obj.dx * 0.7;
    if (osc[0].y>0.5) if (obj.y - obj.size < 0 && obj.dy < 0 || obj.y + obj.size > canvas.height && obj.dy > 0) obj.dy = -obj.dy * 0.7;

    // Update obj position
    obj.x += obj.dx * elapsed;
    obj.y += obj.dy * elapsed;

    // Transparency
    ctx.globalAlpha = obj.alpha;
    
    // Color
    if (osc[0].a>0.5 || obj.x<0) obj.hue.h = 360*obj.scale.x; else obj.hue.h = 360*obj.x/canvas.width;
    ctx.fillStyle = `hsl(${obj.hue.h}, ${obj.hue.s}%, ${obj.hue.l}%)`;
    
    // Scale
    obj.width = obj.size*obj.scale.x;
    obj.height = obj.size*obj.scale.y;
    
    ctx.save();
    ctx.translate(obj.x + obj.width/2, obj.y + obj.height/2);
    if (obj.rot) ctx.rotate(720*obj.alpha*Math.PI/180);
    //if (obj.scale) ctx.scale(obj.scale.x, obj.scale.y);
    // Shape
    if (obj.type==="o") {
      ctx.beginPath();
      ctx.arc(0, 0, obj.size, 0, Math.PI * 2, true);
      ctx.arc(obj.size/2, 0, obj.size, 0, Math.PI * 2, true);
      ctx.arc(obj.size, 0, obj.size, 0, Math.PI * 2, true);
      ctx.arc(obj.size*3/2, 0, obj.size, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.fillRect(0, 0, obj.width, obj.height);
      ctx.fillRect(-obj.height/2, -obj.width/2, obj.height, obj.width);
      //ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
    }
    ctx.restore();
  });

  entities.forEach((ent, index)=>{
    ent.update(elapsed);
    if (ent.objs && ent.objs.length===0) return entities.splice(index, 1);
    ctx.save();
    ent.render(ctx);
    ctx.restore();
  });
});

},{"./bubbles":2,"./explosion":3,"./fish":4,"./functions":5,"./ocean":6,"./raf":7,"./rng":8}],2:[function(require,module,exports){
var rng = require("./rng");
var rand = rng(Math.random());
var dp = console.log;

var Bubbles = function(options) {
  Object.assign(this, {x: 0, y:0, num: rand.range(10, 40), hue: 240, size: 25, lifetime: 1100, gravity: -20});
  Object.assign(this, options);
  this.ox = this.x;
  this.oy = this.y;
  this.ang = 0;
  this.objs = [];
  for (let i=0; i<this.num; i++) {
    let ang = Math.PI*i/(this.num-1);
    this.objs.push({
      x: this.x + rand.range(0, this.size),
      y: this.y + rand.range(0, this.size*3),
      dy: this.gravity + rand.range(-30, 30),
      life: 0,
      size: this.size,
      scale: rand.range(1,3),
      col: {h: this.hue + rand.range(-10, 10), s: 30, l: 80}
    });
  }
};
Bubbles.prototype.update = function(delta) {
  this.ang = (++this.ang)%360;
  this.alpha = 0.8-this.objs[0].life/this.lifetime;
  this.objs.forEach((obj, index, objs) => {

    // Lifetime
    obj.life += delta * 50;
    if (obj.life > this.lifetime) objs.splice(index, 1);
    
    // Grow and fade with age
    obj.size = 1+0.5*obj.scale*this.size*obj.life/this.lifetime;

    // Physics and gravity
    let shift = 360 * index/objs.length + rand.range(-10,10);
    let lspeed = 4;
    let fn = index%2===0?Math.sin:Math.cos;
    let dx = 0.1*(obj.y-this.oy)*fn((shift+this.ang*lspeed)*Math.PI/180);
    obj.x = this.ox + dx;
    obj.y += obj.dy * delta;

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
    
    // Fade with age
    obj.alpha = 1-obj.life/this.lifetime;

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
    circle(2*u, -u/4, u/4, 1, 1, 0, 0, 0, 30, 1); // Eye
    circle(2*u, -u/4, u/10, 1, 1, 0, 0, 0, -100, 1); // Eye
    //circle(2*u, u/3, u/4, 1, 1, 0, 0, 0, 100, 1);
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
  Object.assign(this, {width: 0, height:0});
  Object.assign(this, options);
  this.img = new Image();
  this.img.src = "bg.jpg";
};
Ocean.prototype.update = function(delta) {
};
Ocean.prototype.render = function(ctx) {
  ctx.drawImage(this.img, 0, 0, this.width, this.height)
  let grd = ctx.createLinearGradient(0, 0, this.width/50, this.height/2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIi4vc3JjL21haW4iLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvYnViYmxlcy5qcyIsIkM6L1VzZXJzL21hcmMvR29vZ2xlIERyaXZlL1dvcmsvSmF2YVNjcmlwdC9nYW1lcy9jYW52YXMtcGFydGljbGVzL3NyYy9leHBsb3Npb24uanMiLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvZmlzaC5qcyIsIkM6L1VzZXJzL21hcmMvR29vZ2xlIERyaXZlL1dvcmsvSmF2YVNjcmlwdC9nYW1lcy9jYW52YXMtcGFydGljbGVzL3NyYy9mdW5jdGlvbnMuanMiLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvb2NlYW4uanMiLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvcmFmLmpzIiwiQzovVXNlcnMvbWFyYy9Hb29nbGUgRHJpdmUvV29yay9KYXZhU2NyaXB0L2dhbWVzL2NhbnZhcy1wYXJ0aWNsZXMvc3JjL3JuZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciByYWYgPSByZXF1aXJlKFwiLi9yYWZcIik7XHJcbnZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciBmID0gcmVxdWlyZShcIi4vZnVuY3Rpb25zXCIpO1xyXG52YXIgRXhwbG9zaW9uID0gcmVxdWlyZShcIi4vZXhwbG9zaW9uXCIpO1xyXG52YXIgRmlzaCA9IHJlcXVpcmUoXCIuL2Zpc2hcIik7XHJcbnZhciBCdWJibGVzID0gcmVxdWlyZShcIi4vYnViYmxlc1wiKTtcclxudmFyIE9jZWFuID0gcmVxdWlyZShcIi4vb2NlYW5cIik7XHJcblxyXG52YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5jYW52YXMud2lkdGg9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoOyAvL3dpbmRvdy5zY3JlZW4ud2lkdGgvYXZhaWxXaWR0aFxyXG5jYW52YXMuaGVpZ2h0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7IC8vYXZhaWxIZWlnaHRcclxudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG52YXIgcmFuZCA9IHJuZyhNYXRoLnJhbmRvbSgpKTtcclxudmFyIGRwPWYuZHA7XHJcbnZhciBnID0gd2luZG93LmcgPSB7XHJcbiAgdGlja3M6IDAsXHJcbn07XHJcbnZhciBvYmpzID0gZy5vYmpzID0gW107XHJcbnZhciBvc2MgPSBnLm9zYyA9IFtdO1xyXG5vc2MucHVzaCh7YTpyYW5kLmZsb2F0KDEpfSlcclxub3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbm9zYy5wdXNoKHthOnJhbmQuZmxvYXQoMSl9KVxyXG5sZXQgZ3Jhdml0eSA9IGcuZ3Jhdml0eSA9IHtsOjEwMCwgeDpjYW52YXMud2lkdGgvMiwgeTpjYW52YXMuaGVpZ2h0LzIsIGY6MTAwMDAsIGFuczowLjAxLCBkOjF9O1xyXG5vc2NpbGxhdGUob3NjWzBdKTtcclxuZW50aXRpZXM9W107XHJcbmVudGl0aWVzLnB1c2gobmV3IE9jZWFuKHt3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHR9KSk7XHJcbmZ1bmN0aW9uIGluaXQoeCwgeSwgZSkge1xyXG4gIC8vaWYgKHJhbmQucGljayhbdHJ1ZSwgZmFsc2VdKSlcclxuICAgIC8vZW50aXRpZXMucHVzaChuZXcgRXhwbG9zaW9uKHt4OiB5fHxjYW52YXMud2lkdGgvMiwgeTogY2FudmFzLmhlaWdodC8yLCBodWU6IHJhbmQucmFuZ2UoMCwgMzYwKX0pKTtcclxuICAvL2Vsc2VcclxuICBsZXQgbWFrZUZpc2ggPSAoZSAmJiBlLmN0cmxLZXkpIHx8IHJhbmQucGljayhbZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZV0pO1xyXG4gIGlmIChtYWtlRmlzaClcclxuICAgIGVudGl0aWVzLnB1c2gobmV3IEZpc2goe3g6IHh8fHJhbmQucmFuZ2UoMCwgY2FudmFzLndpZHRoLzUpLCB5OiB5fHxyYW5kLnJhbmdlKDAsIGNhbnZhcy5oZWlnaHQpLCBsaWZldGltZTogMjAwMCwgc2l6ZTpyYW5kLnJhbmdlKDEsOSksIG51bTogcmFuZC5yYW5nZSgxLDMwKSwgZ3Jhdml0eTogMCwgZGQ6IDUwLCBodWU6IHJhbmQucmFuZ2UoMCwgMzYwKX0pKTtcclxuICBlbHNlXHJcbiAgICBlbnRpdGllcy5wdXNoKG5ldyBCdWJibGVzKHt4OiB4fHxyYW5kLnJhbmdlKDAsIGNhbnZhcy53aWR0aCksIHk6IGNhbnZhcy5oZWlnaHQsIGxpZmV0aW1lOiAxMjAwLCBncmF2aXR5OiAtNTAsIHNpemU6cmFuZC5yYW5nZSgzLDEwKSwgbnVtOiByYW5kLnJhbmdlKDEwLDMwKSwgaHVlOiByYW5kLnJhbmdlKDEyMCwgMjYwKX0pKTtcclxufTtmb3IgKGxldCBpPTA7IGk8MTA7IGkrKykgaW5pdCgpO1xyXG4vL2NyZWF0ZUJhbGxzKCk7c2V0SW50ZXJ2YWwoKCk9PmNyZWF0ZUJhbGxzKCksIDE1MDApXHJcbnNldEludGVydmFsKCgpPT5vc2NpbGxhdGUob3NjWzBdKSwgMjAwMClcclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgaW5pdChlLmNsaWVudFgsIGUuY2xpZW50WSwgZSk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG9zY2lsbGF0ZShvKSB7XHJcbiAgby5hID0gKCgxMCorK28uYSklMTApLzc7XHJcbiAgby54PU1hdGguY29zKG8uYSk7XHJcbiAgby55PU1hdGguc2luKG8uYSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQmFsbHMobykge1xyXG4gIGlmIChvYmpzLmxlbmd0aD4xMDAwKSByZXR1cm47XHJcbiAgbyA9IG98fHt9O1xyXG4gIG9zY2lsbGF0ZShvc2NbMV0pXHJcbiAgXHJcbiAgby54ID0gby54fHxjYW52YXMud2lkdGgvMjsvLytyYW5kLnJhbmdlKC1jYW52YXMud2lkdGgvNCwgY2FudmFzLndpZHRoLzQpO1xyXG4gIG8ueSA9IG8ueXx8Y2FudmFzLmhlaWdodC8yOy8vcmFuZC5pbnQoY2FudmFzLmhlaWdodCk7XHJcbiAgXHJcbiAgby5odWUgPSBvLmh1ZSB8fCB7XHJcbiAgICBoOiBvc2NbMF0uYSozNjAgLy8gSHVlXHJcbiAgICAsczogcmFuZC5yYW5nZSg1MCwgMTAwKSAvLyBTYXR1cmF0aW9uXHJcbiAgICAsbDogcmFuZC5yYW5nZSg1MCwgMTAwKVxyXG4gIH07XHJcbiAgLy8gU2l6ZVxyXG4gIG8uc3IgPSByYW5kLnJhbmdlKDQsMzYpO1xyXG4gIG8uc3ByZWFkID0ge3g6IHJhbmQucmFuZ2UoMTUwLCBjYW52YXMud2lkdGgpLCB5OiByYW5kLnJhbmdlKDUwLCBjYW52YXMuaGVpZ2h0LzIpfTtcclxuICBvLnNjYWxlID0ge3g6IG9zY1sxXS54LCB5OiBvc2NbMV0ueX07XHJcbiAgby5zID0gby5zfHxvLnNyKm9zY1swXS5hO1xyXG4gIFxyXG4gIG8ubnVtID0gby5udW18fG9zY1sxXS5hKjYwMDtcclxuICBvLnJvdCA9IG8ucm90fHxyYW5kLnBpY2soW3RydWUsIGZhbHNlXSk7XHJcbiAgby50eXBlID0gby50eXBlfHxvc2NbMV0uYT4wLjU/XCJyXCI6XCJvXCI7XHJcbiAgby5kZHggPSByYW5kLnBpY2soWy0xMDAsMCwxMDBdKTsvLyhNYXRoLnJvdW5kKG9zY1swXS5hKjEwKSUyPT09MCk/MTAwOjA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvLm51bTsgaSsrKSB7XHJcbiAgICBsZXQgYSA9IGkqMzYwL28ubnVtO1xyXG4gICAgb2Jqcy5wdXNoKHtcclxuICAgICAgeDogby54K28uc3ByZWFkLngqTWF0aC5zaW4oYSpNYXRoLlBJKVxyXG4gICAgICAseTogby55K28uc3ByZWFkLnkqTWF0aC5jb3Moby5zY2FsZS55Km8ucyppKk1hdGguUEkvMTgwKVxyXG4gICAgICAsc2l6ZTogby5zXHJcbiAgICAgICxzY2FsZTogby5zY2FsZVxyXG4gICAgICAsZzogTWF0aC5zaWduKG8uZGR4KVxyXG4gICAgICAsZHg6IG8uZGR4PT09MD9yYW5kLnJhbmdlKC0xMTAsIDExMCk6MFxyXG4gICAgICAsZHk6IG8uZGR4PT09MD9yYW5kLnJhbmdlKC0xMTAsIDExMCk6MFxyXG4gICAgICAsbGlmZXRpbWU6IHJhbmQucmFuZ2UoMjUwLCAzMDApXHJcbiAgICAgICxsaWZlY291bnQ6IDBcclxuICAgICAgLHJvdDogby5yb3RcclxuICAgICAgLHR5cGU6IG8udHlwZVxyXG4gICAgICAsaHVlOiBvLmh1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5yYWYuc3RhcnQoZnVuY3Rpb24oZWxhcHNlZCkge1xyXG4gIC8vIENsZWFyIHRoZSBzY3JlZW5cclxuICBjdHguZmlsbFN0eWxlPVwid2hpdGVcIjtcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICBcclxuICBnLnRpY2tzKys7XHJcbiAgaWYgKGcudGlja3MlMzA9PT0wKSBpbml0KCk7XHJcblxyXG4gIG9zY2lsbGF0ZShvc2NbMl0pXHJcbiAgaWYgKCgxMDAqb3NjWzBdLmEpJTM9PT0wKSB7fVxyXG4gIGlmIChvc2NbMF0uYT4wLjcpIHtcclxuICAvL2N0eC5maWxsU3R5bGU9XCJyZWRcIjtjdHguZmlsbFJlY3QoZ3Jhdml0eS54LCBncmF2aXR5LnksIDEwLCAxMCk7XHJcbiAgaWYgKG9zY1swXS5hPjAuNSkgZ3Jhdml0eS5hbnMgPSByYW5kLnBpY2soWzAuMDAxLCAwLjAxLCAwLjFdKTtcclxuICBncmF2aXR5LmFuZyA9IGdyYXZpdHkuYW5nPjA/Z3Jhdml0eS5hbmcrZ3Jhdml0eS5hbnM6Z3Jhdml0eS5hbnM7XHJcbiAgZ3Jhdml0eS54ID0gY2FudmFzLndpZHRoLzIrZ3Jhdml0eS5sKk1hdGguY29zKGdyYXZpdHkuYW5nKTtcclxuICBncmF2aXR5LnkgPWNhbnZhcy5oZWlnaHQvMitncmF2aXR5LmwqTWF0aC5zaW4oZ3Jhdml0eS5hbmcpOyBcclxuICB9XHJcblxyXG4gIG9ianMuZm9yRWFjaChmdW5jdGlvbihvYmosIGluZGV4LCBvYmplY3QpIHtcclxuICAgIHJldHVyblxyXG4gICAgLy8gTGlmZXRpbWVcclxuICAgIG9iai5saWZlY291bnQgKz0gZWxhcHNlZCAqIDUwO1xyXG4gICAgb2JqLmFscGhhID0gMS1vYmoubGlmZWNvdW50L29iai5saWZldGltZTtcclxuICAgIFxyXG4gICAgLy8gS2lsbFxyXG4gICAgaWYgKG9iai5saWZlY291bnQ+b2JqLmxpZmV0aW1lKSBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGlmIChvYmoubGlmZWNvdW50Pm9iai5saWZldGltZS8yKSBvYmouZz1yYW5kLnBpY2soWy0xLDAsMV0pO1xyXG4gICAgXHJcbiAgICAvLyBHcmF2aXR5XHJcbiAgICBpZiAob2JqLmchPT0wKSB7XHJcbiAgICAgIGxldCBbZHgsIGR5XSA9IFtncmF2aXR5LnggLSBvYmoueCwgZ3Jhdml0eS55IC0gb2JqLnldO1xyXG4gICAgICBsZXQgZHIgPSBNYXRoLm1heCgxMCwgTWF0aC5zcXJ0KGR4KioyLzEwMDAgKyBkeSoqMi8xMDAwKSk7XHJcbiAgICAgIGxldCBbYXgsIGF5XSA9IFtkeC9NYXRoLmFicyhkeCksIGR5L01hdGguYWJzKGR5KV07XHJcbiAgICAgIC8vb2JqLnNpemUgPSBkcjtcclxuICAgICAgb2JqLmR4ICs9IG9iai5nICogZWxhcHNlZCAqIGF4ICogZ3Jhdml0eS5mIC8gZHIqKjI7XHJcbiAgICAgIG9iai5keSArPSBvYmouZyAqIGVsYXBzZWQgKiBheSAqIGdyYXZpdHkuZiAvIGRyKioyO1xyXG4gICAgfVxyXG4gICAgbGV0IG1heCA9IHt4OiAwLjUrMjAwKm9zY1swXS54LzIsIHk6IDAuNSsyMDAqb3NjWzBdLngvMn07XHJcbiAgICBvYmouZHggPSBvYmouZHg+MD9NYXRoLm1pbihtYXgueCwgb2JqLmR4KTpNYXRoLm1heCgtbWF4LngsIG9iai5keCk7XHJcbiAgICBvYmouZHkgPSBvYmouZHk+MD9NYXRoLm1pbihtYXgueSwgb2JqLmR5KTpNYXRoLm1heCgtbWF4LnksIG9iai5keSk7XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBjb2xsaXNpb24gYWdhaW5zdCB0aGUgY2FudmFzJ3MgZWRnZXNcclxuICAgIGlmIChvc2NbMF0ueD4wLjUpIGlmIChvYmoueCAtIG9iai5zaXplIDwgMCAmJiBvYmouZHggPCAwIHx8IG9iai54ICsgb2JqLnNpemUgPiBjYW52YXMud2lkdGggJiYgb2JqLmR4ID4gMCkgb2JqLmR4ID0gLW9iai5keCAqIDAuNztcclxuICAgIGlmIChvc2NbMF0ueT4wLjUpIGlmIChvYmoueSAtIG9iai5zaXplIDwgMCAmJiBvYmouZHkgPCAwIHx8IG9iai55ICsgb2JqLnNpemUgPiBjYW52YXMuaGVpZ2h0ICYmIG9iai5keSA+IDApIG9iai5keSA9IC1vYmouZHkgKiAwLjc7XHJcblxyXG4gICAgLy8gVXBkYXRlIG9iaiBwb3NpdGlvblxyXG4gICAgb2JqLnggKz0gb2JqLmR4ICogZWxhcHNlZDtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGVsYXBzZWQ7XHJcblxyXG4gICAgLy8gVHJhbnNwYXJlbmN5XHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSBvYmouYWxwaGE7XHJcbiAgICBcclxuICAgIC8vIENvbG9yXHJcbiAgICBpZiAob3NjWzBdLmE+MC41IHx8IG9iai54PDApIG9iai5odWUuaCA9IDM2MCpvYmouc2NhbGUueDsgZWxzZSBvYmouaHVlLmggPSAzNjAqb2JqLngvY2FudmFzLndpZHRoO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGBoc2woJHtvYmouaHVlLmh9LCAke29iai5odWUuc30lLCAke29iai5odWUubH0lKWA7XHJcbiAgICBcclxuICAgIC8vIFNjYWxlXHJcbiAgICBvYmoud2lkdGggPSBvYmouc2l6ZSpvYmouc2NhbGUueDtcclxuICAgIG9iai5oZWlnaHQgPSBvYmouc2l6ZSpvYmouc2NhbGUueTtcclxuICAgIFxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqLnggKyBvYmoud2lkdGgvMiwgb2JqLnkgKyBvYmouaGVpZ2h0LzIpO1xyXG4gICAgaWYgKG9iai5yb3QpIGN0eC5yb3RhdGUoNzIwKm9iai5hbHBoYSpNYXRoLlBJLzE4MCk7XHJcbiAgICAvL2lmIChvYmouc2NhbGUpIGN0eC5zY2FsZShvYmouc2NhbGUueCwgb2JqLnNjYWxlLnkpO1xyXG4gICAgLy8gU2hhcGVcclxuICAgIGlmIChvYmoudHlwZT09PVwib1wiKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYygwLCAwLCBvYmouc2l6ZSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguYXJjKG9iai5zaXplLzIsIDAsIG9iai5zaXplLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgIGN0eC5hcmMob2JqLnNpemUsIDAsIG9iai5zaXplLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgIGN0eC5hcmMob2JqLnNpemUqMy8yLCAwLCBvYmouc2l6ZSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KTtcclxuICAgICAgY3R4LmZpbGxSZWN0KC1vYmouaGVpZ2h0LzIsIC1vYmoud2lkdGgvMiwgb2JqLmhlaWdodCwgb2JqLndpZHRoKTtcclxuICAgICAgLy9jdHguZmlsbFJlY3Qob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9KTtcclxuXHJcbiAgZW50aXRpZXMuZm9yRWFjaCgoZW50LCBpbmRleCk9PntcclxuICAgIGVudC51cGRhdGUoZWxhcHNlZCk7XHJcbiAgICBpZiAoZW50Lm9ianMgJiYgZW50Lm9ianMubGVuZ3RoPT09MCkgcmV0dXJuIGVudGl0aWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgZW50LnJlbmRlcihjdHgpO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9KTtcclxufSk7XHJcbiIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG52YXIgZHAgPSBjb25zb2xlLmxvZztcclxuXHJcbnZhciBCdWJibGVzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgbnVtOiByYW5kLnJhbmdlKDEwLCA0MCksIGh1ZTogMjQwLCBzaXplOiAyNSwgbGlmZXRpbWU6IDExMDAsIGdyYXZpdHk6IC0yMH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5veCA9IHRoaXMueDtcclxuICB0aGlzLm95ID0gdGhpcy55O1xyXG4gIHRoaXMuYW5nID0gMDtcclxuICB0aGlzLm9ianMgPSBbXTtcclxuICBmb3IgKGxldCBpPTA7IGk8dGhpcy5udW07IGkrKykge1xyXG4gICAgbGV0IGFuZyA9IE1hdGguUEkqaS8odGhpcy5udW0tMSk7XHJcbiAgICB0aGlzLm9ianMucHVzaCh7XHJcbiAgICAgIHg6IHRoaXMueCArIHJhbmQucmFuZ2UoMCwgdGhpcy5zaXplKSxcclxuICAgICAgeTogdGhpcy55ICsgcmFuZC5yYW5nZSgwLCB0aGlzLnNpemUqMyksXHJcbiAgICAgIGR5OiB0aGlzLmdyYXZpdHkgKyByYW5kLnJhbmdlKC0zMCwgMzApLFxyXG4gICAgICBsaWZlOiAwLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIHNjYWxlOiByYW5kLnJhbmdlKDEsMyksXHJcbiAgICAgIGNvbDoge2g6IHRoaXMuaHVlICsgcmFuZC5yYW5nZSgtMTAsIDEwKSwgczogMzAsIGw6IDgwfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5CdWJibGVzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xyXG4gIHRoaXMuYW5nID0gKCsrdGhpcy5hbmcpJTM2MDtcclxuICB0aGlzLmFscGhhID0gMC44LXRoaXMub2Jqc1swXS5saWZlL3RoaXMubGlmZXRpbWU7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgsIG9ianMpID0+IHtcclxuXHJcbiAgICAvLyBMaWZldGltZVxyXG4gICAgb2JqLmxpZmUgKz0gZGVsdGEgKiA1MDtcclxuICAgIGlmIChvYmoubGlmZSA+IHRoaXMubGlmZXRpbWUpIG9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIFxyXG4gICAgLy8gR3JvdyBhbmQgZmFkZSB3aXRoIGFnZVxyXG4gICAgb2JqLnNpemUgPSAxKzAuNSpvYmouc2NhbGUqdGhpcy5zaXplKm9iai5saWZlL3RoaXMubGlmZXRpbWU7XHJcblxyXG4gICAgLy8gUGh5c2ljcyBhbmQgZ3Jhdml0eVxyXG4gICAgbGV0IHNoaWZ0ID0gMzYwICogaW5kZXgvb2Jqcy5sZW5ndGggKyByYW5kLnJhbmdlKC0xMCwxMCk7XHJcbiAgICBsZXQgbHNwZWVkID0gNDtcclxuICAgIGxldCBmbiA9IGluZGV4JTI9PT0wP01hdGguc2luOk1hdGguY29zO1xyXG4gICAgbGV0IGR4ID0gMC4xKihvYmoueS10aGlzLm95KSpmbigoc2hpZnQrdGhpcy5hbmcqbHNwZWVkKSpNYXRoLlBJLzE4MCk7XHJcbiAgICBvYmoueCA9IHRoaXMub3ggKyBkeDtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGRlbHRhO1xyXG5cclxuICB9KTtcclxufTtcclxuQnViYmxlcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4KSB7XHJcbiAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5hbHBoYTtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCwgb2JqcykgPT4ge1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGBoc2woJHtvYmouY29sLmh9LCAke29iai5jb2wuc30lLCAke29iai5jb2wubH0lKWA7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iai54LCBvYmoueSk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKDAsIDAsIG9iai5zaXplLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEJ1YmJsZXM7IiwidmFyIHJuZyA9IHJlcXVpcmUoXCIuL3JuZ1wiKTtcclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcblxyXG52YXIgRXhwbG9zaW9uID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgbnVtOiAyMDAsIGRkOiAxMDAsIGh1ZTogMTIwLCBzaXplOiA1LCBsaWZldGltZTogMTAwLCBncmF2aXR5OiAyLCBkZDogMTAwfSk7XHJcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuICB0aGlzLm9ianMgPSBbXTtcclxuICBmb3IgKGxldCBpPTA7IGk8dGhpcy5udW07IGkrKykge1xyXG4gICAgbGV0IGFuZyA9IE1hdGguUEkqaS8odGhpcy5udW0tMSk7XHJcbiAgICB0aGlzLm9ianMucHVzaCh7XHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBsaWZlOiAwLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIGR4OiByYW5kLnJhbmdlKC10aGlzLmRkLCB0aGlzLmRkKSpNYXRoLmNvcyhhbmcpLFxyXG4gICAgICBkeTogcmFuZC5yYW5nZSgtdGhpcy5kZCwgdGhpcy5kZCkqTWF0aC5zaW4oYW5nKS00KnRoaXMuZGQsXHJcbiAgICAgIGNvbDoge2g6IHRoaXMuaHVlICsgcmFuZC5yYW5nZSgtMTAsIDEwKSwgczogODAsIGw6IDUwfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5FeHBsb3Npb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgsIG9ianMpID0+IHtcclxuXHJcbiAgICAvLyBMaWZldGltZVxyXG4gICAgb2JqLmxpZmUgKz0gZGVsdGEgKiA1MDtcclxuICAgIGlmIChvYmoubGlmZSA+IHRoaXMubGlmZXRpbWUpIG9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIFxyXG4gICAgLy8gRmFkZSB3aXRoIGFnZVxyXG4gICAgb2JqLmFscGhhID0gMS1vYmoubGlmZS90aGlzLmxpZmV0aW1lO1xyXG5cclxuICAgIC8vIFBoeXNpY3MgYW5kIGdyYXZpdHlcclxuICAgIG9iai5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICBvYmoueCArPSBvYmouZHggKiBkZWx0YTtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGRlbHRhO1xyXG5cclxuICB9KTtcclxufTtcclxuRXhwbG9zaW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcclxuICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9ianNbMF0uYWxwaGE7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsKCR7b2JqLmNvbC5ofSwgJHtvYmouY29sLnN9JSwgJHtvYmouY29sLmx9JSlgO1xyXG4gICAgY3R4LmZpbGxSZWN0KG9iai54LCBvYmoueSwgb2JqLnNpemUsIG9iai5zaXplKTtcclxuICB9KTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBFeHBsb3Npb247IiwidmFyIHJuZyA9IHJlcXVpcmUoXCIuL3JuZ1wiKTtcclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcblxyXG52YXIgRmlzaCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIHt4OiAwLCB5OjAsIG51bTogMSwgaHVlOiAxMjAsIHNpemU6IDUsIGxpZmV0aW1lOiAxMDAsIGdyYXZpdHk6IDIsIGRkOiAxMDB9KTtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIHRoaXMub2JqcyA9IFtdO1xyXG4gIGxldCBmID0gTWF0aC5zcXJ0KHRoaXMubnVtKSo1O1xyXG4gIGZvciAobGV0IGk9MDsgaTx0aGlzLm51bTsgaSsrKSB7XHJcbiAgICBsZXQgYW5nID0gTWF0aC5QSSppL3RoaXMubnVtO1xyXG4gICAgdGhpcy5vYmpzLnB1c2goe1xyXG4gICAgICB4OiB0aGlzLngrcmFuZC5yYW5nZSgtdGhpcy5zaXplKmYsIHRoaXMuc2l6ZSpmKSxcclxuICAgICAgeTogdGhpcy55K3JhbmQucmFuZ2UoLXRoaXMuc2l6ZSpmLCB0aGlzLnNpemUqZiksXHJcbiAgICAgIGxpZmU6IDAsXHJcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSpyYW5kLnJhbmdlKDEwLDMwKS8xMCxcclxuICAgICAgZHg6IHJhbmQucGljayhbMSwtMV0pKnJhbmQucmFuZ2UodGhpcy5kZC8yLCB0aGlzLmRkKSxcclxuICAgICAgZHk6IHJhbmQucmFuZ2UoLXRoaXMuZGQvNCwgdGhpcy5kZC80KSpNYXRoLnNpbihhbmcpLFxyXG4gICAgICBjb2w6IHtoOiB0aGlzLmh1ZSArIHJhbmQucmFuZ2UoLTEwLCAxMCksIHM6IDgwKyByYW5kLnJhbmdlKC0xMCwgMTApLCBsOiA1MCsgcmFuZC5yYW5nZSgtMTAsIDEwKX1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuRmlzaC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCwgb2JqcykgPT4ge1xyXG5cclxuICAgIC8vIExpZmV0aW1lXHJcbiAgICBvYmoubGlmZSArPSBkZWx0YSAqIDUwO1xyXG4gICAgaWYgKG9iai5saWZlID4gdGhpcy5saWZldGltZSkgb2Jqcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgXHJcbiAgICAvLyBGYWRlIHdpdGggYWdlXHJcbiAgICBvYmouYWxwaGEgPSAxLW9iai5saWZlL3RoaXMubGlmZXRpbWU7XHJcblxyXG4gICAgLy8gUGh5c2ljcyBhbmQgZ3Jhdml0eVxyXG4gICAgb2JqLmR5ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgIG9iai54ICs9IG9iai5keCAqIGRlbHRhO1xyXG4gICAgb2JqLnkgKz0gb2JqLmR5ICogZGVsdGE7XHJcblxyXG4gIH0pO1xyXG59O1xyXG5GaXNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsKCR7b2JqLmNvbC5ofSwgJHtvYmouY29sLnN9JSwgJHtvYmouY29sLmx9JSlgO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmoueCArIG9iai5zaXplLzIsIG9iai55ICsgb2JqLnNpemUvMik7XHJcbiAgICBjdHguc2NhbGUoTWF0aC5hYnMob2JqLmR4KS9vYmouZHgsIDEpO1xyXG4gICAgbGV0IHUgPSBvYmouc2l6ZTtcclxuICAgIGNpcmNsZSgtMyp1LCAtdS8zLCB1LzQsIDMsIDEsIDIwLCAwLCAwLCAwLCAwLjgsIHRydWUpOyAvLyBUYWlsIHRvcFxyXG4gICAgY2lyY2xlKC0zKnUsIHUvMywgdS80LCAzLCAxLCAtMjAsIDAsIDAsIDAsIDAuOCwgdHJ1ZSk7IC8vIFRhaWwgYm90dG9tXHJcbiAgICBjaXJjbGUoMCwgMCwgdSwgMywgMSwgMCwgMCwgMCwgMCwgMSwgdHJ1ZSk7IC8vIEJvZHlcclxuICAgIGNpcmNsZSgyKnUsIC11LzQsIHUvNCwgMSwgMSwgMCwgMCwgMCwgMzAsIDEpOyAvLyBFeWVcclxuICAgIGNpcmNsZSgyKnUsIC11LzQsIHUvMTAsIDEsIDEsIDAsIDAsIDAsIC0xMDAsIDEpOyAvLyBFeWVcclxuICAgIC8vY2lyY2xlKDIqdSwgdS8zLCB1LzQsIDEsIDEsIDAsIDAsIDAsIDEwMCwgMSk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgZnVuY3Rpb24gY2lyY2xlKHgsIHksIHIsIHcsIGgsIHJvdCwgaHVlLCBzYXQsIGx1bSwgYWxwaGE9MSwgc3Ryb2tlPWZhbHNlKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsYSgke29iai5jb2wuaCtodWV9LCAke29iai5jb2wucytzYXR9JSwgJHtvYmouY29sLmwrbHVtfSUsICR7YWxwaGF9KWA7XHJcbiAgICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2VTdHlsZSA9IGBoc2xhKCR7b2JqLmNvbC5oK2h1ZX0sICR7b2JqLmNvbC5zK3NhdH0lLCAke29iai5jb2wubC0yMH0lLCAkezAuNX0pYDtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgIGlmIChyb3QpIGN0eC5yb3RhdGUocm90Kk1hdGguUEkvMTgwKTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguc2NhbGUodywgaCk7XHJcbiAgICAgIGN0eC5hcmMoMCwgMCwgciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2UoKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBGaXNoOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGRwOiBjb25zb2xlLmxvZ1xyXG5cdCxkcDE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGFyZ3MgPSBbXTtcclxuXHRcdGZvciAobGV0IGEgaW4gYXJndW1lbnRzKSBhcmdzLnB1c2godHlwZW9mIGFyZ3VtZW50c1thXSA9PSBcIm51bWJlclwiP2FyZ3VtZW50c1thXS50b0ZpeGVkKDIpOmFyZ3VtZW50c1thXSlcclxuXHRcdGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG5cdH1cclxuXHQsJDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxyXG59OyIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG5cclxudmFyIE9jZWFuID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3dpZHRoOiAwLCBoZWlnaHQ6MH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICB0aGlzLmltZy5zcmMgPSBcImJnLmpwZ1wiO1xyXG59O1xyXG5PY2Vhbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcclxufTtcclxuT2NlYW4ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gIGxldCBncmQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy53aWR0aC81MCwgdGhpcy5oZWlnaHQvMik7XHJcbiAgZ3JkLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMCwgMCwgMCwgMC4zMDApXCIpO1xyXG4gIGdyZC5hZGRDb2xvclN0b3AoMC4yLCBcInJnYmEoMjQsIDU4LCAxMjQsIDAuNjApXCIpO1xyXG4gIGdyZC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDQsIDIsIDI0LCAxKVwiKTtcclxuICBjdHguZmlsbFN0eWxlID0gZ3JkO1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gT2NlYW47IiwiLy8gSG9sZHMgbGFzdCBpdGVyYXRpb24gdGltZXN0YW1wLlxyXG52YXIgdGltZSA9IDA7XHJcblxyXG4vKipcclxuICogQ2FsbHMgYGZuYCBvbiBuZXh0IGZyYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm4ge2ludH0gVGhlIHJlcXVlc3QgSURcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiByYWYoZm4pIHtcclxuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgIHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICB2YXIgZWxhcHNlZCA9IG5vdyAtIHRpbWU7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiA5OTkpIHtcclxuICAgICAgZWxhcHNlZCA9IDEgLyA2MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsYXBzZWQgLz0gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lID0gbm93O1xyXG4gICAgZm4oZWxhcHNlZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxzIGBmbmAgb24gZXZlcnkgZnJhbWUgd2l0aCBgZWxhcHNlZGAgc2V0IHRvIHRoZSBlbGFwc2VkXHJcbiAgICogdGltZSBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7aW50fSBUaGUgcmVxdWVzdCBJRFxyXG4gICAqIEBhcGkgcHVibGljXHJcbiAgICovXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICByZXR1cm4gcmFmKGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xyXG4gICAgICBmbihlbGFwc2VkKTtcclxuICAgICAgcmFmKHRpY2spO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDYW5jZWxzIHRoZSBzcGVjaWZpZWQgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2ludH0gaWQgVGhlIHJlcXVlc3QgSURcclxuICAgKiBAYXBpIHB1YmxpY1xyXG4gICAqL1xyXG4gIHN0b3A6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWVkKSB7XHJcbiAgZnVuY3Rpb24gcmFuZG9tKCkge1xyXG4gICAgdmFyIHggPSBNYXRoLnNpbigwLjg3NjUxMTExNTk1OTI4MjggKyBzZWVkKyspICogMWU0XHJcbiAgICByZXR1cm4geCAtIE1hdGguZmxvb3IoeClcclxuICB9XHJcbiAgXHJcbiAgdmFyIHJuZyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGludGVnZXIgd2l0aGluIFswLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gW21heF1cclxuICAgICAqIEByZXR1cm4ge2ludH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGludDogZnVuY3Rpb24obWF4KSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSAqIChtYXggfHwgMHhmZmZmZmZmKSB8IDA7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBmbG9hdCB3aXRoaW4gWzAuMCwgMS4wKS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtmbG9hdH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGZsb2F0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHJhbmRvbSgpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgYm9vbGVhbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgYm9vbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSA+IDAuNTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbiBpbnRlZ2VyIHdpdGhpbiBbbWluLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gbWluXHJcbiAgICAgKiBAcGFyYW0gIHtpbnR9IG1heFxyXG4gICAgICogQHJldHVybiB7aW50fVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICAgIHJldHVybiBybmcuaW50KG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBQaWNrIGFuIGVsZW1lbnQgZnJvbSB0aGUgc291cmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge21peGVkW119IHNvdXJjZVxyXG4gICAgICogQHJldHVybiB7bWl4ZWR9XHJcbiAgICAgKiBAYXBpIHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBwaWNrOiBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHNvdXJjZVtybmcucmFuZ2UoMCwgc291cmNlLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBybmc7XHJcbn07XHJcbiJdfQ==
