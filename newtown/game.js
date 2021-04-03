/*global g*/
g.init = function() {
	g.ui.bz=32
  g.ui.blocksInView=13;
  g.ui.hudWidth = 0;
  g.ui.scale = {x: 2, y: 2};
  g.ui.width=g.ui.hudWidth+g.ui.blocksInView*g.ui.bz;
  g.ui.canvas.width=g.ui.width*g.ui.scale.x;
  g.ui.height=g.ui.blocksInView*g.ui.bz;
  g.ui.canvas.height=g.ui.height*g.ui.scale.y;
  g.ui.canvas.style.position = "absolute";
  // Center the canvas in the window
  if (g.ui.win.width>g.ui.width*g.ui.scale.x) g.ui.canvas.style.left = g.ui.win.width/2-0.5*g.ui.width*g.ui.scale.x + "px";
  if (g.ui.win.height>g.ui.height*g.ui.scale.y) g.ui.canvas.style.top = g.ui.win.height/2-0.5*g.ui.height*g.ui.scale.y + "px";
	
  g.ctx.scale(g.ui.scale.x, g.ui.scale.y);
	//g.ctx.translate(g.ui.hudWidth, 0);
	
	g.ctx.imageSmoothingEnabled=false; // Pixelated look

	g.maxLevels = 3;
  for (let l=1; l <= g.maxLevels; l++)
    g.ImageLoader.add("level.0" + l, "./level.0" + l + ".png");
	g.ImageLoader.add("mapper", "./mapper.png");
	g.ImageLoader.add("sprites", "./spritemap.png");

	return ()=>{g.ready()}
}
g.ready = function() {
  g.restart(!location.href.match(/localhost/))
};
g.restart = function(title) {
	// Cleanup
	g.Halt();
  g.loadMapper();
  g.manager = new GameManager()

  g.ui.sprites = {
    player: new Sprite({w: this.w, h: this.h, offX: 32*0, offY: 32*6, scale: 1})
  };

	if (title) {
    g.state="title";
    g.scene = new g.Scene();
		g.title = g.scene.add(new GameTitle());
	} else {
    g.StartLevel(1)
	}
  g.Start();
	
};
g.StartLevel = function(level) {
  if (level > g.maxLevels) return g.GameOver(true);
  g.level=level;
  g.scene = new g.Scene();
  g.manager.newLevel();
  g.scene.add(g.manager);
  g.loadMap("level.0"+g.level);
  g.drawMap();
  // New Game
  g.camera = g.scene.add(new Camera({x: 0, w: g.ui.blocksInView*g.ui.bz, h: g.ui.blocksInView*g.ui.bz, box: 100}));
  g.collider = g.scene.add(new Collider);

  g.porthole = g.scene.add(new Porthole(g.ctx));
  g.player = g.scene.add(new Player({x: g.startPoint.x , y: g.startPoint.y, velocity: 2}));
  //g.scene.add(new Grid(g.ctx));
  g.state="play";
};
g.GameOver = function(won) {
  g.scene.entities.length=0;
  this.state="gameover"
  g.gameOverWon = won;
}
g.preGameUpdate = function(ctx) {
  
}
g.preGameRender = function(ctx) {
  if (g.state==='play') {
    if (g.manager.filter===0) g.ctx.filter = 'grayscale()';
    else if (g.manager.filter===1) g.ctx.filter = 'sepia()';
    else if (g.manager.filter===2) g.ctx.filter = 'invert()';
    else {
      g.ctx.filter = 'none';
      g.state='changingLevel';
      setTimeout(() => g.StartLevel(++g.level), 3000);
    }
  }
  if(!g.camera) return;
  // Sample 320x320 from the background canvas (c0) at the position of the 
  // camera and draw to the real canvas
  g.ctx.drawImage(g.c0, g.camera.x, g.camera.y, g.ui.width, g.ui.height, 0, 0, g.ui.width, g.ui.height)
  g.ctx.filter = 'none';
};
g.postGameRender = function(ctx) {
  if (this.state=="gameover") {
    delete g.camera;
    g.rect(0, 0, g.ui.width, g.ui.height, '#333')
    g.ctx.fillStyle='#EEE';
    g.ctx.font='20pt Consolas';
    g.ctx.fillText(g.gameOverWon ? 'You Won!' : "GAME OVER", 40, g.ui.height/2-10);
    g.ctx.font='12pt Consolas';
    g.ctx.fillText(g.gameOverWon ? 'Congratulations' : 'Try again?', 20, g.ui.height/2+20);
    g.ctx.fillText("Press <SPACEBAR> to play again...", 20, g.ui.height/2+40);
    return
  }
  g.porthole?.draw(ctx);
  //g.ctx.translate(-ghue-rota3(120deg)mera.x, -g.camera.y)
  //g.ctx.drawImage(g.ui.maskCanvas, g.camera.x-g.porthole.w, 0);
};
g.loadMapper = function() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");;
  let img = g.ImageLoader.get["mapper"];
  ctx.drawImage(img, 0, 0)
  let data = ctx.getImageData(0, 0, img.width, img.height).data;
  g.palette = [];
  for (let y = 0; y < img.height; y++) {
    let row = [];
    for (let x = 0; x < img.width; x++) {
      let i = (y*img.width+x)*4;
      let col = [data[i], data[i+1], data[i+2], data[i+3]]
      row[x] = col;
    }
    g.palette.push(row)
  }
  cacheCol={};
  g.palette.findColor = function(col) {
    if (cacheCol[col]) return cacheCol[col];
    tileNames = [
      ['unknown', 'sea', 'sea', 'sea', 'lava'],
      ['sand'],
      ['invisibleBlock', 'block'],
      ['player'],
      ['gem', 'gem', 'gem'],
      ['grass']
    ]
    for (let y=0; y<g.palette.length; y++) {
      let row = g.palette[y];
      for (let x=0; x<row.length; x++) {
        if (col[0] === row[x][0] && col[1] === row[x][1] && col[2] === row[x][2]) {
          if (!tileNames[y]) return {x, y, name: 'unknown'};
          cacheCol[col] = {x, y, name: tileNames[y][x]}
          return cacheCol[col];
        }
      }
    }
  }
};
g.loadMap = function(mapName) {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let img = g.ImageLoader.get[mapName];
  ctx.drawImage(img, 0, 0)
  let data = ctx.getImageData(0, 0, img.width, img.height).data;
  g.map = [];
  for (let y = 0; y < img.height; y++) {
    let row = [];
    for (let x = 0; x < img.width; x++) {
      let i = (y*img.width+x)*4;
      let col = [data[i], data[i+1], data[i+2], data[i+3]]
      // Find the color
      row[x] = g.palette.findColor(col);
    }
    g.map.push(row)
  }
};
g.rect=function(x,y,w,h,c) {g.ctx.fillStyle=c;g.ctx.fillRect(x,y,w,h)}
g.drawMap = function() {
  // Draw static map to hidden c0
  let bz = g.ui.bz;
  let mw = g.map[0].length;
  let mh = g.map.length;
  let c0 = document.createElement("canvas");g.c0=c0;
  let ctx = c0.getContext("2d");
  c0.width = mw * bz;
  c0.height = mh * bz;

  g.rect(0, 0, c0.width, c0.height, '#DDD');
  let spriteSheet = g.ImageLoader.get["sprites"];
  
  // Most sprites are in 1st row of sprite sheet, increment to move down the spritesheet
  let y1 = 0;

  // Dark theme
  baseAlpha = 0.8
  
  // Land background is green
  for (let y = 0; y < mh; y++)
    for (let x = 0; x < mw; x++)
        defaultBackground(x, y);
      function defaultBackground(x, y){
        ctx.fillStyle="rgba(100,0,0,0.4)";
        ctx.fillRect(x*bz, y*bz, bz, bz)
      }
  function tileAtPos(x, y) {
    if (g.map[y] && g.map[y][x]) return g.map[y][x].name;
  }
  function neighbours(x, y, name, name2) {
    let res = [];
    //if(x==8 && y===7) debugger;
    for (let j=-1; j<=1; j++)
      for (let i=-1; i<=1; i++) {
        let X = x + i, Y = y + j;
        //if(x==7 && y===7) dp(x, y, i, j, X, Y)
        if (!(x===X && y===Y))
          res.push((tileAtPos(X, Y) === name ? '1' : (tileAtPos(X, Y) === name2 ? '2' : '0')))
      }
    return res.join('');
  }
  for (let y = 0; y < mh; y++)
    for (let x = 0; x < mw; x++) {
      ctx.globalAlpha=baseAlpha;
      y1 = 0;
      if (!g.map[y][x]) throw new Error("Unknown tile at x=" + x + ", y=" + y)
      sx = g.map[y][x].x;
      sy = g.map[y][x].y;
      sName = g.map[y][x].name;
      let rand = Math.random();
      // Sea alpha variations
      if (sName==='sea') {
        //ctx.globalAlpha=baseAlpha + 0.2;
        // Sea is blocked for travel
        g.scene.add({tag: "sea", x: x*g.ui.bz, y: y*g.ui.bz, w: g.ui.bz, h: g.ui.bz});
        sx++;
        //sx += rnd(0, 1); //
      }
      else if (sName==='lava') {
        g.scene.add({tag: "sea", x: x*g.ui.bz, y: y*g.ui.bz, w: g.ui.bz, h: g.ui.bz});
      }
      else if (sName==='sand') {
        // Sand alpha variations
        ctx.globalAlpha=baseAlpha + rand*0.05;
        //if(x==8 && y===2) debugger;
        let nn = neighbours(x, y, 'sea', 'sand');
        //if(x==13 && y===2) dp(nn);
        if (nn.match(/^.1.12/)) sx=1;
        else if (nn.match(/^.1121/)) sx=3;
        else if (nn.match(/^.1./)) sx=2;
        else if (nn.match(/^...1.11/)) sx=11;
        else if (nn.match(/^...1/)) sx=4;
        else if (nn.match(/^.21.2/)) sx=5;
        else if (nn.match(/^12.2/)) sx=6;
        else if (nn.match(/2.12.$/)) sx=12;
        else if (nn.match(/2.21$/)) sx=13;
        else if (nn.match(/21.1.$/)) sx=7;
        else if (nn.match(/.1...$/)) sx=8;
        else if (nn.match(/22221$/)) sx=9;
        else if (nn.match(/2.1.$/)) sx=10;
      }
      else if (sName=='grass') { // Grass variations
        // Grass alpha variations
        //dp("grass", "sx", sx, "sy", sy)
        ctx.globalAlpha=baseAlpha + rand*0.05;
        if (rand<0.2) {
          // 20% of grass has a bush/tree variation
          drawSprite(sx, sy, x, y);
          sx += rnd(1, 7);
        }
      }
      else if (sName === 'gem') {
        // Gem
        drawSprite(g.map[y][x-1].x, g.map[y][x-1].y, x, y); // Draw same block as left of player
        g.scene.add(new Gem({x: x*g.ui.bz, y: y*g.ui.bz, w: g.ui.bz, h: g.ui.bz, c: sx}));
        continue; // Don't render gem on background
      }
      else if (sName==='player') {
        // Player startPoint
        drawSprite(g.map[y][x-1].x, g.map[y][x-1].y, x, y); // Draw same block as left of player
        g.startPoint = g.scene.add({tag: "startPoint", x: x*g.ui.bz, y: y*g.ui.bz, w: g.ui.bz, h: g.ui.bz});
      }
      else if (sName==='invisibleBlock') {
        // Invisible Barrier
        g.scene.add({tag: "block", x: x*g.ui.bz, y: y*g.ui.bz, w: g.ui.bz, h: g.ui.bz});
      }
      else if (sName==='block') {
        // Visible Barrier
        g.scene.add({tag: "block", x: x*g.ui.bz, y: y*g.ui.bz, w: g.ui.bz, h: g.ui.bz});
      } else {
        continue;
      }
      //if (x === 6 && y === 7){dp(x, y, sx, sy, sName);}
      drawSprite(sx, sy, x, y);
    }
    function drawSprite(sx, sy, x, y) {
      //if (g.player) if (Math.abs(g.player.x - x) === 1 || Math.abs(g.player.y - y) === 1) ctx.globalAlpha = 1;
      ctx.drawImage(spriteSheet, sx*bz, sy*bz, bz, bz, x*bz, y*bz, bz, bz);
    }
}
g.ui.keys = {
	left: g.Keyboard(["KeyA", "ArrowLeft"]) // left arrow
	,right: g.Keyboard(["KeyD", "ArrowRight"]) // right arrow
	,up: g.Keyboard(["KeyW", "ArrowUp"])
	,down: g.Keyboard(["KeyS", "ArrowDown"])
	,fire: g.Keyboard("Space") // space
	,click: g.Keyboard("click") // space
};
g.ui.keys.left.release = function() {
  if (g.state=="pause") return g.Pause();
  if (g.state!="play") return;
	g.player.move(Vector.left())
};
g.ui.keys.right.release = function() {
  if (g.state=="pause") return g.Pause();
	if (g.state!="play") return;
	g.player.move(Vector.right())
};
g.ui.keys.up.release = function() {
  if (g.state=="pause") return g.Pause();
  if (g.state!="play") return;
	g.player.move(Vector.up())
};
g.ui.keys.down.release = function() {
  if (g.state=="pause") return g.Pause();
  if (g.state!="play") return;
	g.player.move(Vector.down())
};
g.ui.keys.fire.press = function(e) {
	if (g.state=="message") return;
	if (g.state=="title") {return g.title.nextFrame();}
  if (g.state!="play") return g.restart();
  //g.manager.xxx();
};
g.onclick = function(e) {
  g.sound.enable();
};