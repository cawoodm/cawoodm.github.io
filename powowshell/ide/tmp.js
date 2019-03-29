const pshell = require("./js/pshell");

if (0)
(async() => {
    let foo = await pshell.exec('[PSCustomObject]@{a=1;b=2} | convertto-json');
    console.log("AWAIT:");
    console.log(foo)
})();
else
pshell.exec('[PSCustomObject]@{a=1;b=2} | convertto-json').then((stdout)=>{
    console.log("THEN:");
    console.log(stdout);
})