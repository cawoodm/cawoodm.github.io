/*global g*/
g.start = function() {
	this.ticker = new Ticker(this.ui.fps, function (delta) {
		g.gameUpdate(delta);
	}, function() {
		g.gameRender();
	});
	g.ticker.start();
};
g.pause=function() {
	if (g.state=="gameOver") {
		g.restart();
	} else if (g.ticker.state=="stop") {
		g.state="play";
		g.ticker.start();
	} else {
		g.ticker.stop();
		g.sounds.music.pause();
		g.state="pause";
	}
};
g.halt=function(state){
	if (!g.ticker) return;
	g.ticker.stop();
	g.state=state||"halt";
}
g.step=function() {
	g.gameUpdate(1);
	g.gameRender();
}
g.restart = function(title) {
	// Cleanup
	g.halt();
	g.scene = {};
	g.level=0;
	g.scenes = {
		title: {entities: [new TitleScreen({text: "Apple-Beeeezzz"})]}
		,levels: []
		,gameWon: {entities: [new GameOver({text: "Congratulations, you won!"})]}
	};
	for (let i=1; i<20; i++) makeLevel(i);
	if (title) {
		g.state="title";
		g.scene = g.scenes.title;
	} else {
		// New Game
		g.stats = new Stats({x: 15, y: 26, scale:2});
		g.collider = new Collider;
		g.camera = new Camera({w: g.ui.vWidth, h: g.ui.vHeight, box: 200});
		g.nextLevel();
	}
	g.start();
};
g.nextLevel = function(level) {
	level = level || g.level+1;
	if (!g.loadLevel(level)) return g.gameWon();
	//g.scene = g.scenes.levels[g.level];
	g.level = level;
	g.state="play";
	g.player = g.entity.get("player")[0];
	g.entity.add(g.camera);
	g.entity.add(g.stats);
	g.entity.add(g.collider);
	// Mobile version can't have music and sfx
	if (!navigator.userAgent.match(/iPhone|iPod|iPad/)) g.sounds.music.play();
};
g.loadLevel = function(level) {
	if (g.level >= g.levels.length-1) return false;
	// Get our grid
	let grid = g.levels[level];
	// Clear the sceene
	g.scene.entities=[];

	// Add grass
	g.entity.add(new Sprite({x: 0, y: 0, tag: 'grass', sprite: 'grass', w: g.ui.width, h: g.ui.height+g.ui.blockSize, scale:1}));

	// Place objects on grid
	for (let j=0; j<g.ui.gridHeight; j++) for (let i=0; i<g.ui.gridWidth; i++) {switch(grid[i][j]) {
		case 1: g.entity.add(new Wall({x: i*g.ui.blockSize, y:j*g.ui.blockSize, size: g.ui.blockSize})); break;
		case 2: g.entity.add(new Apple({x: i*g.ui.blockSize, y: j*g.ui.blockSize})); break;
		case 3: g.entity.add(new Bee({x: i*g.ui.blockSize, y: j*g.ui.blockSize, velocity: 3+(level/3)})); break;
		case 9: g.entity.add(new Player({x: i*g.ui.blockSize, y: j*g.ui.blockSize})); break;
	}}
	return true;
}
function makeLevel(level) {
	// Add a new scene
	g.scenes.levels.push({entities: []});
	g.scene = g.scenes.levels[g.scenes.levels.length-1]
	// Make grass
	g.entity.add(new Sprite({x: 0, y: 0, sprite: 'grass', w: g.ui.width+g.ui.blockSize, h: g.ui.height+g.ui.blockSize, scale: 1}));
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
	g.entity.add(new Player({x: 3*g.ui.blockSize, y: 3*g.ui.blockSize}));

	// Place objects on grid
	for (let i=0; i<g.ui.gridWidth; i++) for (let j=0; j<g.ui.gridHeight; j++)
	switch(grid[i][j]) {
		//case 1: g.entity.add(new Wall({x: i*g.ui.blockSize+(j>0&&j<g.ui.gridHeight-1?(i==0?-g.ui.blockSize/2:i==g.ui.gridWidth-1?g.ui.blockSize/2:0):0), y:j*g.ui.blockSize+(i>0&&i<g.ui.gridWidth-1?(j==0?-g.ui.blockSize/2:j==g.ui.gridHeight-1?g.ui.blockSize/2:0):0), size: g.ui.blockSize})); break;
		case 1: g.entity.add(new Wall({x: i*g.ui.blockSize, y:j*g.ui.blockSize, size: g.ui.blockSize})); break;
		case 2: g.entity.add(new Apple({x: i*g.ui.blockSize, y: j*g.ui.blockSize})); break;
		case 3: g.entity.add(new Bee({x: i*g.ui.blockSize, y: j*g.ui.blockSize, velocity: 3+(level/3)})); break;
	}
	//dp("level["+level+"]=", JSON.stringify(grid))
}
g.entity.add = function(ent) {
	g.scene.entities.push(ent);
	return ent;
};
g.entity.insert = function(ent) {
	g.scene.entities.splice(0, 0, ent);
	return ent;
};
g.entity.remove = function(ent) {
	if (typeof ent.length == "number") ents = ent; else ents = [ent]
	for(let j=0; j < ents.length; j++)
		for(let i=0; i < g.scene.entities.length; i++)
			if (g.scene.entities[i] == ents[j]) g.scene.entities.splice(i,1);
};
g.entity.get = function(tag) {
	result=[];
	g.scene.entities.forEach(function(ent) {
		if (!tag || ent.tag === tag) result.push(ent);
	}, this);
	return result;
};
g.entity.count = function(tag) {
	return this.get(tag).length;
};
g.gameWon = function() {
	g.state="message";
	g.entity.remove(g.collider); //Stop collisions
	g.entity.add(new GameWon());
	g.sounds.music.pause();g.sounds.music.currentTime=0;
};
g.gameOver = function() {
	g.state="message";
	g.entity.remove(g.collider); //Stop collisions
	g.entity.add(new GameOver());
	g.sounds.music.pause();g.sounds.music.currentTime=0;
	g.sounds.lose.play();
};
g.gameUpdate = function(delta) {
	g.scene.entities.forEach(function(ent) {
		if (typeof ent.update === "function") ent.update(delta);
	}, this);
};
g.gameRender = function() {
	g.ctx.fillStyle='#035'
	g.ctx.fillRect(-g.ui.width, -g.ui.height, 2*g.ui.width, 2*g.ui.height);
	g.ctx.save();
	if (g.camera) g.ctx.translate(-g.camera.x, -g.camera.y)
	g.scene.entities.forEach(function(ent) {
		if (typeof ent.renderer === "function") {
			g.ctx.save();
			if (ent.static && g.camera) g.ctx.translate(g.camera.x, g.camera.y)
			if (!g.camera || g.camera.canSee(ent)) ent.renderer(g.ctx);
			g.ctx.restore();
		}
	}, this);
	g.ctx.restore();
};
