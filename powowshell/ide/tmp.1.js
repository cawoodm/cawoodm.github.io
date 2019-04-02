const pshell = require("./js/pshell");
const pow = require("./js/pow");

if (1)
    if (0)
        (async() => {
            let foo = await pshell.exec("[PSCustomObject]@{a=1;b=2} | convertto-json");
            console.log("AWAIT:");
            console.log(foo)
        })();
    else {
        pshell.exec("Write-Output 1; Write-Output 2", {debug: true})
            .then(output).catch(outputErr)
        pshell.exec("Write-Error 1; Write-Output 2", {debug: true})
            .then(output).catch(outputErr)
    }

function output(res) {
    if (res.stderr) {
        console.log("\x1b[33m", "STDERR:");
        console.log("\x1b[33m", "\x1b[33m", res.stderr);
    }
    if (res.stdout) {
        console.log("\x1b[34m", "STDOUT:");
        console.log(res.stdout);
    }
    console.log("\x1b[0m")
}

function outputErr(err) {
    console.log("\x1b[31m", "--------ERROR-----------");
    console.log("\x1b[31m", err);
    console.log("\x1b[0m")
}