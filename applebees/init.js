const g = {
	ui: {
		fps: 60
		,blockSize: 100
		,gridWidth: 16
		,gridHeight: 16
	}
	,state: ""
	,entity: {}
	,levels:[]
};
//console.clear();

// Measure screen
g.ui.win = {
	width: window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth
	,height: window.innerHeight||document.documentElement.clientHeight||document.body.offsetHeight
};
// Use longest dimension as 16 blocks
if (g.ui.win.width>=g.ui.win.height) g.ui.gridHeight = Math.floor(g.ui.gridWidth*g.ui.win.height/g.ui.win.width);
else g.ui.gridWidth = Math.floor(g.ui.gridHeight*g.ui.win.width/g.ui.win.height);

g.ui.width = g.ui.blockSize*g.ui.gridWidth;
g.ui.height = g.ui.blockSize*g.ui.gridHeight;
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
	Images.add("sprites", "./resources/sprites.png");
	Images.add("bee", "./resources/bee.png");
	Images.add("grass", "./resources/grass.jpg");
	Images.onload(function() {
		if (location.hostname=="localhost") {
			if (location.search=="?title") return g.restart(true); // straight to game
			//$('#debug').style.display='block';
			g.restart(false); // straight to game
			if (location.search=="?gameover") return g.gameOver();
		}
		else g.restart(true);
	});
});