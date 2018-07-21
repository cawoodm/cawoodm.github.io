/*global g*/
g.ui.keys = {
	left: Keyboard(["KeyA", "ArrowLeft"]) // left arrow
	,right: Keyboard(["KeyD", "ArrowRight"]) // right arrow
	,up: Keyboard(["KeyW", "ArrowUp"])
	,down: Keyboard(["KeyS", "ArrowDown"])
	,fire: Keyboard("Space") // space
	,fireM: Keyboard("click") // Mouse click
	,debug: Keyboard("clickCtrl") // Mouse click
};
g.ui.keys.left.down = function() {
	if (g.state!="play") return;
	g.player.move(Vector.left())
};
g.ui.keys.right.down = function() {
	if (g.state!="play") return;
	g.player.move(Vector.right())
};
g.ui.keys.up.down = function() {
	if (g.state!="play") return;
	g.player.move(Vector.up())
};
g.ui.keys.down.down = function() {
	if (g.state!="play") return;
	g.player.move(Vector.down())
};
g.ui.keys.fire.press = function(e) {
	if (g.state!="play") return g.restart();
	if (!e || !e.touches) g.player.shoot();
	return;
	x = e.touches[0].clientX / g.ui.scaleX;
	y = e.touches[0].clientY / g.ui.scaleY;
	if (y > g.ui.height/4 && y < g.ui.height*3/4) {
		if (x < g.ui.width/4) return g.ui.keys.left.down()
		else if (x > g.ui.width*3/4) return g.ui.keys.right.down()
	} else if (x > g.ui.width/4 && x < g.ui.width*3/4) {
		if (y < g.ui.height/4) return g.ui.keys.up.down()
		else if (y > g.ui.height*3/4) return g.ui.keys.down.down()
	}
}
g.ui.keys.fireM.press = g.ui.keys.fire.press;

function Keyboard(keyCode) {
	var key = {};
	key.codes = Array.isArray(keyCode)?keyCode:[keyCode];
	key.isDown = false;
	key.isUp = true;

	key.downHandler = function(event) {
		if (key.codes.includes(event.code)) {
			if (key.down) key.down();
			else if (key.isUp && key.press) key.press();
			key.isDown = true;
			key.isUp = false;
			event.preventDefault();
		} //elseif
	};

	key.upHandler = function(event) {
		if (key.codes.includes(event.code)) {
			if (key.isDown && key.release) key.release();
			key.isDown = false;
			key.isUp = true;
			event.preventDefault();
		}
	};
	key.clickHandler = function(event) {
		key.press(event);
		//chrome error event.preventDefault();
	}

	if (keyCode!=="click") {
		window.addEventListener("keydown", key.downHandler.bind(key), false);
		window.addEventListener("keyup", key.upHandler.bind(key), false);
	} else {
		document.addEventListener("touchstart", key.clickHandler.bind(key), false);
	}
	return key;
}

// Swiping
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchend', handleTouchEnd, false);        
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;                  
var yDown = null;  
var never=null;                
function handleTouchStart(evt) {
	evt.preventDefault();
	xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
    if (never) return;
    g.sounds.ping.play();
    never=true;
}
function handleTouchEnd(evt) {
	if(xDown) g.ui.keys.fire.press();
}
function handleTouchMove(evt) {
    if (!xDown || !yDown) return;
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) g.ui.keys.left.down()
		else g.ui.keys.right.down()
    } else {
		if (yDiff > 0) g.ui.keys.up.down()
		else g.ui.keys.down.down()                                                              
    }
    xDown = null;
    yDown = null;       
}
