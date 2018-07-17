const g = {
	ui: {
		fps: 60
		,blockSize: 100
		,gridWidth: 16
		,gridHeight: 16
	}
	,state: ""
	,entity: {}
	,keys: {}
	,level:0
};
console.clear();
g.ui.width = g.ui.blockSize*g.ui.gridWidth;
g.ui.height = g.ui.blockSize*g.ui.gridHeight;
// Use max of screen
g.ui.win = {
	width: window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth
	,height: window.innerHeight||document.documentElement.clientHeight||document.body.offsetHeight
};
g.ui.scaleX = (g.ui.win.width/(g.ui.blockSize*g.ui.gridWidth));
g.ui.scaleY = (g.ui.win.height/(g.ui.blockSize*g.ui.gridHeight));

document.body.style.padding=document.body.style.margin="0px";
document.body.style.backgroundColor="#fff";
document.body.style.width=window.innerWidth+'px'
document.body.style.height=window.innerHeight+'px'
g.ui.canvas = document.createElement("canvas");
g.ctx = g.ui.canvas.getContext("2d");
g.ctx.imageSmoothingEnabled=false;
g.ui.canvas.width = window.innerWidth;
g.ui.canvas.height = window.innerHeight;
document.body.appendChild(g.ui.canvas);
g.ctx.scale(g.ui.scaleX, g.ui.scaleY);
window.addEventListener("load", function() {
	Images.add("apple", "./resources/apple.png");
	Images.add("bee", "./resources/bee.png");
	Images.add("bullet", "./resources/bullet.png");
	Images.add("grass", "./resources/grass.jpg");
	Images.add("player", "./resources/player.png");
	Images.add("wall", "./resources/wall.png");
	Images.onload(function() {
		//g.restart(true);
		g.restart(false); // straight to game
	});
});