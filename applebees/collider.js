function Collider() {};
Collider.prototype.update = function(delta) {
	if (!g.player) return;
    if (Collider.collides("player", "bee")) return g.gameOver();
    let ghost = {x: g.player.x+g.player.speed.x, y: g.player.y+g.player.speed.y};
	if (Collider.collides(ghost, "wall", 1)) g.player.stop();
    let apple = Collider.collides("player", "apple", 15);
    if (apple) {
        g.stats.score+=1;
        apple.forEach((a)=>{if (a.tag=="apple") g.entity.remove(a);});
        g.sounds.ping.load();g.sounds.ping.play();
        if (g.entity.count("apple")==0) return g.nextLevel();
    }
    let z = Collider.collides("bullet", "bee", 15);
    if (z) {
        g.stats.score+=1;
        g.entity.remove(z);
    }
    g.entity.get("bullet").forEach(bullet => {
        if (bullet.x < g.ui.blockSize || bullet.y < g.ui.blockSize || bullet.x > (g.ui.gridWidth-2)*g.ui.blockSize || bullet.y > (g.ui.gridHeight-2)*g.ui.blockSize )
            return g.entity.remove(bullet);
	});
}
Collider.collides = function(tag1, tag2, tol) {
	let e1s = typeof tag1 == "string"?g.entity.get(tag1):[tag1];
	let e2s = g.entity.get(tag2);
	for (let i=0; i<e1s.length; i++)
		for (let j=0; j<e2s.length; j++) 
			if (Collider.collision(e1s[i], e2s[j], tol))
				return [e1s[i], e2s[j]]
	return false;
};
Collider.collision = function(e1, e2, tol) {
	tol = tol || 0;
	let x1 = e1.x+tol;
	let X1 = e1.x + g.ui.blockSize - 2*tol;
	let y1 = e1.y + tol;
	let Y1 = e1.y + g.ui.blockSize - 2*tol;
	let x2 = e2.x + tol;
	let X2 = e2.x + g.ui.blockSize - 2*tol;
	let y2 = e2.y + tol;
	let Y2 = e2.y + g.ui.blockSize - 2*tol;
	let xOverlap = btw(x2, x1, X1) || btw(X2, x1, X1);
    let yOverlap = btw(y2, y1, Y1) || btw(Y2, y1, Y1);
	return xOverlap && yOverlap;
};