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
let entities = g.entities =[];
osc.push({a:rand.float(1)})
osc.push({a:rand.float(1)})
osc.push({a:rand.float(1)})
let gravity = g.gravity = {l:100, x:canvas.width/2, y:canvas.height/2, f:10000, ans:0.01, d:1};
oscillate(osc[0]);
entities.push(new Ocean({width: canvas.width, height: canvas.height}));
function init(x, y, e) {
  //if (rand.pick([true, false]))
    //entities.push(new Explosion({x: y||canvas.width/2, y: canvas.height/2, hue: rand.range(0, 360)}));
  //else
   let makeFish = (e && e.ctrlKey) || rand.pick([false, false, false, true]);
   if (makeFish)
     entities.push(new Fish({x: x||rand.range(0, canvas.width/5), y: y||rand.range(0, canvas.height), lifetime: 2000, size:rand.range(1,9), num: rand.range(1,30), gravity: 0, dd: 50, hue: rand.range(0, 360)}));
   else
    entities.push(new Bubbles({x: x||rand.range(0, canvas.width), y: canvas.height, height: canvas.height, lifetime: 1200, gravity: -50, size:rand.range(3,10), num: rand.range(10,30), hue: rand.range(120, 260)}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIi4vc3JjL21haW4iLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvYnViYmxlcy5qcyIsIkM6L1VzZXJzL21hcmMvR29vZ2xlIERyaXZlL1dvcmsvSmF2YVNjcmlwdC9nYW1lcy9jYW52YXMtcGFydGljbGVzL3NyYy9leHBsb3Npb24uanMiLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvZmlzaC5qcyIsIkM6L1VzZXJzL21hcmMvR29vZ2xlIERyaXZlL1dvcmsvSmF2YVNjcmlwdC9nYW1lcy9jYW52YXMtcGFydGljbGVzL3NyYy9mdW5jdGlvbnMuanMiLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvb2NlYW4uanMiLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvcmFmLmpzIiwiQzovVXNlcnMvbWFyYy9Hb29nbGUgRHJpdmUvV29yay9KYXZhU2NyaXB0L2dhbWVzL2NhbnZhcy1wYXJ0aWNsZXMvc3JjL3JuZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgcmFmID0gcmVxdWlyZShcIi4vcmFmXCIpO1xyXG52YXIgcm5nID0gcmVxdWlyZShcIi4vcm5nXCIpO1xyXG52YXIgZiA9IHJlcXVpcmUoXCIuL2Z1bmN0aW9uc1wiKTtcclxudmFyIEV4cGxvc2lvbiA9IHJlcXVpcmUoXCIuL2V4cGxvc2lvblwiKTtcclxudmFyIEZpc2ggPSByZXF1aXJlKFwiLi9maXNoXCIpO1xyXG52YXIgQnViYmxlcyA9IHJlcXVpcmUoXCIuL2J1YmJsZXNcIik7XHJcbnZhciBPY2VhbiA9IHJlcXVpcmUoXCIuL29jZWFuXCIpO1xyXG5cclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuY2FudmFzLndpZHRoPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDsgLy93aW5kb3cuc2NyZWVuLndpZHRoL2F2YWlsV2lkdGhcclxuY2FudmFzLmhlaWdodD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0OyAvL2F2YWlsSGVpZ2h0XHJcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcbnZhciBkcD1mLmRwO1xyXG52YXIgZyA9IHdpbmRvdy5nID0ge1xyXG4gIHRpY2tzOiAwLFxyXG59O1xyXG52YXIgb2JqcyA9IGcub2JqcyA9IFtdO1xyXG52YXIgb3NjID0gZy5vc2MgPSBbXTtcclxubGV0IGVudGl0aWVzID0gZy5lbnRpdGllcyA9W107XHJcbm9zYy5wdXNoKHthOnJhbmQuZmxvYXQoMSl9KVxyXG5vc2MucHVzaCh7YTpyYW5kLmZsb2F0KDEpfSlcclxub3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbmxldCBncmF2aXR5ID0gZy5ncmF2aXR5ID0ge2w6MTAwLCB4OmNhbnZhcy53aWR0aC8yLCB5OmNhbnZhcy5oZWlnaHQvMiwgZjoxMDAwMCwgYW5zOjAuMDEsIGQ6MX07XHJcbm9zY2lsbGF0ZShvc2NbMF0pO1xyXG5lbnRpdGllcy5wdXNoKG5ldyBPY2Vhbih7d2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0fSkpO1xyXG5mdW5jdGlvbiBpbml0KHgsIHksIGUpIHtcclxuICAvL2lmIChyYW5kLnBpY2soW3RydWUsIGZhbHNlXSkpXHJcbiAgICAvL2VudGl0aWVzLnB1c2gobmV3IEV4cGxvc2lvbih7eDogeXx8Y2FudmFzLndpZHRoLzIsIHk6IGNhbnZhcy5oZWlnaHQvMiwgaHVlOiByYW5kLnJhbmdlKDAsIDM2MCl9KSk7XHJcbiAgLy9lbHNlXHJcbiAgIGxldCBtYWtlRmlzaCA9IChlICYmIGUuY3RybEtleSkgfHwgcmFuZC5waWNrKFtmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlXSk7XHJcbiAgIGlmIChtYWtlRmlzaClcclxuICAgICBlbnRpdGllcy5wdXNoKG5ldyBGaXNoKHt4OiB4fHxyYW5kLnJhbmdlKDAsIGNhbnZhcy53aWR0aC81KSwgeTogeXx8cmFuZC5yYW5nZSgwLCBjYW52YXMuaGVpZ2h0KSwgbGlmZXRpbWU6IDIwMDAsIHNpemU6cmFuZC5yYW5nZSgxLDkpLCBudW06IHJhbmQucmFuZ2UoMSwzMCksIGdyYXZpdHk6IDAsIGRkOiA1MCwgaHVlOiByYW5kLnJhbmdlKDAsIDM2MCl9KSk7XHJcbiAgIGVsc2VcclxuICAgIGVudGl0aWVzLnB1c2gobmV3IEJ1YmJsZXMoe3g6IHh8fHJhbmQucmFuZ2UoMCwgY2FudmFzLndpZHRoKSwgeTogY2FudmFzLmhlaWdodCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LCBsaWZldGltZTogMTIwMCwgZ3Jhdml0eTogLTUwLCBzaXplOnJhbmQucmFuZ2UoMywxMCksIG51bTogcmFuZC5yYW5nZSgxMCwzMCksIGh1ZTogcmFuZC5yYW5nZSgxMjAsIDI2MCl9KSk7XHJcbn07Zm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIGluaXQoKTtcclxuLy9jcmVhdGVCYWxscygpO3NldEludGVydmFsKCgpPT5jcmVhdGVCYWxscygpLCAxNTAwKVxyXG5zZXRJbnRlcnZhbCgoKT0+b3NjaWxsYXRlKG9zY1swXSksIDIwMDApXHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gIGluaXQoZS5jbGllbnRYLCBlLmNsaWVudFksIGUpO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBvc2NpbGxhdGUobykge1xyXG4gIG8uYSA9ICgoMTAqKytvLmEpJTEwKS83O1xyXG4gIG8ueD1NYXRoLmNvcyhvLmEpO1xyXG4gIG8ueT1NYXRoLnNpbihvLmEpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhbGxzKG8pIHtcclxuICBpZiAob2Jqcy5sZW5ndGg+MTAwMCkgcmV0dXJuO1xyXG4gIG8gPSBvfHx7fTtcclxuICBvc2NpbGxhdGUob3NjWzFdKVxyXG4gIFxyXG4gIG8ueCA9IG8ueHx8Y2FudmFzLndpZHRoLzI7Ly8rcmFuZC5yYW5nZSgtY2FudmFzLndpZHRoLzQsIGNhbnZhcy53aWR0aC80KTtcclxuICBvLnkgPSBvLnl8fGNhbnZhcy5oZWlnaHQvMjsvL3JhbmQuaW50KGNhbnZhcy5oZWlnaHQpO1xyXG4gIFxyXG4gIG8uaHVlID0gby5odWUgfHwge1xyXG4gICAgaDogb3NjWzBdLmEqMzYwIC8vIEh1ZVxyXG4gICAgLHM6IHJhbmQucmFuZ2UoNTAsIDEwMCkgLy8gU2F0dXJhdGlvblxyXG4gICAgLGw6IHJhbmQucmFuZ2UoNTAsIDEwMClcclxuICB9O1xyXG4gIC8vIFNpemVcclxuICBvLnNyID0gcmFuZC5yYW5nZSg0LDM2KTtcclxuICBvLnNwcmVhZCA9IHt4OiByYW5kLnJhbmdlKDE1MCwgY2FudmFzLndpZHRoKSwgeTogcmFuZC5yYW5nZSg1MCwgY2FudmFzLmhlaWdodC8yKX07XHJcbiAgby5zY2FsZSA9IHt4OiBvc2NbMV0ueCwgeTogb3NjWzFdLnl9O1xyXG4gIG8ucyA9IG8uc3x8by5zcipvc2NbMF0uYTtcclxuICBcclxuICBvLm51bSA9IG8ubnVtfHxvc2NbMV0uYSo2MDA7XHJcbiAgby5yb3QgPSBvLnJvdHx8cmFuZC5waWNrKFt0cnVlLCBmYWxzZV0pO1xyXG4gIG8udHlwZSA9IG8udHlwZXx8b3NjWzFdLmE+MC41P1wiclwiOlwib1wiO1xyXG4gIG8uZGR4ID0gcmFuZC5waWNrKFstMTAwLDAsMTAwXSk7Ly8oTWF0aC5yb3VuZChvc2NbMF0uYSoxMCklMj09PTApPzEwMDowO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgby5udW07IGkrKykge1xyXG4gICAgbGV0IGEgPSBpKjM2MC9vLm51bTtcclxuICAgIG9ianMucHVzaCh7XHJcbiAgICAgIHg6IG8ueCtvLnNwcmVhZC54Kk1hdGguc2luKGEqTWF0aC5QSSlcclxuICAgICAgLHk6IG8ueStvLnNwcmVhZC55Kk1hdGguY29zKG8uc2NhbGUueSpvLnMqaSpNYXRoLlBJLzE4MClcclxuICAgICAgLHNpemU6IG8uc1xyXG4gICAgICAsc2NhbGU6IG8uc2NhbGVcclxuICAgICAgLGc6IE1hdGguc2lnbihvLmRkeClcclxuICAgICAgLGR4OiBvLmRkeD09PTA/cmFuZC5yYW5nZSgtMTEwLCAxMTApOjBcclxuICAgICAgLGR5OiBvLmRkeD09PTA/cmFuZC5yYW5nZSgtMTEwLCAxMTApOjBcclxuICAgICAgLGxpZmV0aW1lOiByYW5kLnJhbmdlKDI1MCwgMzAwKVxyXG4gICAgICAsbGlmZWNvdW50OiAwXHJcbiAgICAgICxyb3Q6IG8ucm90XHJcbiAgICAgICx0eXBlOiBvLnR5cGVcclxuICAgICAgLGh1ZTogby5odWVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxucmFmLnN0YXJ0KGZ1bmN0aW9uKGVsYXBzZWQpIHtcclxuICAvLyBDbGVhciB0aGUgc2NyZWVuXHJcbiAgY3R4LmZpbGxTdHlsZT1cIndoaXRlXCI7XHJcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgXHJcbiAgZy50aWNrcysrO1xyXG4gIGlmIChnLnRpY2tzJTMwPT09MCkgaW5pdCgpO1xyXG5cclxuICBvc2NpbGxhdGUob3NjWzJdKVxyXG4gIGlmICgoMTAwKm9zY1swXS5hKSUzPT09MCkge31cclxuICBpZiAob3NjWzBdLmE+MC43KSB7XHJcbiAgLy9jdHguZmlsbFN0eWxlPVwicmVkXCI7Y3R4LmZpbGxSZWN0KGdyYXZpdHkueCwgZ3Jhdml0eS55LCAxMCwgMTApO1xyXG4gIGlmIChvc2NbMF0uYT4wLjUpIGdyYXZpdHkuYW5zID0gcmFuZC5waWNrKFswLjAwMSwgMC4wMSwgMC4xXSk7XHJcbiAgZ3Jhdml0eS5hbmcgPSBncmF2aXR5LmFuZz4wP2dyYXZpdHkuYW5nK2dyYXZpdHkuYW5zOmdyYXZpdHkuYW5zO1xyXG4gIGdyYXZpdHkueCA9IGNhbnZhcy53aWR0aC8yK2dyYXZpdHkubCpNYXRoLmNvcyhncmF2aXR5LmFuZyk7XHJcbiAgZ3Jhdml0eS55ID1jYW52YXMuaGVpZ2h0LzIrZ3Jhdml0eS5sKk1hdGguc2luKGdyYXZpdHkuYW5nKTsgXHJcbiAgfVxyXG5cclxuICBvYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCwgb2JqZWN0KSB7XHJcbiAgICByZXR1cm5cclxuICAgIC8vIExpZmV0aW1lXHJcbiAgICBvYmoubGlmZWNvdW50ICs9IGVsYXBzZWQgKiA1MDtcclxuICAgIG9iai5hbHBoYSA9IDEtb2JqLmxpZmVjb3VudC9vYmoubGlmZXRpbWU7XHJcbiAgICBcclxuICAgIC8vIEtpbGxcclxuICAgIGlmIChvYmoubGlmZWNvdW50Pm9iai5saWZldGltZSkgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBpZiAob2JqLmxpZmVjb3VudD5vYmoubGlmZXRpbWUvMikgb2JqLmc9cmFuZC5waWNrKFstMSwwLDFdKTtcclxuICAgIFxyXG4gICAgLy8gR3Jhdml0eVxyXG4gICAgaWYgKG9iai5nIT09MCkge1xyXG4gICAgICBsZXQgW2R4LCBkeV0gPSBbZ3Jhdml0eS54IC0gb2JqLngsIGdyYXZpdHkueSAtIG9iai55XTtcclxuICAgICAgbGV0IGRyID0gTWF0aC5tYXgoMTAsIE1hdGguc3FydChkeCoqMi8xMDAwICsgZHkqKjIvMTAwMCkpO1xyXG4gICAgICBsZXQgW2F4LCBheV0gPSBbZHgvTWF0aC5hYnMoZHgpLCBkeS9NYXRoLmFicyhkeSldO1xyXG4gICAgICAvL29iai5zaXplID0gZHI7XHJcbiAgICAgIG9iai5keCArPSBvYmouZyAqIGVsYXBzZWQgKiBheCAqIGdyYXZpdHkuZiAvIGRyKioyO1xyXG4gICAgICBvYmouZHkgKz0gb2JqLmcgKiBlbGFwc2VkICogYXkgKiBncmF2aXR5LmYgLyBkcioqMjtcclxuICAgIH1cclxuICAgIGxldCBtYXggPSB7eDogMC41KzIwMCpvc2NbMF0ueC8yLCB5OiAwLjUrMjAwKm9zY1swXS54LzJ9O1xyXG4gICAgb2JqLmR4ID0gb2JqLmR4PjA/TWF0aC5taW4obWF4LngsIG9iai5keCk6TWF0aC5tYXgoLW1heC54LCBvYmouZHgpO1xyXG4gICAgb2JqLmR5ID0gb2JqLmR5PjA/TWF0aC5taW4obWF4LnksIG9iai5keSk6TWF0aC5tYXgoLW1heC55LCBvYmouZHkpO1xyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgY29sbGlzaW9uIGFnYWluc3QgdGhlIGNhbnZhcydzIGVkZ2VzXHJcbiAgICBpZiAob3NjWzBdLng+MC41KSBpZiAob2JqLnggLSBvYmouc2l6ZSA8IDAgJiYgb2JqLmR4IDwgMCB8fCBvYmoueCArIG9iai5zaXplID4gY2FudmFzLndpZHRoICYmIG9iai5keCA+IDApIG9iai5keCA9IC1vYmouZHggKiAwLjc7XHJcbiAgICBpZiAob3NjWzBdLnk+MC41KSBpZiAob2JqLnkgLSBvYmouc2l6ZSA8IDAgJiYgb2JqLmR5IDwgMCB8fCBvYmoueSArIG9iai5zaXplID4gY2FudmFzLmhlaWdodCAmJiBvYmouZHkgPiAwKSBvYmouZHkgPSAtb2JqLmR5ICogMC43O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBvYmogcG9zaXRpb25cclxuICAgIG9iai54ICs9IG9iai5keCAqIGVsYXBzZWQ7XHJcbiAgICBvYmoueSArPSBvYmouZHkgKiBlbGFwc2VkO1xyXG5cclxuICAgIC8vIFRyYW5zcGFyZW5jeVxyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gb2JqLmFscGhhO1xyXG4gICAgXHJcbiAgICAvLyBDb2xvclxyXG4gICAgaWYgKG9zY1swXS5hPjAuNSB8fCBvYmoueDwwKSBvYmouaHVlLmggPSAzNjAqb2JqLnNjYWxlLng7IGVsc2Ugb2JqLmh1ZS5oID0gMzYwKm9iai54L2NhbnZhcy53aWR0aDtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsKCR7b2JqLmh1ZS5ofSwgJHtvYmouaHVlLnN9JSwgJHtvYmouaHVlLmx9JSlgO1xyXG4gICAgXHJcbiAgICAvLyBTY2FsZVxyXG4gICAgb2JqLndpZHRoID0gb2JqLnNpemUqb2JqLnNjYWxlLng7XHJcbiAgICBvYmouaGVpZ2h0ID0gb2JqLnNpemUqb2JqLnNjYWxlLnk7XHJcbiAgICBcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iai54ICsgb2JqLndpZHRoLzIsIG9iai55ICsgb2JqLmhlaWdodC8yKTtcclxuICAgIGlmIChvYmoucm90KSBjdHgucm90YXRlKDcyMCpvYmouYWxwaGEqTWF0aC5QSS8xODApO1xyXG4gICAgLy9pZiAob2JqLnNjYWxlKSBjdHguc2NhbGUob2JqLnNjYWxlLngsIG9iai5zY2FsZS55KTtcclxuICAgIC8vIFNoYXBlXHJcbiAgICBpZiAob2JqLnR5cGU9PT1cIm9cIikge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoMCwgMCwgb2JqLnNpemUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgY3R4LmFyYyhvYmouc2l6ZS8yLCAwLCBvYmouc2l6ZSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguYXJjKG9iai5zaXplLCAwLCBvYmouc2l6ZSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguYXJjKG9iai5zaXplKjMvMiwgMCwgb2JqLnNpemUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIG9iai53aWR0aCwgb2JqLmhlaWdodCk7XHJcbiAgICAgIGN0eC5maWxsUmVjdCgtb2JqLmhlaWdodC8yLCAtb2JqLndpZHRoLzIsIG9iai5oZWlnaHQsIG9iai53aWR0aCk7XHJcbiAgICAgIC8vY3R4LmZpbGxSZWN0KG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGVudGl0aWVzLmZvckVhY2goKGVudCwgaW5kZXgpPT57XHJcbiAgICBlbnQudXBkYXRlKGVsYXBzZWQpO1xyXG4gICAgaWYgKGVudC5vYmpzICYmIGVudC5vYmpzLmxlbmd0aD09PTApIHJldHVybiBlbnRpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGVudC5yZW5kZXIoY3R4KTtcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJ2YXIgcm5nID0gcmVxdWlyZShcIi4vcm5nXCIpO1xyXG52YXIgcmFuZCA9IHJuZyhNYXRoLnJhbmRvbSgpKTtcclxudmFyIGRwID0gY29uc29sZS5sb2c7XHJcblxyXG52YXIgQnViYmxlcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIHt4OiAwLCB5OjAsIGhlaWdodDogMSwgbnVtOiByYW5kLnJhbmdlKDEwLCA0MCksIGh1ZTogMjQwLCBzaXplOiAyNSwgbGlmZXRpbWU6IDExMDAsIGdyYXZpdHk6IC0yMH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5veCA9IHRoaXMueDtcclxuICB0aGlzLm95ID0gdGhpcy55O1xyXG4gIHRoaXMuYW5nID0gMDtcclxuICB0aGlzLmFnZSA9IDA7XHJcbiAgdGhpcy5vYmpzID0gW107XHJcbiAgZm9yIChsZXQgaT0wOyBpPHRoaXMubnVtOyBpKyspIHtcclxuICAgIGxldCBhbmcgPSBNYXRoLlBJKmkvKHRoaXMubnVtLTEpO1xyXG4gICAgbGV0IGR5ID0gcmFuZC5yYW5nZSgtMzAsIDMwKTtcclxuICAgIGxldCBkc3kgPSAxLShkeSszMCkvNjA7XHJcbiAgICB0aGlzLm9ianMucHVzaCh7XHJcbiAgICAgIHg6IHRoaXMueCArIHJhbmQucmFuZ2UoLTMqdGhpcy5zaXplLCAzKnRoaXMuc2l6ZSksXHJcbiAgICAgIHk6IHRoaXMueSArIGR5LFxyXG4gICAgICBkeTogdGhpcy5ncmF2aXR5ICsgZHkqZHN5LFxyXG4gICAgICBsaWZlOiAwLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUgKiBkc3ksXHJcbiAgICAgIHNjYWxlOiByYW5kLnJhbmdlKDEsMyksXHJcbiAgICAgIGNvbDoge2g6IHRoaXMuaHVlICsgcmFuZC5yYW5nZSgtMTAsIDEwKSwgczogMzAsIGw6IDgwfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5CdWJibGVzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xyXG4gIHRoaXMuYW5nID0gKCsrdGhpcy5hbmcpJTM2MDtcclxuICB0aGlzLmFscGhhID0gTWF0aC5tYXgoMCwgMC42LXRoaXMuYWdlKTtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCwgb2JqcykgPT4ge1xyXG5cclxuICAgIC8vIExpZmV0aW1lXHJcbiAgICBvYmoubGlmZSArPSBkZWx0YSAqIDUwO1xyXG4gICAgb2JqLmFnZSA9ICh0aGlzLmhlaWdodC1vYmoueSkvdGhpcy5oZWlnaHQ7XHJcbiAgICBpZiAob2JqLmFnZSA+PSAxLjApIHJldHVybiBvYmpzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBcclxuICAgIC8vIEdyb3cgd2l0aCBhZ2VcclxuICAgIG9iai5zaXplID0gMSswLjUqb2JqLnNjYWxlKnRoaXMuc2l6ZSpvYmouYWdlO1xyXG5cclxuICAgIC8vIFBoeXNpY3MgYW5kIGdyYXZpdHlcclxuICAgIGxldCBsc2hpZnQgPSAxNSpvYmouYWdlO1xyXG4gICAgbGV0IHNoaWZ0ID0gMzYwICogaW5kZXgvb2Jqcy5sZW5ndGggKyByYW5kLnJhbmdlKC1sc2hpZnQsIGxzaGlmdCk7XHJcbiAgICBsZXQgbHNwZWVkID0gNDtcclxuICAgIGxldCBmbiA9IGluZGV4JTI9PT0wP01hdGguc2luOk1hdGguY29zO1xyXG4gICAgbGV0IGR4ID0gMC4xKihvYmoueS10aGlzLm95KSpmbigoc2hpZnQrdGhpcy5hbmcqbHNwZWVkKSpNYXRoLlBJLzE4MCk7XHJcbiAgICBvYmoueCA9IHRoaXMub3ggKyBkeDtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGRlbHRhO1xyXG4gICAgdGhpcy5hZ2UgPSBNYXRoLm1heCh0aGlzLmFnZSwgb2JqLmFnZSk7XHJcbiAgfSk7XHJcbn07XHJcbkJ1YmJsZXMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuYWxwaGE7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgsIG9ianMpID0+IHtcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBgaHNsKCR7b2JqLmNvbC5ofSwgJHtvYmouY29sLnN9JSwgJHtvYmouY29sLmx9JSlgO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmoueCwgb2JqLnkpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYygwLCAwLCBvYmouc2l6ZSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9KTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGVzOyIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG5cclxudmFyIEV4cGxvc2lvbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIHt4OiAwLCB5OjAsIG51bTogMjAwLCBkZDogMTAwLCBodWU6IDEyMCwgc2l6ZTogNSwgbGlmZXRpbWU6IDEwMCwgZ3Jhdml0eTogMiwgZGQ6IDEwMH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5vYmpzID0gW107XHJcbiAgZm9yIChsZXQgaT0wOyBpPHRoaXMubnVtOyBpKyspIHtcclxuICAgIGxldCBhbmcgPSBNYXRoLlBJKmkvKHRoaXMubnVtLTEpO1xyXG4gICAgdGhpcy5vYmpzLnB1c2goe1xyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgbGlmZTogMCxcclxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICBkeDogcmFuZC5yYW5nZSgtdGhpcy5kZCwgdGhpcy5kZCkqTWF0aC5jb3MoYW5nKSxcclxuICAgICAgZHk6IHJhbmQucmFuZ2UoLXRoaXMuZGQsIHRoaXMuZGQpKk1hdGguc2luKGFuZyktNCp0aGlzLmRkLFxyXG4gICAgICBjb2w6IHtoOiB0aGlzLmh1ZSArIHJhbmQucmFuZ2UoLTEwLCAxMCksIHM6IDgwLCBsOiA1MH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuRXhwbG9zaW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xyXG4gIHRoaXMub2Jqcy5mb3JFYWNoKChvYmosIGluZGV4LCBvYmpzKSA9PiB7XHJcblxyXG4gICAgLy8gTGlmZXRpbWVcclxuICAgIG9iai5saWZlICs9IGRlbHRhICogNTA7XHJcbiAgICBpZiAob2JqLmxpZmUgPiB0aGlzLmxpZmV0aW1lKSBvYmpzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBcclxuICAgIC8vIEZhZGUgd2l0aCBhZ2VcclxuICAgIG9iai5hbHBoYSA9IDEtb2JqLmxpZmUvdGhpcy5saWZldGltZTtcclxuXHJcbiAgICAvLyBQaHlzaWNzIGFuZCBncmF2aXR5XHJcbiAgICBvYmouZHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgb2JqLnggKz0gb2JqLmR4ICogZGVsdGE7XHJcbiAgICBvYmoueSArPSBvYmouZHkgKiBkZWx0YTtcclxuXHJcbiAgfSk7XHJcbn07XHJcbkV4cGxvc2lvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4KSB7XHJcbiAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5vYmpzWzBdLmFscGhhO1xyXG4gIHRoaXMub2Jqcy5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke29iai5jb2wuaH0sICR7b2JqLmNvbC5zfSUsICR7b2JqLmNvbC5sfSUpYDtcclxuICAgIGN0eC5maWxsUmVjdChvYmoueCwgb2JqLnksIG9iai5zaXplLCBvYmouc2l6ZSk7XHJcbiAgfSk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gRXhwbG9zaW9uOyIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG5cclxudmFyIEZpc2ggPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7eDogMCwgeTowLCBudW06IDEsIGh1ZTogMTIwLCBzaXplOiA1LCBsaWZldGltZTogMTAwLCBncmF2aXR5OiAyLCBkZDogMTAwfSk7XHJcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuICB0aGlzLm9ianMgPSBbXTtcclxuICBsZXQgZiA9IE1hdGguc3FydCh0aGlzLm51bSkqNTtcclxuICBmb3IgKGxldCBpPTA7IGk8dGhpcy5udW07IGkrKykge1xyXG4gICAgbGV0IGFuZyA9IE1hdGguUEkqaS90aGlzLm51bTtcclxuICAgIHRoaXMub2Jqcy5wdXNoKHtcclxuICAgICAgeDogdGhpcy54K3JhbmQucmFuZ2UoLXRoaXMuc2l6ZSpmLCB0aGlzLnNpemUqZiksXHJcbiAgICAgIHk6IHRoaXMueStyYW5kLnJhbmdlKC10aGlzLnNpemUqZiwgdGhpcy5zaXplKmYpLFxyXG4gICAgICBsaWZlOiAwLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUqcmFuZC5yYW5nZSgxMCwzMCkvMTAsXHJcbiAgICAgIGR4OiByYW5kLnBpY2soWzEsLTFdKSpyYW5kLnJhbmdlKHRoaXMuZGQvMiwgdGhpcy5kZCksXHJcbiAgICAgIGR5OiByYW5kLnJhbmdlKC10aGlzLmRkLzQsIHRoaXMuZGQvNCkqTWF0aC5zaW4oYW5nKSxcclxuICAgICAgY29sOiB7aDogdGhpcy5odWUgKyByYW5kLnJhbmdlKC0xMCwgMTApLCBzOiA4MCsgcmFuZC5yYW5nZSgtMTAsIDEwKSwgbDogNTArIHJhbmQucmFuZ2UoLTEwLCAxMCl9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbkZpc2gucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgsIG9ianMpID0+IHtcclxuXHJcbiAgICAvLyBMaWZldGltZVxyXG4gICAgb2JqLmxpZmUgKz0gZGVsdGEgKiA1MDtcclxuICAgIGlmIChvYmoubGlmZSA+IHRoaXMubGlmZXRpbWUpIG9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIFxyXG4gICAgLy8gUGh5c2ljcyBhbmQgZ3Jhdml0eVxyXG4gICAgb2JqLmR5ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgIG9iai54ICs9IG9iai5keCAqIGRlbHRhO1xyXG4gICAgb2JqLnkgKz0gb2JqLmR5ICogZGVsdGE7XHJcblxyXG4gIH0pO1xyXG59O1xyXG5GaXNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsKCR7b2JqLmNvbC5ofSwgJHtvYmouY29sLnN9JSwgJHtvYmouY29sLmx9JSlgO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmoueCArIG9iai5zaXplLzIsIG9iai55ICsgb2JqLnNpemUvMik7XHJcbiAgICBjdHguc2NhbGUoTWF0aC5hYnMob2JqLmR4KS9vYmouZHgsIDEpO1xyXG4gICAgbGV0IHUgPSBvYmouc2l6ZTtcclxuICAgIGNpcmNsZSgtMyp1LCAtdS8zLCB1LzQsIDMsIDEsIDIwLCAwLCAwLCAwLCAwLjgsIHRydWUpOyAvLyBUYWlsIHRvcFxyXG4gICAgY2lyY2xlKC0zKnUsIHUvMywgdS80LCAzLCAxLCAtMjAsIDAsIDAsIDAsIDAuOCwgdHJ1ZSk7IC8vIFRhaWwgYm90dG9tXHJcbiAgICBjaXJjbGUoMCwgMCwgdSwgMywgMSwgMCwgMCwgMCwgMCwgMSwgdHJ1ZSk7IC8vIEJvZHlcclxuICAgIGNpcmNsZSgyKnUsIC11LzQsIHUvNCwgMSwgMSwgMCwgMCwgMCwgMzAsIDEpOyAvLyBFeWVcclxuICAgIGNpcmNsZSgyKnUsIC11LzQsIHUvMTAsIDEsIDEsIDAsIDAsIDAsIC0xMDAsIDEpOyAvLyBFeWVcclxuICAgIC8vY2lyY2xlKDIqdSwgdS8zLCB1LzQsIDEsIDEsIDAsIDAsIDAsIDEwMCwgMSk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgZnVuY3Rpb24gY2lyY2xlKHgsIHksIHIsIHcsIGgsIHJvdCwgaHVlLCBzYXQsIGx1bSwgYWxwaGE9MSwgc3Ryb2tlPWZhbHNlKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsYSgke29iai5jb2wuaCtodWV9LCAke29iai5jb2wucytzYXR9JSwgJHtvYmouY29sLmwrbHVtfSUsICR7YWxwaGF9KWA7XHJcbiAgICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2VTdHlsZSA9IGBoc2xhKCR7b2JqLmNvbC5oK2h1ZX0sICR7b2JqLmNvbC5zK3NhdH0lLCAke29iai5jb2wubC0yMH0lLCAkezAuNX0pYDtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgIGlmIChyb3QpIGN0eC5yb3RhdGUocm90Kk1hdGguUEkvMTgwKTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguc2NhbGUodywgaCk7XHJcbiAgICAgIGN0eC5hcmMoMCwgMCwgciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2UoKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBGaXNoOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGRwOiBjb25zb2xlLmxvZ1xyXG5cdCxkcDE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGFyZ3MgPSBbXTtcclxuXHRcdGZvciAobGV0IGEgaW4gYXJndW1lbnRzKSBhcmdzLnB1c2godHlwZW9mIGFyZ3VtZW50c1thXSA9PSBcIm51bWJlclwiP2FyZ3VtZW50c1thXS50b0ZpeGVkKDIpOmFyZ3VtZW50c1thXSlcclxuXHRcdGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG5cdH1cclxuXHQsJDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxyXG59OyIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG5cclxudmFyIE9jZWFuID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3dpZHRoOiAwLCBoZWlnaHQ6MH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICB0aGlzLmltZy5zcmMgPSBcImJnLmpwZ1wiO1xyXG59O1xyXG5PY2Vhbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcclxufTtcclxuT2NlYW4ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gIGxldCBncmQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy53aWR0aC81MCwgdGhpcy5oZWlnaHQvMik7XHJcbiAgZ3JkLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMCwgMCwgMCwgMC4zMDApXCIpO1xyXG4gIGdyZC5hZGRDb2xvclN0b3AoMC4yLCBcInJnYmEoMjQsIDU4LCAxMjQsIDAuNjApXCIpO1xyXG4gIGdyZC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDQsIDIsIDI0LCAxKVwiKTtcclxuICBjdHguZmlsbFN0eWxlID0gZ3JkO1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gT2NlYW47IiwiLy8gSG9sZHMgbGFzdCBpdGVyYXRpb24gdGltZXN0YW1wLlxyXG52YXIgdGltZSA9IDA7XHJcblxyXG4vKipcclxuICogQ2FsbHMgYGZuYCBvbiBuZXh0IGZyYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm4ge2ludH0gVGhlIHJlcXVlc3QgSURcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiByYWYoZm4pIHtcclxuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgIHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICB2YXIgZWxhcHNlZCA9IG5vdyAtIHRpbWU7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiA5OTkpIHtcclxuICAgICAgZWxhcHNlZCA9IDEgLyA2MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsYXBzZWQgLz0gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lID0gbm93O1xyXG4gICAgZm4oZWxhcHNlZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxzIGBmbmAgb24gZXZlcnkgZnJhbWUgd2l0aCBgZWxhcHNlZGAgc2V0IHRvIHRoZSBlbGFwc2VkXHJcbiAgICogdGltZSBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7aW50fSBUaGUgcmVxdWVzdCBJRFxyXG4gICAqIEBhcGkgcHVibGljXHJcbiAgICovXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICByZXR1cm4gcmFmKGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xyXG4gICAgICBmbihlbGFwc2VkKTtcclxuICAgICAgcmFmKHRpY2spO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDYW5jZWxzIHRoZSBzcGVjaWZpZWQgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2ludH0gaWQgVGhlIHJlcXVlc3QgSURcclxuICAgKiBAYXBpIHB1YmxpY1xyXG4gICAqL1xyXG4gIHN0b3A6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWVkKSB7XHJcbiAgZnVuY3Rpb24gcmFuZG9tKCkge1xyXG4gICAgdmFyIHggPSBNYXRoLnNpbigwLjg3NjUxMTExNTk1OTI4MjggKyBzZWVkKyspICogMWU0XHJcbiAgICByZXR1cm4geCAtIE1hdGguZmxvb3IoeClcclxuICB9XHJcbiAgXHJcbiAgdmFyIHJuZyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGludGVnZXIgd2l0aGluIFswLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gW21heF1cclxuICAgICAqIEByZXR1cm4ge2ludH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGludDogZnVuY3Rpb24obWF4KSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSAqIChtYXggfHwgMHhmZmZmZmZmKSB8IDA7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBmbG9hdCB3aXRoaW4gWzAuMCwgMS4wKS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtmbG9hdH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGZsb2F0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHJhbmRvbSgpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgYm9vbGVhbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgYm9vbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSA+IDAuNTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbiBpbnRlZ2VyIHdpdGhpbiBbbWluLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gbWluXHJcbiAgICAgKiBAcGFyYW0gIHtpbnR9IG1heFxyXG4gICAgICogQHJldHVybiB7aW50fVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICAgIHJldHVybiBybmcuaW50KG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBQaWNrIGFuIGVsZW1lbnQgZnJvbSB0aGUgc291cmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge21peGVkW119IHNvdXJjZVxyXG4gICAgICogQHJldHVybiB7bWl4ZWR9XHJcbiAgICAgKiBAYXBpIHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBwaWNrOiBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHNvdXJjZVtybmcucmFuZ2UoMCwgc291cmNlLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBybmc7XHJcbn07XHJcbiJdfQ==
