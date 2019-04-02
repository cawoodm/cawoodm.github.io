const PowerShell = (typeof require === "function")?require("powershell"):mock;  

function PSPromise(command, options) {
  return new Promise(function(resolve, reject) {
    let cp = new PowerShell(command, options)
    cp.on("error-output", reject);
    cp.on("output", resolve);
  });
}

PSPromise("Write-Output 1;Get-Date").then(output).catch(outputErr)

// Runtime error
PSPromise("1/0").then(output).catch(outputErr)

// Syntax error
PSPromise("Write-Output A").then(output).catch(outputErr)

PSPromise("Write-Output 2;Write-Error 'Im OK'").then(output).catch(outputErr)

function output(stdout) {
    console.log("\x1b[34m", "STDOUT:");
    console.log(stdout);
    console.log("\x1b[0m")
}

function outputErr(err) {
    console.log("\x1b[31m", "--------ERROR-----------");
    console.log("\x1b[31m", err);
    console.log("\x1b[0m")
}