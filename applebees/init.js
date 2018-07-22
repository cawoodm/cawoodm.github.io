const g = {
	ui: {
		fps: 60
		,blockSize: 100
		,gridWidth: 16
		,gridHeight: 16
		,blocksInView: 8
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

g.ui.width = g.ui.blockSize*g.ui.gridWidth;
g.ui.height = g.ui.blockSize*g.ui.gridHeight;
g.ui.fullWidth=window.innerWidth;
g.ui.fullHeight=window.innerHeight;
g.ui.scaleX = (g.ui.win.width/(g.ui.blockSize*g.ui.blocksInView));
g.ui.scaleY = (g.ui.win.height/(g.ui.blockSize*g.ui.blocksInView));
// Keep proportions by scaling both dimensions equally
if (g.ui.scaleX>g.ui.scaleY) g.ui.scaleX=g.ui.scaleY; else g.ui.scaleY=g.ui.scaleX;
// No up-scaling (i.e. if screen is large enough, use 1:1)
if (g.ui.scaleX>1){g.ui.scaleX=g.ui.scaleY=1}

g.ui.vWidth=g.ui.win.width/g.ui.scaleX;
g.ui.vHeight=g.ui.win.height/g.ui.scaleY;

document.body.style.padding=document.body.style.margin="0px";
document.body.style.backgroundColor="#fff";
document.body.style.width=window.innerWidth+'px'
document.body.style.height=window.innerHeight+'px'
g.ui.canvas = document.createElement("canvas");
document.body.appendChild(g.ui.canvas);
g.ctx = g.ui.canvas.getContext("2d");
//g.ctx.imageSmoothingEnabled=false;
// Canvas must exactly fit window or we have mobile swipe woes
g.ui.canvas.width=g.ui.win.width;
g.ui.canvas.height=g.ui.win.height;
//g.ui.canvas.width = window.innerWidth;
//g.ui.canvas.height = window.innerHeight;
g.ctx.scale(g.ui.scaleX, g.ui.scaleY);
window.addEventListener("load", function() {
	ImageLoader.add("sprites", "./resources/sprites.png");
	ImageLoader.add("grass", "./resources/grass.jpg");
	ImageLoader.onload(function() {
		if (location.hostname=="localhost") {
			if (location.search=="?title") return g.restart(true); // straight to game
			//$('#debug').style.display='block';
			g.restart(false); // straight to game
			if (location.search=="?gameover") return g.gameOver();
		}
		else g.restart(true);
	});
});