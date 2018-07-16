/*global g*/
g.ui.keys = {
	left: Keyboard(["a", "ArrowLeft"]) // left arrow
	,right: Keyboard(["d", "ArrowRight"]) // right arrow
	,up: Keyboard(["w", "ArrowUp"])
	,down: Keyboard(["s", "ArrowDown"])
	,fire: Keyboard(" ") // space
	,fireM: Keyboard("click") // Mouse click
	,debug: Keyboard("clickCtrl") // Mouse click
};
g.ui.keys.left.down = function() {
	if (g.state!="play") return;
	g.player.speed.y=g.player.acc.y=0;
	g.player.speed.x=-g.player.velocity;
	//if(g.player.acc.x>-0.2) g.player.acc.x -= 0.1;
	//if (g.player.speed.x>=0) {g.player.acc.x = -0.1; g.player.speed.x = -0.75;}
};
g.ui.keys.right.down = function() {
	if (g.state!="play") return;
	g.player.speed.y=g.player.acc.y=0;
	g.player.speed.x=g.player.velocity;
	//if(g.player.acc.x<0.2) g.player.acc.x += 0.1;
	//if (g.player.speed.x<=0) {g.player.acc.x = 0.1; g.player.speed.x = 0.75;}
};
g.ui.keys.up.down = function() {
	if (g.state!="play") return;
	g.player.speed.x=g.player.acc.x=0;
	g.player.speed.y=-g.player.velocity;
	//if(g.player.acc.y>-0.2) g.player.acc.y -= 0.1;
	//if (g.player.speed.y>=0) {g.player.acc.y = -0.1; g.player.speed.y = -0.75;}
};
g.ui.keys.down.down = function() {
	if (g.state!="play") return;
	g.player.speed.x=g.player.acc.x=0;
	g.player.speed.y=g.player.velocity;
	//if(g.player.acc.y<0.2) g.player.acc.y += 0.1;
	//if (g.player.speed.y<=0) {g.player.acc.y = 0.1; g.player.speed.y = 0.75;}
};
g.ui.keys.fire.press = function(e) {
	if (g.state!="play") return g.restart();
	if (!e.touches) return;
	x = e.touches[0].clientX / g.ui.scaleX;
	y = e.touches[0].clientY / g.ui.scaleY;
	if (y > g.ui.height/4 && y < g.ui.height*3/4) {
		if (x < g.ui.width/4) return g.ui.keys.left.down()
		else if (x > g.ui.width*3/4) return g.ui.keys.right.down()
	} else if (x > g.ui.width/4 && x < g.ui.width*3/4) {
		if (y < g.ui.height/4) return g.ui.keys.up.down()
		else if (y > g.ui.height*3/4) return g.ui.keys.down.down()
	}
	g.entity.add(new Bullet({x: g.player.x, y: g.player.y, speed: g.player.speed.x}));
}
g.ui.keys.fireM.press = g.ui.keys.fire.press;

function Keyboard(keyCode) {
	var key = {};
	key.codes = Array.isArray(keyCode)?keyCode:[keyCode];
	key.isDown = false;
	key.isUp = true;

	key.downHandler = function(event) {
		if (event.key === key.codes || key.codes.includes(event.key)) {
			if (key.down) key.down();
			else if (key.isUp && key.press) key.press();
			key.isDown = true;
			key.isUp = false;
			event.preventDefault();
		}
	};

	key.upHandler = function(event) {
		if (event.key === key.codes || key.codes.includes(event.key)) {
			if (key.isDown && key.release) key.release();
			key.isDown = false;
			key.isUp = true;
			event.preventDefault();
		}
	};
	key.clickHandler = function(event) {
		key.press(event);
		//event.preventDefault();
	}

	if (keyCode!=="click") {
		window.addEventListener("keydown", key.downHandler.bind(key), false);
		window.addEventListener("keyup", key.upHandler.bind(key), false);
	} else {
		//g.ui.canvas
		//document.addEventListener("mousedown", key.clickHandler.bind(key), false);
		document.addEventListener("touchstart", key.clickHandler.bind(key), false);
	}
	return key;
}
