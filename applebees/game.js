/*global g*/
g.init = function() {
	g.ui.blockSize=100
	g.ui.gridWidth=16
	g.ui.gridHeight=16
	g.ui.blocksInView=8

	// UI Sizing
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

	g.ctx.scale(g.ui.scaleX, g.ui.scaleY);

	g.ImageLoader.add("sprites", "./resources/sprites.png");
	g.ImageLoader.add("grass", "./resources/grass.jpg");

	return ()=>{g.restart(true)}
}
g.restart = function(title) {
	// Cleanup
	g.Halt();
	g.scene = new g.Scene();
	g.level=0;
	g.camera = new Camera({w: g.ui.vWidth, h: g.ui.vHeight, box: 200});
	if (title) {
		g.state="title";
		g.scene.add(new GameTitle());
	} else {
		// New Game
		g.stats = new Stats();
		g.collider = new Collider;
		g.nextLevel();
	}
	g.Start();
};
g.nextLevel = function(level) {
	level = level || g.level+1;
	g.scene = new g.Scene();
	if (!g.loadLevel(level)) return g.gameWon();
	g.level = level;
	g.state="play";
	g.player = g.scene.get("player")[0];
	g.scene.add(g.camera);
	g.scene.add(g.stats);
	g.scene.add(g.collider);
	// Mobile version can't have music and sfx
	if (!navigator.userAgent.match(/iPhone|iPod|iPad/)) g.sounds.music.play();
};
g.loadLevel = function(level) {
	if (g.level >= g.levels.length-1) return false;
	// Get our grid
	let grid = g.levels[level];

	// Add grass
	g.scene.add(new Sprite({x: 0, y: 0, tag: 'grass', sprite: 'grass', w: g.ui.width, h: g.ui.height+g.ui.blockSize, scale:1}));

	// Place objects on grid
	for (let j=0; j<g.ui.gridHeight; j++) for (let i=0; i<g.ui.gridWidth; i++) {switch(grid[i][j]) {
		case 1: g.scene.add(new Wall({x: i*g.ui.blockSize, y:j*g.ui.blockSize, size: g.ui.blockSize})); break;
		case 2: g.scene.add(new Apple({x: i*g.ui.blockSize, y: j*g.ui.blockSize})); break;
		case 3: g.scene.add(new Bee({x: i*g.ui.blockSize, y: j*g.ui.blockSize, velocity: 3+(level/3)})); break;
		case 9: g.scene.add(new Player({x: i*g.ui.blockSize, y: j*g.ui.blockSize})); break;
	}}
	return true;
}
function makeLevel(level) {
	// Add a new scene
	g.scenes.levels.push({entities: []});
	g.scene = g.scenes.levels[g.scenes.levels.length-1]
	// Make grass
	g.scene.add(new Sprite({x: 0, y: 0, sprite: 'grass', w: g.ui.width+g.ui.blockSize, h: g.ui.height+g.ui.blockSize, scale: 1}));
	// Build a grid
	let grid = [];
	for (let i=0; i<g.ui.gridWidth; i++) {
		grid.push([]);
		for (let j=0; j<g.ui.gridHeight; j++)
			grid[grid.length-1].push(0);
	}
	// Make outside walls
	for (let i=0; i<g.ui.gridWidth; i++)
		for (let j=0; j<g.ui.gridHeight; j++)
			if (j==0 || j==g.ui.gridHeight-1 || i==0 || i==g.ui.gridWidth-1)
				grid[i][j]=grid[i][j]==0?1:grid[i][j];
	
	// Make inside walls (1:20 i.e. 5%)
	for (let i=1; i<g.ui.gridWidth-2; i++)
		for (let j=1; j<g.ui.gridHeight-2; j++)
			if (rnd(0,5)==0) grid[i][j]=grid[i][j]==0?1:grid[i][j];

	// Make Bees
	let count=0; do {
		let x = rnd(4, g.ui.gridWidth-2)
		let y = rnd(4, g.ui.gridHeight-2)
		if (grid[x][y]) continue;
		grid[x][y]=3;
		count++;
	} while (count < level)

	// Make Apples
	count=0; do {
		let x = rnd(1, g.ui.gridWidth-2);
		let y = rnd(1, g.ui.gridHeight-2);
		if (grid[x][y]) continue;
		grid[x][y] = 2;
		count++;
	} while (count < 2+2*level)

	// Overwrite 3,3 with the player
	grid[3][3]=9;
	// Add Player before everything else so it appears "under" walls
	g.scene.add(new Player({x: 3*g.ui.blockSize, y: 3*g.ui.blockSize}));

	// Place objects on grid
	for (let i=0; i<g.ui.gridWidth; i++) for (let j=0; j<g.ui.gridHeight; j++)
	switch(grid[i][j]) {
		//case 1: g.scene.add(new Wall({x: i*g.ui.blockSize+(j>0&&j<g.ui.gridHeight-1?(i==0?-g.ui.blockSize/2:i==g.ui.gridWidth-1?g.ui.blockSize/2:0):0), y:j*g.ui.blockSize+(i>0&&i<g.ui.gridWidth-1?(j==0?-g.ui.blockSize/2:j==g.ui.gridHeight-1?g.ui.blockSize/2:0):0), size: g.ui.blockSize})); break;
		case 1: g.scene.add(new Wall({x: i*g.ui.blockSize, y:j*g.ui.blockSize, size: g.ui.blockSize})); break;
		case 2: g.scene.add(new Apple({x: i*g.ui.blockSize, y: j*g.ui.blockSize})); break;
		case 3: g.scene.add(new Bee({x: i*g.ui.blockSize, y: j*g.ui.blockSize, velocity: 3+(level/3)})); break;
	}
	//dp("level["+level+"]=", JSON.stringify(grid))
}
g.gameWon = function() {
	g.state="message";
	g.scene.remove(g.collider); //Stop collisions
	g.scene.add(new GameWon());
	g.sounds.music.pause();g.sounds.music.currentTime=0;
};
g.gameOver = function() {
	g.state="message";
	g.scene.remove(g.collider); //Stop collisions
	g.scene.add(new GameOver());
	g.sounds.music.pause();g.sounds.music.currentTime=0;
	g.sounds.lose.play();
};
g.preGameRender = function(ctx) {
	let w = g.ui.canvas.width/g.ui.scaleX
	let h = g.ui.canvas.height/g.ui.scaleY;
	ctx.fillStyle='#035'
	ctx.fillRect(-w, -h, 2*w, 2*h);
};