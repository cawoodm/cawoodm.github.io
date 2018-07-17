g.sounds = {
    ping: new Audio('./resources/ping.mp3')
    ,music1: new Audio('./resources/music1.mp3')
    ,lose: new Audio('./resources/lose.mp3')
}
g.sounds.ping.volume = 0.5;
g.sounds.ping.loop = false;

g.sounds.music = g.sounds.music1;
g.sounds.music.volume = 0.5;
g.sounds.music.loop = true;

g.sounds.lose.volume = 0.5;
g.sounds.lose.loop = false;