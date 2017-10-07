(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var raf = require("./raf");
var rng = require("./rng");
var f = require("./functions");
var Explosion = require("./explosion");
var Fish = require("./fish");

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width=document.documentElement.clientWidth; //window.screen.width/availWidth
canvas.height=document.documentElement.clientHeight; //availHeight
var ctx = canvas.getContext("2d");

var rand = rng(Math.random());
var dp=f.dp;
var g = window.g = {};
var objs = g.objs = [];
var osc = g.osc = [];
osc.push({a:rand.float(1)})
osc.push({a:rand.float(1)})
osc.push({a:rand.float(1)})
let gravity = g.gravity = {l:100, x:canvas.width/2, y:canvas.height/2, f:10000, ans:0.01, d:1};
oscillate(osc[0]);
entities=[];
entities.push(new Explosion({x: canvas.width/2, y: canvas.height/2, hue: rand.range(0, 360)}));
createBalls();
setInterval(()=>createBalls(), 1500)
setInterval(()=>oscillate(osc[0]), 5000)
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
canvas.addEventListener("click", function(e) {
  entities.push(new Explosion({x: e.clientX, y: e.clientY, num: rand.range(100, 1500), gravity: 20, dd: 130, hue: rand.range(0, 360)}));
});

raf.start(function(elapsed) {
  // Clear the screen
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
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
    if (ent.objs.length===0) return entities.splice(index, 1);
    ctx.save();
    ent.render(ctx);
    ctx.restore();
  });
});

},{"./explosion":2,"./fish":3,"./functions":4,"./raf":5,"./rng":6}],2:[function(require,module,exports){
var rng = require("./rng");
var rand = rng(Math.random());

var Explosion = function(options) {
  Object.assign(this, {x: 0, y:0, num: 200, hue: 120, size: 5, lifetime: 100, gravity: 2, dd: 100});
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
  this.objs.forEach((obj, index) => {
    ctx.globalAlpha = obj.alpha;
    ctx.fillStyle = `hsl(${obj.col.h}, ${obj.col.s}%, ${obj.col.l}%)`;
    ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
  });
};
module.exports = Explosion;
},{"./rng":6}],3:[function(require,module,exports){
var rng = require("./rng");
var rand = rng(Math.random());

var Fish = function(options) {
  Object.assign(this, {x: 0, y:0, num: 1, hue: 120, size: 5, lifetime: 100, gravity: 2, dd: 100});
  Object.assign(this, options);
  console.log(this.num)
  this.objs = [];
  for (let i=0; i<this.num; i++) {
    let ang = Math.PI*i/this.num;
    this.objs.push({
      x: this.x,
      y: this.y,
      life: 0,
      size: this.size,
      dx: rand.range(-this.dd, this.dd)*Math.cos(ang),
      dy: rand.range(-this.dd, this.dd)*Math.sin(ang),
      col: {h: this.hue + rand.range(-10, 10), s: 80, l: 50}
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
    ctx.globalAlpha = obj.alpha;
    ctx.fillStyle = `hsl(${obj.col.h}, ${obj.col.s}%, ${obj.col.l}%)`;
    ctx.translate(obj.x + obj.size/2, obj.y + obj.size/2);
    ctx.beginPath();
    ctx.scale(4, 1);
    ctx.arc(0, 0, obj.size, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  });
};
module.exports = Fish;
},{"./rng":6}],4:[function(require,module,exports){
module.exports = {
	dp: console.log
	,dp1: function() {
		let args = [];
		for (let a in arguments) args.push(typeof arguments[a] == "number"?arguments[a].toFixed(2):arguments[a])
		console.log.apply(console, args);
	}
	,$: document.querySelector.bind(document)
};
},{}],5:[function(require,module,exports){
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
    var now = Date.now();
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

},{}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIi4vc3JjL21haW4iLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvZXhwbG9zaW9uLmpzIiwiQzovVXNlcnMvbWFyYy9Hb29nbGUgRHJpdmUvV29yay9KYXZhU2NyaXB0L2dhbWVzL2NhbnZhcy1wYXJ0aWNsZXMvc3JjL2Zpc2guanMiLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvZnVuY3Rpb25zLmpzIiwiQzovVXNlcnMvbWFyYy9Hb29nbGUgRHJpdmUvV29yay9KYXZhU2NyaXB0L2dhbWVzL2NhbnZhcy1wYXJ0aWNsZXMvc3JjL3JhZi5qcyIsIkM6L1VzZXJzL21hcmMvR29vZ2xlIERyaXZlL1dvcmsvSmF2YVNjcmlwdC9nYW1lcy9jYW52YXMtcGFydGljbGVzL3NyYy9ybmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgcmFmID0gcmVxdWlyZShcIi4vcmFmXCIpO1xyXG52YXIgcm5nID0gcmVxdWlyZShcIi4vcm5nXCIpO1xyXG52YXIgZiA9IHJlcXVpcmUoXCIuL2Z1bmN0aW9uc1wiKTtcclxudmFyIEV4cGxvc2lvbiA9IHJlcXVpcmUoXCIuL2V4cGxvc2lvblwiKTtcclxudmFyIEZpc2ggPSByZXF1aXJlKFwiLi9maXNoXCIpO1xyXG5cclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuY2FudmFzLndpZHRoPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDsgLy93aW5kb3cuc2NyZWVuLndpZHRoL2F2YWlsV2lkdGhcclxuY2FudmFzLmhlaWdodD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0OyAvL2F2YWlsSGVpZ2h0XHJcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcbnZhciBkcD1mLmRwO1xyXG52YXIgZyA9IHdpbmRvdy5nID0ge307XHJcbnZhciBvYmpzID0gZy5vYmpzID0gW107XHJcbnZhciBvc2MgPSBnLm9zYyA9IFtdO1xyXG5vc2MucHVzaCh7YTpyYW5kLmZsb2F0KDEpfSlcclxub3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbm9zYy5wdXNoKHthOnJhbmQuZmxvYXQoMSl9KVxyXG5sZXQgZ3Jhdml0eSA9IGcuZ3Jhdml0eSA9IHtsOjEwMCwgeDpjYW52YXMud2lkdGgvMiwgeTpjYW52YXMuaGVpZ2h0LzIsIGY6MTAwMDAsIGFuczowLjAxLCBkOjF9O1xyXG5vc2NpbGxhdGUob3NjWzBdKTtcclxuZW50aXRpZXM9W107XHJcbmVudGl0aWVzLnB1c2gobmV3IEV4cGxvc2lvbih7eDogY2FudmFzLndpZHRoLzIsIHk6IGNhbnZhcy5oZWlnaHQvMiwgaHVlOiByYW5kLnJhbmdlKDAsIDM2MCl9KSk7XHJcbmNyZWF0ZUJhbGxzKCk7XHJcbnNldEludGVydmFsKCgpPT5jcmVhdGVCYWxscygpLCAxNTAwKVxyXG5zZXRJbnRlcnZhbCgoKT0+b3NjaWxsYXRlKG9zY1swXSksIDUwMDApXHJcbmZ1bmN0aW9uIG9zY2lsbGF0ZShvKSB7XHJcbiAgby5hID0gKCgxMCorK28uYSklMTApLzc7XHJcbiAgby54PU1hdGguY29zKG8uYSk7XHJcbiAgby55PU1hdGguc2luKG8uYSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQmFsbHMobykge1xyXG4gIGlmIChvYmpzLmxlbmd0aD4xMDAwKSByZXR1cm47XHJcbiAgbyA9IG98fHt9O1xyXG4gIG9zY2lsbGF0ZShvc2NbMV0pXHJcbiAgXHJcbiAgby54ID0gby54fHxjYW52YXMud2lkdGgvMjsvLytyYW5kLnJhbmdlKC1jYW52YXMud2lkdGgvNCwgY2FudmFzLndpZHRoLzQpO1xyXG4gIG8ueSA9IG8ueXx8Y2FudmFzLmhlaWdodC8yOy8vcmFuZC5pbnQoY2FudmFzLmhlaWdodCk7XHJcbiAgXHJcbiAgby5odWUgPSBvLmh1ZSB8fCB7XHJcbiAgICBoOiBvc2NbMF0uYSozNjAgLy8gSHVlXHJcbiAgICAsczogcmFuZC5yYW5nZSg1MCwgMTAwKSAvLyBTYXR1cmF0aW9uXHJcbiAgICAsbDogcmFuZC5yYW5nZSg1MCwgMTAwKVxyXG4gIH07XHJcbiAgLy8gU2l6ZVxyXG4gIG8uc3IgPSByYW5kLnJhbmdlKDQsMzYpO1xyXG4gIG8uc3ByZWFkID0ge3g6IHJhbmQucmFuZ2UoMTUwLCBjYW52YXMud2lkdGgpLCB5OiByYW5kLnJhbmdlKDUwLCBjYW52YXMuaGVpZ2h0LzIpfTtcclxuICBvLnNjYWxlID0ge3g6IG9zY1sxXS54LCB5OiBvc2NbMV0ueX07XHJcbiAgby5zID0gby5zfHxvLnNyKm9zY1swXS5hO1xyXG4gIFxyXG4gIG8ubnVtID0gby5udW18fG9zY1sxXS5hKjYwMDtcclxuICBvLnJvdCA9IG8ucm90fHxyYW5kLnBpY2soW3RydWUsIGZhbHNlXSk7XHJcbiAgby50eXBlID0gby50eXBlfHxvc2NbMV0uYT4wLjU/XCJyXCI6XCJvXCI7XHJcbiAgby5kZHggPSByYW5kLnBpY2soWy0xMDAsMCwxMDBdKTsvLyhNYXRoLnJvdW5kKG9zY1swXS5hKjEwKSUyPT09MCk/MTAwOjA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvLm51bTsgaSsrKSB7XHJcbiAgICBsZXQgYSA9IGkqMzYwL28ubnVtO1xyXG4gICAgb2Jqcy5wdXNoKHtcclxuICAgICAgeDogby54K28uc3ByZWFkLngqTWF0aC5zaW4oYSpNYXRoLlBJKVxyXG4gICAgICAseTogby55K28uc3ByZWFkLnkqTWF0aC5jb3Moby5zY2FsZS55Km8ucyppKk1hdGguUEkvMTgwKVxyXG4gICAgICAsc2l6ZTogby5zXHJcbiAgICAgICxzY2FsZTogby5zY2FsZVxyXG4gICAgICAsZzogTWF0aC5zaWduKG8uZGR4KVxyXG4gICAgICAsZHg6IG8uZGR4PT09MD9yYW5kLnJhbmdlKC0xMTAsIDExMCk6MFxyXG4gICAgICAsZHk6IG8uZGR4PT09MD9yYW5kLnJhbmdlKC0xMTAsIDExMCk6MFxyXG4gICAgICAsbGlmZXRpbWU6IHJhbmQucmFuZ2UoMjUwLCAzMDApXHJcbiAgICAgICxsaWZlY291bnQ6IDBcclxuICAgICAgLHJvdDogby5yb3RcclxuICAgICAgLHR5cGU6IG8udHlwZVxyXG4gICAgICAsaHVlOiBvLmh1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gIGVudGl0aWVzLnB1c2gobmV3IEV4cGxvc2lvbih7eDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFksIG51bTogcmFuZC5yYW5nZSgxMDAsIDE1MDApLCBncmF2aXR5OiAyMCwgZGQ6IDEzMCwgaHVlOiByYW5kLnJhbmdlKDAsIDM2MCl9KSk7XHJcbn0pO1xyXG5cclxucmFmLnN0YXJ0KGZ1bmN0aW9uKGVsYXBzZWQpIHtcclxuICAvLyBDbGVhciB0aGUgc2NyZWVuXHJcbiAgY3R4LmZpbGxTdHlsZT1cImJsYWNrXCI7XHJcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgXHJcbiAgb3NjaWxsYXRlKG9zY1syXSlcclxuICBcclxuICBpZiAoKDEwMCpvc2NbMF0uYSklMz09PTApIHt9XHJcbiAgaWYgKG9zY1swXS5hPjAuNykge1xyXG4gIC8vY3R4LmZpbGxTdHlsZT1cInJlZFwiO2N0eC5maWxsUmVjdChncmF2aXR5LngsIGdyYXZpdHkueSwgMTAsIDEwKTtcclxuICBpZiAob3NjWzBdLmE+MC41KSBncmF2aXR5LmFucyA9IHJhbmQucGljayhbMC4wMDEsIDAuMDEsIDAuMV0pO1xyXG4gIGdyYXZpdHkuYW5nID0gZ3Jhdml0eS5hbmc+MD9ncmF2aXR5LmFuZytncmF2aXR5LmFuczpncmF2aXR5LmFucztcclxuICBncmF2aXR5LnggPSBjYW52YXMud2lkdGgvMitncmF2aXR5LmwqTWF0aC5jb3MoZ3Jhdml0eS5hbmcpO1xyXG4gIGdyYXZpdHkueSA9Y2FudmFzLmhlaWdodC8yK2dyYXZpdHkubCpNYXRoLnNpbihncmF2aXR5LmFuZyk7IFxyXG4gIH1cclxuXHJcbiAgb2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgsIG9iamVjdCkge1xyXG4gICAgcmV0dXJuXHJcbiAgICAvLyBMaWZldGltZVxyXG4gICAgb2JqLmxpZmVjb3VudCArPSBlbGFwc2VkICogNTA7XHJcbiAgICBvYmouYWxwaGEgPSAxLW9iai5saWZlY291bnQvb2JqLmxpZmV0aW1lO1xyXG4gICAgXHJcbiAgICAvLyBLaWxsXHJcbiAgICBpZiAob2JqLmxpZmVjb3VudD5vYmoubGlmZXRpbWUpIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgaWYgKG9iai5saWZlY291bnQ+b2JqLmxpZmV0aW1lLzIpIG9iai5nPXJhbmQucGljayhbLTEsMCwxXSk7XHJcbiAgICBcclxuICAgIC8vIEdyYXZpdHlcclxuICAgIGlmIChvYmouZyE9PTApIHtcclxuICAgICAgbGV0IFtkeCwgZHldID0gW2dyYXZpdHkueCAtIG9iai54LCBncmF2aXR5LnkgLSBvYmoueV07XHJcbiAgICAgIGxldCBkciA9IE1hdGgubWF4KDEwLCBNYXRoLnNxcnQoZHgqKjIvMTAwMCArIGR5KioyLzEwMDApKTtcclxuICAgICAgbGV0IFtheCwgYXldID0gW2R4L01hdGguYWJzKGR4KSwgZHkvTWF0aC5hYnMoZHkpXTtcclxuICAgICAgLy9vYmouc2l6ZSA9IGRyO1xyXG4gICAgICBvYmouZHggKz0gb2JqLmcgKiBlbGFwc2VkICogYXggKiBncmF2aXR5LmYgLyBkcioqMjtcclxuICAgICAgb2JqLmR5ICs9IG9iai5nICogZWxhcHNlZCAqIGF5ICogZ3Jhdml0eS5mIC8gZHIqKjI7XHJcbiAgICB9XHJcbiAgICBsZXQgbWF4ID0ge3g6IDAuNSsyMDAqb3NjWzBdLngvMiwgeTogMC41KzIwMCpvc2NbMF0ueC8yfTtcclxuICAgIG9iai5keCA9IG9iai5keD4wP01hdGgubWluKG1heC54LCBvYmouZHgpOk1hdGgubWF4KC1tYXgueCwgb2JqLmR4KTtcclxuICAgIG9iai5keSA9IG9iai5keT4wP01hdGgubWluKG1heC55LCBvYmouZHkpOk1hdGgubWF4KC1tYXgueSwgb2JqLmR5KTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGNvbGxpc2lvbiBhZ2FpbnN0IHRoZSBjYW52YXMncyBlZGdlc1xyXG4gICAgaWYgKG9zY1swXS54PjAuNSkgaWYgKG9iai54IC0gb2JqLnNpemUgPCAwICYmIG9iai5keCA8IDAgfHwgb2JqLnggKyBvYmouc2l6ZSA+IGNhbnZhcy53aWR0aCAmJiBvYmouZHggPiAwKSBvYmouZHggPSAtb2JqLmR4ICogMC43O1xyXG4gICAgaWYgKG9zY1swXS55PjAuNSkgaWYgKG9iai55IC0gb2JqLnNpemUgPCAwICYmIG9iai5keSA8IDAgfHwgb2JqLnkgKyBvYmouc2l6ZSA+IGNhbnZhcy5oZWlnaHQgJiYgb2JqLmR5ID4gMCkgb2JqLmR5ID0gLW9iai5keSAqIDAuNztcclxuXHJcbiAgICAvLyBVcGRhdGUgb2JqIHBvc2l0aW9uXHJcbiAgICBvYmoueCArPSBvYmouZHggKiBlbGFwc2VkO1xyXG4gICAgb2JqLnkgKz0gb2JqLmR5ICogZWxhcHNlZDtcclxuXHJcbiAgICAvLyBUcmFuc3BhcmVuY3lcclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IG9iai5hbHBoYTtcclxuICAgIFxyXG4gICAgLy8gQ29sb3JcclxuICAgIGlmIChvc2NbMF0uYT4wLjUgfHwgb2JqLng8MCkgb2JqLmh1ZS5oID0gMzYwKm9iai5zY2FsZS54OyBlbHNlIG9iai5odWUuaCA9IDM2MCpvYmoueC9jYW52YXMud2lkdGg7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke29iai5odWUuaH0sICR7b2JqLmh1ZS5zfSUsICR7b2JqLmh1ZS5sfSUpYDtcclxuICAgIFxyXG4gICAgLy8gU2NhbGVcclxuICAgIG9iai53aWR0aCA9IG9iai5zaXplKm9iai5zY2FsZS54O1xyXG4gICAgb2JqLmhlaWdodCA9IG9iai5zaXplKm9iai5zY2FsZS55O1xyXG4gICAgXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmoueCArIG9iai53aWR0aC8yLCBvYmoueSArIG9iai5oZWlnaHQvMik7XHJcbiAgICBpZiAob2JqLnJvdCkgY3R4LnJvdGF0ZSg3MjAqb2JqLmFscGhhKk1hdGguUEkvMTgwKTtcclxuICAgIC8vaWYgKG9iai5zY2FsZSkgY3R4LnNjYWxlKG9iai5zY2FsZS54LCBvYmouc2NhbGUueSk7XHJcbiAgICAvLyBTaGFwZVxyXG4gICAgaWYgKG9iai50eXBlPT09XCJvXCIpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKDAsIDAsIG9iai5zaXplLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgIGN0eC5hcmMob2JqLnNpemUvMiwgMCwgb2JqLnNpemUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgY3R4LmFyYyhvYmouc2l6ZSwgMCwgb2JqLnNpemUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgY3R4LmFyYyhvYmouc2l6ZSozLzIsIDAsIG9iai5zaXplLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBvYmoud2lkdGgsIG9iai5oZWlnaHQpO1xyXG4gICAgICBjdHguZmlsbFJlY3QoLW9iai5oZWlnaHQvMiwgLW9iai53aWR0aC8yLCBvYmouaGVpZ2h0LCBvYmoud2lkdGgpO1xyXG4gICAgICAvL2N0eC5maWxsUmVjdChvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH0pO1xyXG5cclxuICBlbnRpdGllcy5mb3JFYWNoKChlbnQsIGluZGV4KT0+e1xyXG4gICAgZW50LnVwZGF0ZShlbGFwc2VkKTtcclxuICAgIGlmIChlbnQub2Jqcy5sZW5ndGg9PT0wKSByZXR1cm4gZW50aXRpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBlbnQucmVuZGVyKGN0eCk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwidmFyIHJuZyA9IHJlcXVpcmUoXCIuL3JuZ1wiKTtcclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcblxyXG52YXIgRXhwbG9zaW9uID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgbnVtOiAyMDAsIGh1ZTogMTIwLCBzaXplOiA1LCBsaWZldGltZTogMTAwLCBncmF2aXR5OiAyLCBkZDogMTAwfSk7XHJcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuICB0aGlzLm9ianMgPSBbXTtcclxuICBmb3IgKGxldCBpPTA7IGk8dGhpcy5udW07IGkrKykge1xyXG4gICAgbGV0IGFuZyA9IE1hdGguUEkqaS8odGhpcy5udW0tMSk7XHJcbiAgICB0aGlzLm9ianMucHVzaCh7XHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBsaWZlOiAwLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIGR4OiByYW5kLnJhbmdlKC10aGlzLmRkLCB0aGlzLmRkKSpNYXRoLmNvcyhhbmcpLFxyXG4gICAgICBkeTogcmFuZC5yYW5nZSgtdGhpcy5kZCwgdGhpcy5kZCkqTWF0aC5zaW4oYW5nKS00KnRoaXMuZGQsXHJcbiAgICAgIGNvbDoge2g6IHRoaXMuaHVlICsgcmFuZC5yYW5nZSgtMTAsIDEwKSwgczogODAsIGw6IDUwfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5FeHBsb3Npb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgsIG9ianMpID0+IHtcclxuXHJcbiAgICAvLyBMaWZldGltZVxyXG4gICAgb2JqLmxpZmUgKz0gZGVsdGEgKiA1MDtcclxuICAgIGlmIChvYmoubGlmZSA+IHRoaXMubGlmZXRpbWUpIG9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIFxyXG4gICAgLy8gRmFkZSB3aXRoIGFnZVxyXG4gICAgb2JqLmFscGhhID0gMS1vYmoubGlmZS90aGlzLmxpZmV0aW1lO1xyXG5cclxuICAgIC8vIFBoeXNpY3MgYW5kIGdyYXZpdHlcclxuICAgIG9iai5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICBvYmoueCArPSBvYmouZHggKiBkZWx0YTtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGRlbHRhO1xyXG5cclxuICB9KTtcclxufTtcclxuRXhwbG9zaW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gb2JqLmFscGhhO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGBoc2woJHtvYmouY29sLmh9LCAke29iai5jb2wuc30lLCAke29iai5jb2wubH0lKWA7XHJcbiAgICBjdHguZmlsbFJlY3Qob2JqLngsIG9iai55LCBvYmouc2l6ZSwgb2JqLnNpemUpO1xyXG4gIH0pO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEV4cGxvc2lvbjsiLCJ2YXIgcm5nID0gcmVxdWlyZShcIi4vcm5nXCIpO1xyXG52YXIgcmFuZCA9IHJuZyhNYXRoLnJhbmRvbSgpKTtcclxuXHJcbnZhciBGaXNoID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywge3g6IDAsIHk6MCwgbnVtOiAxLCBodWU6IDEyMCwgc2l6ZTogNSwgbGlmZXRpbWU6IDEwMCwgZ3Jhdml0eTogMiwgZGQ6IDEwMH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgY29uc29sZS5sb2codGhpcy5udW0pXHJcbiAgdGhpcy5vYmpzID0gW107XHJcbiAgZm9yIChsZXQgaT0wOyBpPHRoaXMubnVtOyBpKyspIHtcclxuICAgIGxldCBhbmcgPSBNYXRoLlBJKmkvdGhpcy5udW07XHJcbiAgICB0aGlzLm9ianMucHVzaCh7XHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBsaWZlOiAwLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIGR4OiByYW5kLnJhbmdlKC10aGlzLmRkLCB0aGlzLmRkKSpNYXRoLmNvcyhhbmcpLFxyXG4gICAgICBkeTogcmFuZC5yYW5nZSgtdGhpcy5kZCwgdGhpcy5kZCkqTWF0aC5zaW4oYW5nKSxcclxuICAgICAgY29sOiB7aDogdGhpcy5odWUgKyByYW5kLnJhbmdlKC0xMCwgMTApLCBzOiA4MCwgbDogNTB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbkZpc2gucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgsIG9ianMpID0+IHtcclxuXHJcbiAgICAvLyBMaWZldGltZVxyXG4gICAgb2JqLmxpZmUgKz0gZGVsdGEgKiA1MDtcclxuICAgIGlmIChvYmoubGlmZSA+IHRoaXMubGlmZXRpbWUpIG9ianMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIFxyXG4gICAgLy8gRmFkZSB3aXRoIGFnZVxyXG4gICAgb2JqLmFscGhhID0gMS1vYmoubGlmZS90aGlzLmxpZmV0aW1lO1xyXG5cclxuICAgIC8vIFBoeXNpY3MgYW5kIGdyYXZpdHlcclxuICAgIG9iai5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICBvYmoueCArPSBvYmouZHggKiBkZWx0YTtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGRlbHRhO1xyXG5cclxuICB9KTtcclxufTtcclxuRmlzaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4KSB7XHJcbiAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSBvYmouYWxwaGE7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke29iai5jb2wuaH0sICR7b2JqLmNvbC5zfSUsICR7b2JqLmNvbC5sfSUpYDtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqLnggKyBvYmouc2l6ZS8yLCBvYmoueSArIG9iai5zaXplLzIpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LnNjYWxlKDQsIDEpO1xyXG4gICAgY3R4LmFyYygwLCAwLCBvYmouc2l6ZSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfSk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gRmlzaDsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRkcDogY29uc29sZS5sb2dcclxuXHQsZHAxOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBhcmdzID0gW107XHJcblx0XHRmb3IgKGxldCBhIGluIGFyZ3VtZW50cykgYXJncy5wdXNoKHR5cGVvZiBhcmd1bWVudHNbYV0gPT0gXCJudW1iZXJcIj9hcmd1bWVudHNbYV0udG9GaXhlZCgyKTphcmd1bWVudHNbYV0pXHJcblx0XHRjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuXHR9XHJcblx0LCQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudClcclxufTsiLCIvLyBIb2xkcyBsYXN0IGl0ZXJhdGlvbiB0aW1lc3RhbXAuXHJcbnZhciB0aW1lID0gMDtcclxuXHJcbi8qKlxyXG4gKiBDYWxscyBgZm5gIG9uIG5leHQgZnJhbWUuXHJcbiAqXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb25cclxuICogQHJldHVybiB7aW50fSBUaGUgcmVxdWVzdCBJRFxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIHJhZihmbikge1xyXG4gIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XHJcbiAgICB2YXIgZWxhcHNlZCA9IG5vdyAtIHRpbWU7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiA5OTkpIHtcclxuICAgICAgZWxhcHNlZCA9IDEgLyA2MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsYXBzZWQgLz0gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lID0gbm93O1xyXG4gICAgZm4oZWxhcHNlZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxzIGBmbmAgb24gZXZlcnkgZnJhbWUgd2l0aCBgZWxhcHNlZGAgc2V0IHRvIHRoZSBlbGFwc2VkXHJcbiAgICogdGltZSBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7aW50fSBUaGUgcmVxdWVzdCBJRFxyXG4gICAqIEBhcGkgcHVibGljXHJcbiAgICovXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICByZXR1cm4gcmFmKGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xyXG4gICAgICBmbihlbGFwc2VkKTtcclxuICAgICAgcmFmKHRpY2spO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDYW5jZWxzIHRoZSBzcGVjaWZpZWQgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2ludH0gaWQgVGhlIHJlcXVlc3QgSURcclxuICAgKiBAYXBpIHB1YmxpY1xyXG4gICAqL1xyXG4gIHN0b3A6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWVkKSB7XHJcbiAgZnVuY3Rpb24gcmFuZG9tKCkge1xyXG4gICAgdmFyIHggPSBNYXRoLnNpbigwLjg3NjUxMTExNTk1OTI4MjggKyBzZWVkKyspICogMWU0XHJcbiAgICByZXR1cm4geCAtIE1hdGguZmxvb3IoeClcclxuICB9XHJcbiAgXHJcbiAgdmFyIHJuZyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGludGVnZXIgd2l0aGluIFswLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gW21heF1cclxuICAgICAqIEByZXR1cm4ge2ludH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGludDogZnVuY3Rpb24obWF4KSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSAqIChtYXggfHwgMHhmZmZmZmZmKSB8IDA7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBmbG9hdCB3aXRoaW4gWzAuMCwgMS4wKS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtmbG9hdH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIGZsb2F0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHJhbmRvbSgpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgYm9vbGVhbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgYm9vbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiByYW5kb20oKSA+IDAuNTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbiBpbnRlZ2VyIHdpdGhpbiBbbWluLCBtYXgpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge2ludH0gbWluXHJcbiAgICAgKiBAcGFyYW0gIHtpbnR9IG1heFxyXG4gICAgICogQHJldHVybiB7aW50fVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICAgIHJldHVybiBybmcuaW50KG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBQaWNrIGFuIGVsZW1lbnQgZnJvbSB0aGUgc291cmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge21peGVkW119IHNvdXJjZVxyXG4gICAgICogQHJldHVybiB7bWl4ZWR9XHJcbiAgICAgKiBAYXBpIHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBwaWNrOiBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHNvdXJjZVtybmcucmFuZ2UoMCwgc291cmNlLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBybmc7XHJcbn07XHJcbiJdfQ==
