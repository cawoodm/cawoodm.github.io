function Collider() {};
Collider.prototype.renderer = function(delta) {
	if (!g.player) return;
    if (Collider.collide("player", "bee", 20)) return g.gameOver();
    //let ghost = {tag: "player", x: g.player.x+g.player.speed.x, y: g.player.y+g.player.speed.y};
	if (Collider.collides("player", "wall", 2).length>0) g.player.stop();
    Collider.collides("player", "apple", 25).forEach((a, i)=>{
        if (a.tag=="apple") {
            g.entity.remove(a);
            g.stats.score+=1;
            g.sounds.ping.load();g.sounds.ping.play();
        }
    });
    let z = Collider.collides("bullet", "bee", -1); if (z.length>0) {
        g.stats.score+=1;
        g.entity.remove(z);
    }
    let el = Collider.collides("bee", "wall", 1); if (el.length>0) {
        let bee = el[0];
        bee.bounce(Vector.norm(Vector.subtract(bee, el[1])));
    }
    Collider.collides("bullet", "wall", 1).forEach((a)=>{
        if (a.tag=="bullet") g.entity.remove(a);
    });
    g.entity.get("bullet").forEach(bullet => {
        if (bullet.x < g.ui.blockSize || bullet.y < g.ui.blockSize || bullet.x > (g.ui.gridWidth-2)*g.ui.blockSize || bullet.y > (g.ui.gridHeight-2)*g.ui.blockSize )
            return g.entity.remove(bullet);
	});
}
Collider.collide = function(tag1, tag2, tol) {return Collider.collides(tag1, tag2, tol).length>0;}
Collider.collides = function(tag1, tag2, tol) {
	let e1s = typeof tag1 == "string"?g.entity.get(tag1):[tag1];
	let e2s = g.entity.get(tag2);
	for (let i=0; i<e1s.length; i++)
		for (let j=0; j<e2s.length; j++) 
			if (Collider.collision(e1s[i], e2s[j], tol))
				return [e1s[i], e2s[j]]
	return [];
};
Collider.collision = function(e1, e2, tol) {
    let d1 = {x: e1.speed?e1.speed.x:0, y: e1.speed?e1.speed.y:0};
    let t1 = tol || e1.collider;
    let t2 = tol || e2.collider;
	let x1 = e1.x + d1.x + t1;
	let X1 = e1.x + d1.x + g.ui.blockSize - t1;
	let y1 = e1.y + d1.y + t1;
	let Y1 = e1.y + d1.y + g.ui.blockSize - t1;
	let x2 = e2.x + t2;
	let X2 = e2.x + g.ui.blockSize - t2;
	let y2 = e2.y + t2;
    let Y2 = e2.y + g.ui.blockSize - t2;
	let xOverlap = btw(x2, x1, X1) || btw(X2, x1, X1);
    let yOverlap = btw(y2, y1, Y1) || btw(Y2, y1, Y1);
    let collision = xOverlap && yOverlap;
    if (g.debug && e1.tag==g.debug[0] && e2.tag==g.debug[1]) {
        if (collision) g.ctx.lineWidth=5; else g.ctx.lineWidth=1;
        if(e1.tag==g.debug[0]) {g.ctx.strokeStyle="#0FF";g.ctx.strokeRect(x1, y1, X1-x1, Y1-y1)}
        if(e2.tag==g.debug[1]) {g.ctx.strokeStyle="#F00";g.ctx.strokeRect(x2, y2, X2-x2, Y2-y2)}
        //if(e1.tag=="bee" && e2.tag=="wall" && collision && g.papa) debugger
    }
	return collision;
};