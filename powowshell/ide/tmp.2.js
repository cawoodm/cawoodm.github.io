var spawn = require("child_process").spawn;

function spawnAsPromised() {
  var args = Array.prototype.slice.call(arguments);
  return new Promise(function(resolve, reject) {
    var stdout = "", stderr = "";
    var cp = spawn.apply(null, args);
    cp.stdout.on("data", function(chunk) {
      stdout += chunk;
    });
    cp.stderr.on("data", function(chunk) {
      stderr += chunk;
    });
    cp.on("error", reject)
      .on("close", function(code) {
        if (code === 0) {
          resolve(stdout);
        } else {
          reject(stderr);
        }
      });
  });
}
if (0) {
    let child = spawn("cmd", ["/c", "dir"])
    child.stdout.on("data", (data) => {
        console.log(`child stdout:\n${data}`);
    });
    child.stderr.on("data", (data) => {
        console.error(`child stderr:\n${data}`);
    });
    child.on("error", (data) => {
        console.log("ERROR:");
        console.log(data);
    });
} else if(1) {
    let t = require('child_process').spawn('node1', ['./child'], {env: {PORT: 9123}})
    t.on("error", (e)=>{
        console.log("error", e)
    })
} else {
    spawnAsPromised("cmd", ["/c", "dir1"]).then((stdout)=>{
        console.log("OK")
        console.log(stdout)
    }).catch((stderr)=>{
        console.log("ERROR:")
        console.log(stderr)
    })
}