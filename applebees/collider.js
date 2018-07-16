function Collider(options) {
}
Collider.prototype.update = function(delta) {
	if (!g.player) return;
	if (g.entity.collides("player", "bee")) return g.gameOver();
    let apple = g.entity.collides("player", "apple");
    if (apple) {
        g.stats.score+=1;
        apple.forEach((a)=>{if (a.tag=="apple") g.entity.remove(a);});
        g.sounds.ping.load();g.sounds.ping.play();
        if (g.entity.count("apple")==0) return g.nextLevel();
    }
    let z = g.entity.collides("bullet", "bee");
    if (z) {
        g.stats.score+=1;
        g.entity.remove(z);
    }
    g.entity.get("bullet").forEach(bullet => {
        if (bullet.x < g.ui.blockSize || bullet.y < g.ui.blockSize || bullet.x > (g.ui.gridWidth-2)*g.ui.blockSize || bullet.y > (g.ui.gridHeight-2)*g.ui.blockSize )
            return g.entity.remove(bullet);
	});
}