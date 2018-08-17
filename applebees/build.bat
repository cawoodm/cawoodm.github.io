PUSHD ..\..\..\cawoodm.github.io\applebees
XCOPY /y /e /d ..\..\JavaScript\games\applebees . && git add . && git commit -a -m %1 && git push
POPD