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
		g.sounds.music.stop();
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
		g.stats = new Stats({x: 10, y: 26, scale:3});
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
	g.player = g.entity.add(new Player({x: rnd(1, 3)*g.ui.blockSize, y: rnd(1, 3)*g.ui.blockSize}));
	g.player.velocity += 1;
	g.sounds.music.play();
};
function makeLevel(level) {
	// Add a new scene
	g.scenes.levels.push({entities: []});
	g.scene = g.scenes.levels[g.scenes.levels.length-1]
	// Make grass
	g.entity.add(new Sprite({x: g.ui.blockSize, y: g.ui.blockSize, sprite: 'grass', w: g.ui.gridWidth*g.ui.blockSize, h: g.ui.gridHeight*g.ui.blockSize}));
	// Make walls
	for (let i=0; i<g.ui.gridWidth; i++)
		for (let j=0; j<g.ui.gridHeight; j++)
			if (j==0 || j==g.ui.gridHeight-1 || i==0 || i==g.ui.gridWidth-1)
				g.entity.add(new Wall({x: i*g.ui.blockSize, y:j*g.ui.blockSize, size: g.ui.blockSize}));
	// Make Bees
	for (let i=0; i<level; i++)
		g.entity.add(new Bee({x: rnd(4, g.ui.gridWidth-2)*g.ui.blockSize, y: rnd(4, g.ui.gridWidth-2)*g.ui.blockSize, velocity: 3+(g.level)}));
	// Make Apples
	for (let i=0; i<2+2*level; i++) {
		let x = rnd(1, g.ui.gridWidth-2)*g.ui.blockSize;
		let y = rnd(1, g.ui.gridHeight-2)*g.ui.blockSize;
		g.entity.add(new Apple({x: x, y: y}));
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
g.entity.collides = function(tag1, tag2) {
	let e1s = g.entity.get(tag1);
	let e2s = g.entity.get(tag2);
	for (let i=0; i<e1s.length; i++)
		for (let j=0; j<e2s.length; j++) 
			if (g.entity.collision(e1s[i], e2s[j], 10))
				return [e1s[i], e2s[j]]
	return false;
};
g.entity.collision = function(e1, e2, tol) {
	tol = tol || 0;
	let x1 = e1.x+tol/2;
	let X1 = e1.x + g.ui.blockSize - tol/2;
	let y1 = e1.y + tol/2;
	let Y1 = e1.y + g.ui.blockSize - tol/2;
	let x2 = e2.x + tol/2;
	let X2 = e2.x + g.ui.blockSize - tol/2;
	let y2 = e2.y + tol/2;
	let Y2 = e2.y + g.ui.blockSize - tol/2;
	let xOverlap = btw(x2, x1, X1) || btw(X2, x1, X1);
	let yOverlap = btw(y2, y1, Y1) || btw(Y2, y1, Y1);
	return xOverlap && yOverlap;
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
