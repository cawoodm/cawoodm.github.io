// ImageLoader: Handles image loading
ImageLoader = {
    get: {},
    loaded: 0,
    imageCount: 0,
    onloadCallBack: null,
    checkLoaded: function() {
        this.loaded++;
        if (this.loaded == this.imageCount && typeof this.onloadCallBack == "function") this.onloadCallBack();
    },
    add: function(name, src) {
        let img = new Image();
        img.src = src;
        let that=this;
        img.onload = this.checkLoaded.bind(this);
        this.get[name]=img;
        this.imageCount++;
    },
    onload: function(fcn) {
        this.onloadCallBack=fcn;
    }
}

// Ticker: Handles the game loop
Ticker = function(fps, updateCallBack, renderCallback) {
	this.state = "stop";
	this._fps = fps;
	this.ticks = 0;
	this._frameMillis = 1000 / fps;
	this._updateCallBack = updateCallBack;
	this._renderCallback = renderCallback;
};
Ticker.prototype.start = function() {
	this.state = "go";
	this.lastUpdate=this.lastDraw=window.performance.now();
	this.loop();
};
Ticker.prototype.loop = function() {
	if (this.state=="stop") return;
	window.requestAnimationFrame(this.loop.bind(this));
	this.ticks++;
	let now = window.performance.now();
    let drawDiff = now - this.lastDraw;
    this.actualFPS = 1000/drawDiff;
    let updateDiff = now - this.lastUpdate||0;
	// 2s passed without drawing -> halt game
	//if (drawDiff>2000) return this.state="stop";
	this._updateCallBack(updateDiff/this._frameMillis);
	this.lastUpdate = now;
	// if enough time has elapsed, draw the next frame
	if (drawDiff > this._frameMillis) {
		this.lastDraw = now - (drawDiff % this._frameMillis);
		this._renderCallback();
	}
};
Ticker.prototype.stop = function() {this.state="stop";};

// Sprite: Draw an image on the screen
function Sprite(options) {
	this.x = options.x || 0;
	this.y = options.y  || 0;
	this.w = options.w || g.ui.blockSize;
    this.h = options.h || g.ui.blockSize;
    this.offX = options.offX || 0;
    this.offY = options.offY || 0;
    this.scale = options.scale || 1;
    this.center = options.center || false;
    this.img = ImageLoader.get[options.sprite];
    return this;
}
Sprite.prototype.renderer = function(ctx) {
    ctx.save();
    this.offW = this.w * this.scale;
    this.offH = this.h * this.scale;
    if (this.center) g.ctx.translate(-this.offW/2, -this.offH/2)
    ctx.drawImage(this.img, this.offX, this.offY, this.w, this.h, this.x, this.y, this.offW, this.offH);
    ctx.restore();
}

// Vector: Vector stuff
const Vector = {
    norm: (vec)=>{let m = Vector.mag(vec);return {x: vec.x/m, y: vec.y/m}},
    mag: (vec)=>{return Math.sqrt(Math.pow(vec.x, 2)+Math.pow(vec.y, 2))},
    subtract: (v1, v2)=>{return {x: v1.x-v2.x, y: v1.y-v2.y}},
    right: ()=>{return {x: 1, y: 0}},
    left: ()=>{return {x: -1, y: 0}},
    up: ()=>{return {x: 0, y: -1}},
    down: ()=>{return {x: 0, y: 1}}
}