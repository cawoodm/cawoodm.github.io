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
	if (g.scene) g.scene.entities.length = 0;
	g.scenes = {
		title: {entities: [new TitleScreen({text: "Apple-Beeeezzz"})]}
		,levels: []
		,gameOver: {entities: [new GameOver({text: "Game Over"})]}
		,gameWon: {entities: [new GameOver({text: "Congratulations, you won!"})]}
	};
	for (let i=1; i<20; i++) makeLevel(i);
	if (title) {
		g.state="title";
		g.scene = g.scenes.title;
	} else {
		// New Game
		g.state="play";
		g.level=0;
		g.stats = new Stats({x: 35, y: 26, scale:3});
		g.collider = new Collider;
		g.nextLevel();
	}
	g.start();
};
g.nextLevel = function() {
	if (g.level == g.scenes.levels.length) return g.gameWon();
	g.level++;
	g.scene = g.scenes.levels[g.level-1];
	g.entity.add(g.stats);
	g.entity.add(g.collider);
	g.player = g.entity.add(new Player({x: 3*g.ui.blockSize, y: 3*g.ui.blockSize}));
	g.player.velocity += 1;
	g.sounds.music.play();
};
function makeLevel(level) {
	// Add a new scene
	g.scenes.levels.push({entities: []});
	g.scene = g.scenes.levels[g.scenes.levels.length-1]
	// Make grass
	g.entity.add(new Sprite({x: g.ui.blockSize, y: g.ui.blockSize, sprite: 'grass', w: g.ui.gridWidth*g.ui.blockSize, h: g.ui.gridHeight*g.ui.blockSize}));
	
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
				grid[i][j]='w';
	
	// Make inside walls (1:20 i.e. 5%)
	for (let i=1; i<g.ui.gridWidth-2; i++)
		for (let j=1; j<g.ui.gridHeight-2; j++)
			if (rnd(0,20)==10) grid[i][j]='w';

	// Make Bees
	for (let i=0; i<level; i++) {
		let x = rnd(4, g.ui.gridWidth-2)
		let y = rnd(4, g.ui.gridHeight-2)
		grid[x][y]='b';
	}

	// Make Apples
	for (let i=0; i<2+2*level; i++) {
		let x = rnd(1, g.ui.gridWidth-2);
		let y = rnd(1, g.ui.gridHeight-2);
		grid[x][y] = 'a';
	}

	// Place objects on grid
	for (let i=0; i<g.ui.gridWidth; i++) for (let j=0; j<g.ui.gridHeight; j++)
	switch(grid[i][j]) {
		case 'w': g.entity.add(new Wall({x: i*g.ui.blockSize, y:j*g.ui.blockSize, size: g.ui.blockSize})); break;
		case 'b': g.entity.add(new Bee({x: i*g.ui.blockSize, y: j*g.ui.blockSize, velocity: 3+(g.level)})); break;
		case 'a': g.entity.add(new Apple({x: i*g.ui.blockSize, y: j*g.ui.blockSize})); break;
	}
		
}
g.entity.add = function(ent) {
	g.scene.entities.push(ent);
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
	g.state="gameWon";
	g.scene = g.scenes.gameWon;
	g.sounds.music.pause();g.sounds.music.currentTime=0;
};
g.gameOver = function() {
	g.state="gameOver";
	g.entity.remove(g.player);g.player=null;
	g.entity.add(new Message({text:"Game Over"}))
	//g.scene = g.scenes.gameOver;
	g.entity.add(g.stats);
	g.sounds.music.pause();g.sounds.music.currentTime=0;
	g.sounds.lose.play();
};
g.gameUpdate = function(delta) {
	g.scene.entities.forEach(function(ent) {
		if (typeof ent.update === "function") ent.update(delta);
	}, this);
};
g.gameRender = function() {
	
	g.ctx.clearRect(0, 0, g.ui.canvas.width, g.ui.canvas.height);

	g.scene.entities.forEach(function(ent) {
		if (typeof ent.renderer === "function") {
			g.ctx.save();
			ent.renderer(g.ctx);
			g.ctx.restore();
		}
	}, this);
	
	//if (g.state=="gameOver") g.halt(g.state);
	
};
