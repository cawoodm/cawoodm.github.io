(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var raf = require("./raf");
var rng = require("./rng");
var f = require("./functions");
var Explosion = require("./explosion");

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
  entities.push(new Explosion({x: e.clientX, y: e.clientY, dd: 300, hue: rand.range(0, 360)}));
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

},{"./explosion":2,"./functions":3,"./raf":4,"./rng":5}],2:[function(require,module,exports){
var rng = require("./rng");
var rand = rng(Math.random());

var Explosion = function(options) {
  Object.assign(this, {x: 0, y:0, num: 200, hue: 120, size: 5, lifetime: 100, gravity: 2, dd: 100});
  Object.assign(this, options);
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
},{"./rng":5}],3:[function(require,module,exports){
module.exports = {
	dp: console.log
	,dp1: function() {
		let args = [];
		for (let a in arguments) args.push(typeof arguments[a] == "number"?arguments[a].toFixed(2):arguments[a])
		console.log.apply(console, args);
	}
	,$: document.querySelector.bind(document)
};
},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIi4vc3JjL21haW4iLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvZXhwbG9zaW9uLmpzIiwiQzovVXNlcnMvbWFyYy9Hb29nbGUgRHJpdmUvV29yay9KYXZhU2NyaXB0L2dhbWVzL2NhbnZhcy1wYXJ0aWNsZXMvc3JjL2Z1bmN0aW9ucy5qcyIsIkM6L1VzZXJzL21hcmMvR29vZ2xlIERyaXZlL1dvcmsvSmF2YVNjcmlwdC9nYW1lcy9jYW52YXMtcGFydGljbGVzL3NyYy9yYWYuanMiLCJDOi9Vc2Vycy9tYXJjL0dvb2dsZSBEcml2ZS9Xb3JrL0phdmFTY3JpcHQvZ2FtZXMvY2FudmFzLXBhcnRpY2xlcy9zcmMvcm5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciByYWYgPSByZXF1aXJlKFwiLi9yYWZcIik7XHJcbnZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciBmID0gcmVxdWlyZShcIi4vZnVuY3Rpb25zXCIpO1xyXG52YXIgRXhwbG9zaW9uID0gcmVxdWlyZShcIi4vZXhwbG9zaW9uXCIpO1xyXG5cclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuY2FudmFzLndpZHRoPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDsgLy93aW5kb3cuc2NyZWVuLndpZHRoL2F2YWlsV2lkdGhcclxuY2FudmFzLmhlaWdodD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0OyAvL2F2YWlsSGVpZ2h0XHJcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxudmFyIHJhbmQgPSBybmcoTWF0aC5yYW5kb20oKSk7XHJcbnZhciBkcD1mLmRwO1xyXG52YXIgZyA9IHdpbmRvdy5nID0ge307XHJcbnZhciBvYmpzID0gZy5vYmpzID0gW107XHJcbnZhciBvc2MgPSBnLm9zYyA9IFtdO1xyXG5vc2MucHVzaCh7YTpyYW5kLmZsb2F0KDEpfSlcclxub3NjLnB1c2goe2E6cmFuZC5mbG9hdCgxKX0pXHJcbm9zYy5wdXNoKHthOnJhbmQuZmxvYXQoMSl9KVxyXG5sZXQgZ3Jhdml0eSA9IGcuZ3Jhdml0eSA9IHtsOjEwMCwgeDpjYW52YXMud2lkdGgvMiwgeTpjYW52YXMuaGVpZ2h0LzIsIGY6MTAwMDAsIGFuczowLjAxLCBkOjF9O1xyXG5vc2NpbGxhdGUob3NjWzBdKTtcclxuZW50aXRpZXM9W107XHJcbmVudGl0aWVzLnB1c2gobmV3IEV4cGxvc2lvbih7eDogY2FudmFzLndpZHRoLzIsIHk6IGNhbnZhcy5oZWlnaHQvMiwgaHVlOiByYW5kLnJhbmdlKDAsIDM2MCl9KSk7XHJcbmNyZWF0ZUJhbGxzKCk7XHJcbnNldEludGVydmFsKCgpPT5jcmVhdGVCYWxscygpLCAxNTAwKVxyXG5zZXRJbnRlcnZhbCgoKT0+b3NjaWxsYXRlKG9zY1swXSksIDUwMDApXHJcbmZ1bmN0aW9uIG9zY2lsbGF0ZShvKSB7XHJcbiAgby5hID0gKCgxMCorK28uYSklMTApLzc7XHJcbiAgby54PU1hdGguY29zKG8uYSk7XHJcbiAgby55PU1hdGguc2luKG8uYSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQmFsbHMobykge1xyXG4gIGlmIChvYmpzLmxlbmd0aD4xMDAwKSByZXR1cm47XHJcbiAgbyA9IG98fHt9O1xyXG4gIG9zY2lsbGF0ZShvc2NbMV0pXHJcbiAgXHJcbiAgby54ID0gby54fHxjYW52YXMud2lkdGgvMjsvLytyYW5kLnJhbmdlKC1jYW52YXMud2lkdGgvNCwgY2FudmFzLndpZHRoLzQpO1xyXG4gIG8ueSA9IG8ueXx8Y2FudmFzLmhlaWdodC8yOy8vcmFuZC5pbnQoY2FudmFzLmhlaWdodCk7XHJcbiAgXHJcbiAgby5odWUgPSBvLmh1ZSB8fCB7XHJcbiAgICBoOiBvc2NbMF0uYSozNjAgLy8gSHVlXHJcbiAgICAsczogcmFuZC5yYW5nZSg1MCwgMTAwKSAvLyBTYXR1cmF0aW9uXHJcbiAgICAsbDogcmFuZC5yYW5nZSg1MCwgMTAwKVxyXG4gIH07XHJcbiAgLy8gU2l6ZVxyXG4gIG8uc3IgPSByYW5kLnJhbmdlKDQsMzYpO1xyXG4gIG8uc3ByZWFkID0ge3g6IHJhbmQucmFuZ2UoMTUwLCBjYW52YXMud2lkdGgpLCB5OiByYW5kLnJhbmdlKDUwLCBjYW52YXMuaGVpZ2h0LzIpfTtcclxuICBvLnNjYWxlID0ge3g6IG9zY1sxXS54LCB5OiBvc2NbMV0ueX07XHJcbiAgby5zID0gby5zfHxvLnNyKm9zY1swXS5hO1xyXG4gIFxyXG4gIG8ubnVtID0gby5udW18fG9zY1sxXS5hKjYwMDtcclxuICBvLnJvdCA9IG8ucm90fHxyYW5kLnBpY2soW3RydWUsIGZhbHNlXSk7XHJcbiAgby50eXBlID0gby50eXBlfHxvc2NbMV0uYT4wLjU/XCJyXCI6XCJvXCI7XHJcbiAgby5kZHggPSByYW5kLnBpY2soWy0xMDAsMCwxMDBdKTsvLyhNYXRoLnJvdW5kKG9zY1swXS5hKjEwKSUyPT09MCk/MTAwOjA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvLm51bTsgaSsrKSB7XHJcbiAgICBsZXQgYSA9IGkqMzYwL28ubnVtO1xyXG4gICAgb2Jqcy5wdXNoKHtcclxuICAgICAgeDogby54K28uc3ByZWFkLngqTWF0aC5zaW4oYSpNYXRoLlBJKVxyXG4gICAgICAseTogby55K28uc3ByZWFkLnkqTWF0aC5jb3Moby5zY2FsZS55Km8ucyppKk1hdGguUEkvMTgwKVxyXG4gICAgICAsc2l6ZTogby5zXHJcbiAgICAgICxzY2FsZTogby5zY2FsZVxyXG4gICAgICAsZzogTWF0aC5zaWduKG8uZGR4KVxyXG4gICAgICAsZHg6IG8uZGR4PT09MD9yYW5kLnJhbmdlKC0xMTAsIDExMCk6MFxyXG4gICAgICAsZHk6IG8uZGR4PT09MD9yYW5kLnJhbmdlKC0xMTAsIDExMCk6MFxyXG4gICAgICAsbGlmZXRpbWU6IHJhbmQucmFuZ2UoMjUwLCAzMDApXHJcbiAgICAgICxsaWZlY291bnQ6IDBcclxuICAgICAgLHJvdDogby5yb3RcclxuICAgICAgLHR5cGU6IG8udHlwZVxyXG4gICAgICAsaHVlOiBvLmh1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gIGVudGl0aWVzLnB1c2gobmV3IEV4cGxvc2lvbih7eDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFksIGRkOiAzMDAsIGh1ZTogcmFuZC5yYW5nZSgwLCAzNjApfSkpO1xyXG59KTtcclxuXHJcbnJhZi5zdGFydChmdW5jdGlvbihlbGFwc2VkKSB7XHJcbiAgLy8gQ2xlYXIgdGhlIHNjcmVlblxyXG4gIGN0eC5maWxsU3R5bGU9XCJibGFja1wiO1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIFxyXG4gIG9zY2lsbGF0ZShvc2NbMl0pXHJcbiAgXHJcbiAgaWYgKCgxMDAqb3NjWzBdLmEpJTM9PT0wKSB7fVxyXG4gIGlmIChvc2NbMF0uYT4wLjcpIHtcclxuICAvL2N0eC5maWxsU3R5bGU9XCJyZWRcIjtjdHguZmlsbFJlY3QoZ3Jhdml0eS54LCBncmF2aXR5LnksIDEwLCAxMCk7XHJcbiAgaWYgKG9zY1swXS5hPjAuNSkgZ3Jhdml0eS5hbnMgPSByYW5kLnBpY2soWzAuMDAxLCAwLjAxLCAwLjFdKTtcclxuICBncmF2aXR5LmFuZyA9IGdyYXZpdHkuYW5nPjA/Z3Jhdml0eS5hbmcrZ3Jhdml0eS5hbnM6Z3Jhdml0eS5hbnM7XHJcbiAgZ3Jhdml0eS54ID0gY2FudmFzLndpZHRoLzIrZ3Jhdml0eS5sKk1hdGguY29zKGdyYXZpdHkuYW5nKTtcclxuICBncmF2aXR5LnkgPWNhbnZhcy5oZWlnaHQvMitncmF2aXR5LmwqTWF0aC5zaW4oZ3Jhdml0eS5hbmcpOyBcclxuICB9XHJcblxyXG4gIG9ianMuZm9yRWFjaChmdW5jdGlvbihvYmosIGluZGV4LCBvYmplY3QpIHtcclxuICAgIFxyXG4gICAgLy8gTGlmZXRpbWVcclxuICAgIG9iai5saWZlY291bnQgKz0gZWxhcHNlZCAqIDUwO1xyXG4gICAgb2JqLmFscGhhID0gMS1vYmoubGlmZWNvdW50L29iai5saWZldGltZTtcclxuICAgIFxyXG4gICAgLy8gS2lsbFxyXG4gICAgaWYgKG9iai5saWZlY291bnQ+b2JqLmxpZmV0aW1lKSBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGlmIChvYmoubGlmZWNvdW50Pm9iai5saWZldGltZS8yKSBvYmouZz1yYW5kLnBpY2soWy0xLDAsMV0pO1xyXG4gICAgXHJcbiAgICAvLyBHcmF2aXR5XHJcbiAgICBpZiAob2JqLmchPT0wKSB7XHJcbiAgICAgIGxldCBbZHgsIGR5XSA9IFtncmF2aXR5LnggLSBvYmoueCwgZ3Jhdml0eS55IC0gb2JqLnldO1xyXG4gICAgICBsZXQgZHIgPSBNYXRoLm1heCgxMCwgTWF0aC5zcXJ0KGR4KioyLzEwMDAgKyBkeSoqMi8xMDAwKSk7XHJcbiAgICAgIGxldCBbYXgsIGF5XSA9IFtkeC9NYXRoLmFicyhkeCksIGR5L01hdGguYWJzKGR5KV07XHJcbiAgICAgIC8vb2JqLnNpemUgPSBkcjtcclxuICAgICAgb2JqLmR4ICs9IG9iai5nICogZWxhcHNlZCAqIGF4ICogZ3Jhdml0eS5mIC8gZHIqKjI7XHJcbiAgICAgIG9iai5keSArPSBvYmouZyAqIGVsYXBzZWQgKiBheSAqIGdyYXZpdHkuZiAvIGRyKioyO1xyXG4gICAgfVxyXG4gICAgbGV0IG1heCA9IHt4OiAwLjUrMjAwKm9zY1swXS54LzIsIHk6IDAuNSsyMDAqb3NjWzBdLngvMn07XHJcbiAgICBvYmouZHggPSBvYmouZHg+MD9NYXRoLm1pbihtYXgueCwgb2JqLmR4KTpNYXRoLm1heCgtbWF4LngsIG9iai5keCk7XHJcbiAgICBvYmouZHkgPSBvYmouZHk+MD9NYXRoLm1pbihtYXgueSwgb2JqLmR5KTpNYXRoLm1heCgtbWF4LnksIG9iai5keSk7XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBjb2xsaXNpb24gYWdhaW5zdCB0aGUgY2FudmFzJ3MgZWRnZXNcclxuICAgIGlmIChvc2NbMF0ueD4wLjUpIGlmIChvYmoueCAtIG9iai5zaXplIDwgMCAmJiBvYmouZHggPCAwIHx8IG9iai54ICsgb2JqLnNpemUgPiBjYW52YXMud2lkdGggJiYgb2JqLmR4ID4gMCkgb2JqLmR4ID0gLW9iai5keCAqIDAuNztcclxuICAgIGlmIChvc2NbMF0ueT4wLjUpIGlmIChvYmoueSAtIG9iai5zaXplIDwgMCAmJiBvYmouZHkgPCAwIHx8IG9iai55ICsgb2JqLnNpemUgPiBjYW52YXMuaGVpZ2h0ICYmIG9iai5keSA+IDApIG9iai5keSA9IC1vYmouZHkgKiAwLjc7XHJcblxyXG4gICAgLy8gVXBkYXRlIG9iaiBwb3NpdGlvblxyXG4gICAgb2JqLnggKz0gb2JqLmR4ICogZWxhcHNlZDtcclxuICAgIG9iai55ICs9IG9iai5keSAqIGVsYXBzZWQ7XHJcblxyXG4gICAgLy8gVHJhbnNwYXJlbmN5XHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSBvYmouYWxwaGE7XHJcbiAgICBcclxuICAgIC8vIENvbG9yXHJcbiAgICBpZiAob3NjWzBdLmE+MC41IHx8IG9iai54PDApIG9iai5odWUuaCA9IDM2MCpvYmouc2NhbGUueDsgZWxzZSBvYmouaHVlLmggPSAzNjAqb2JqLngvY2FudmFzLndpZHRoO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGBoc2woJHtvYmouaHVlLmh9LCAke29iai5odWUuc30lLCAke29iai5odWUubH0lKWA7XHJcbiAgICBcclxuICAgIC8vIFNjYWxlXHJcbiAgICBvYmoud2lkdGggPSBvYmouc2l6ZSpvYmouc2NhbGUueDtcclxuICAgIG9iai5oZWlnaHQgPSBvYmouc2l6ZSpvYmouc2NhbGUueTtcclxuICAgIFxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqLnggKyBvYmoud2lkdGgvMiwgb2JqLnkgKyBvYmouaGVpZ2h0LzIpO1xyXG4gICAgaWYgKG9iai5yb3QpIGN0eC5yb3RhdGUoNzIwKm9iai5hbHBoYSpNYXRoLlBJLzE4MCk7XHJcbiAgICAvL2lmIChvYmouc2NhbGUpIGN0eC5zY2FsZShvYmouc2NhbGUueCwgb2JqLnNjYWxlLnkpO1xyXG4gICAgLy8gU2hhcGVcclxuICAgIGlmIChvYmoudHlwZT09PVwib1wiKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYygwLCAwLCBvYmouc2l6ZSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguYXJjKG9iai5zaXplLzIsIDAsIG9iai5zaXplLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgIGN0eC5hcmMob2JqLnNpemUsIDAsIG9iai5zaXplLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgIGN0eC5hcmMob2JqLnNpemUqMy8yLCAwLCBvYmouc2l6ZSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KTtcclxuICAgICAgY3R4LmZpbGxSZWN0KC1vYmouaGVpZ2h0LzIsIC1vYmoud2lkdGgvMiwgb2JqLmhlaWdodCwgb2JqLndpZHRoKTtcclxuICAgICAgLy9jdHguZmlsbFJlY3Qob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9KTtcclxuXHJcbiAgZW50aXRpZXMuZm9yRWFjaCgoZW50LCBpbmRleCk9PntcclxuICAgIGVudC51cGRhdGUoZWxhcHNlZCk7XHJcbiAgICBpZiAoZW50Lm9ianMubGVuZ3RoPT09MCkgcmV0dXJuIGVudGl0aWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgZW50LnJlbmRlcihjdHgpO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9KTtcclxufSk7XHJcbiIsInZhciBybmcgPSByZXF1aXJlKFwiLi9ybmdcIik7XHJcbnZhciByYW5kID0gcm5nKE1hdGgucmFuZG9tKCkpO1xyXG5cclxudmFyIEV4cGxvc2lvbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICBPYmplY3QuYXNzaWduKHRoaXMsIHt4OiAwLCB5OjAsIG51bTogMjAwLCBodWU6IDEyMCwgc2l6ZTogNSwgbGlmZXRpbWU6IDEwMCwgZ3Jhdml0eTogMiwgZGQ6IDEwMH0pO1xyXG4gIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgdGhpcy5vYmpzID0gW107XHJcbiAgZm9yIChsZXQgaT0wOyBpPHRoaXMubnVtOyBpKyspIHtcclxuICAgIGxldCBhbmcgPSBNYXRoLlBJKmkvdGhpcy5udW07XHJcbiAgICB0aGlzLm9ianMucHVzaCh7XHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBsaWZlOiAwLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIGR4OiByYW5kLnJhbmdlKC10aGlzLmRkLCB0aGlzLmRkKSpNYXRoLmNvcyhhbmcpLFxyXG4gICAgICBkeTogcmFuZC5yYW5nZSgtdGhpcy5kZCwgdGhpcy5kZCkqTWF0aC5zaW4oYW5nKSxcclxuICAgICAgY29sOiB7aDogdGhpcy5odWUgKyByYW5kLnJhbmdlKC0xMCwgMTApLCBzOiA4MCwgbDogNTB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbkV4cGxvc2lvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcclxuICB0aGlzLm9ianMuZm9yRWFjaCgob2JqLCBpbmRleCwgb2JqcykgPT4ge1xyXG5cclxuICAgIC8vIExpZmV0aW1lXHJcbiAgICBvYmoubGlmZSArPSBkZWx0YSAqIDUwO1xyXG4gICAgaWYgKG9iai5saWZlID4gdGhpcy5saWZldGltZSkgb2Jqcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgXHJcbiAgICAvLyBGYWRlIHdpdGggYWdlXHJcbiAgICBvYmouYWxwaGEgPSAxLW9iai5saWZlL3RoaXMubGlmZXRpbWU7XHJcblxyXG4gICAgLy8gUGh5c2ljcyBhbmQgZ3Jhdml0eVxyXG4gICAgb2JqLmR5ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgIG9iai54ICs9IG9iai5keCAqIGRlbHRhO1xyXG4gICAgb2JqLnkgKz0gb2JqLmR5ICogZGVsdGE7XHJcblxyXG4gIH0pO1xyXG59O1xyXG5FeHBsb3Npb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCkge1xyXG4gIHRoaXMub2Jqcy5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSBvYmouYWxwaGE7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke29iai5jb2wuaH0sICR7b2JqLmNvbC5zfSUsICR7b2JqLmNvbC5sfSUpYDtcclxuICAgIGN0eC5maWxsUmVjdChvYmoueCwgb2JqLnksIG9iai5zaXplLCBvYmouc2l6ZSk7XHJcbiAgfSk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gRXhwbG9zaW9uOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGRwOiBjb25zb2xlLmxvZ1xyXG5cdCxkcDE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGFyZ3MgPSBbXTtcclxuXHRcdGZvciAobGV0IGEgaW4gYXJndW1lbnRzKSBhcmdzLnB1c2godHlwZW9mIGFyZ3VtZW50c1thXSA9PSBcIm51bWJlclwiP2FyZ3VtZW50c1thXS50b0ZpeGVkKDIpOmFyZ3VtZW50c1thXSlcclxuXHRcdGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xyXG5cdH1cclxuXHQsJDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxyXG59OyIsIi8vIEhvbGRzIGxhc3QgaXRlcmF0aW9uIHRpbWVzdGFtcC5cclxudmFyIHRpbWUgPSAwO1xyXG5cclxuLyoqXHJcbiAqIENhbGxzIGBmbmAgb24gbmV4dCBmcmFtZS5cclxuICpcclxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvblxyXG4gKiBAcmV0dXJuIHtpbnR9IFRoZSByZXF1ZXN0IElEXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gcmFmKGZuKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIHZhciBlbGFwc2VkID0gbm93IC0gdGltZTtcclxuXHJcbiAgICBpZiAoZWxhcHNlZCA+IDk5OSkge1xyXG4gICAgICBlbGFwc2VkID0gMSAvIDYwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxhcHNlZCAvPSAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWUgPSBub3c7XHJcbiAgICBmbihlbGFwc2VkKTtcclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgLyoqXHJcbiAgICogQ2FsbHMgYGZuYCBvbiBldmVyeSBmcmFtZSB3aXRoIGBlbGFwc2VkYCBzZXQgdG8gdGhlIGVsYXBzZWRcclxuICAgKiB0aW1lIGluIG1pbGxpc2Vjb25kcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb25cclxuICAgKiBAcmV0dXJuIHtpbnR9IFRoZSByZXF1ZXN0IElEXHJcbiAgICogQGFwaSBwdWJsaWNcclxuICAgKi9cclxuICBzdGFydDogZnVuY3Rpb24oZm4pIHtcclxuICAgIHJldHVybiByYWYoZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XHJcbiAgICAgIGZuKGVsYXBzZWQpO1xyXG4gICAgICByYWYodGljayk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENhbmNlbHMgdGhlIHNwZWNpZmllZCBhbmltYXRpb24gZnJhbWUgcmVxdWVzdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7aW50fSBpZCBUaGUgcmVxdWVzdCBJRFxyXG4gICAqIEBhcGkgcHVibGljXHJcbiAgICovXHJcbiAgc3RvcDogZnVuY3Rpb24oaWQpIHtcclxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlZWQpIHtcclxuICBmdW5jdGlvbiByYW5kb20oKSB7XHJcbiAgICB2YXIgeCA9IE1hdGguc2luKDAuODc2NTExMTE1OTU5MjgyOCArIHNlZWQrKykgKiAxZTRcclxuICAgIHJldHVybiB4IC0gTWF0aC5mbG9vcih4KVxyXG4gIH1cclxuICBcclxuICB2YXIgcm5nID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYW4gaW50ZWdlciB3aXRoaW4gWzAsIG1heCkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7aW50fSBbbWF4XVxyXG4gICAgICogQHJldHVybiB7aW50fVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgaW50OiBmdW5jdGlvbihtYXgpIHtcclxuICAgICAgcmV0dXJuIHJhbmRvbSgpICogKG1heCB8fCAweGZmZmZmZmYpIHwgMDtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhIGZsb2F0IHdpdGhpbiBbMC4wLCAxLjApLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Zsb2F0fVxyXG4gICAgICogQGFwaSBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgZmxvYXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gcmFuZG9tKCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBib29sZWFuLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKiBAYXBpIHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBib29sOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHJhbmRvbSgpID4gMC41O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGludGVnZXIgd2l0aGluIFttaW4sIG1heCkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7aW50fSBtaW5cclxuICAgICAqIEBwYXJhbSAge2ludH0gbWF4XHJcbiAgICAgKiBAcmV0dXJuIHtpbnR9XHJcbiAgICAgKiBAYXBpIHB1YmxpY1xyXG4gICAgICovXHJcbiAgICByYW5nZTogZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICAgICAgcmV0dXJuIHJuZy5pbnQobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFBpY2sgYW4gZWxlbWVudCBmcm9tIHRoZSBzb3VyY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7bWl4ZWRbXX0gc291cmNlXHJcbiAgICAgKiBAcmV0dXJuIHttaXhlZH1cclxuICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgKi9cclxuICAgIHBpY2s6IGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgICByZXR1cm4gc291cmNlW3JuZy5yYW5nZSgwLCBzb3VyY2UubGVuZ3RoKV07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJuZztcclxufTtcclxuIl19
