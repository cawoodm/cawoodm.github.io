@ECHO OFF
GIT commit -a -m %1
PUSHD ..\..\..\cawoodm.github.io\applebees
XCOPY /D /Y /S ..\..\javascript\games\applebees . 
GIT commit -a -m %1
GIT push
POPD