git add . && git commit -a -m %1 && git push
PUSHD ..\..\..\cawoodm.github.io\applebees
DEL *.js
XCOPY /y /e /d ..\..\JavaScript\games\applebees . && git add . && git commit -a -m %1 && git push
POPD