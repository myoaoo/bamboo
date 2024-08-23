@echo off
setlocal enabledelayedexpansion

REM 获取当前文件夹路径
set "folder=%cd%"

REM 遍历当前文件夹及所有子文件夹内的所有文件
for /r "%folder%" %%f in (*) do (
    set "filename=%%~nxf"
    set "newname=!filename: =!"
    if not "!filename!"=="!newname!" (
        echo Renaming "%%f" to "!newname!"
        ren "%%f" "!newname!"
    )
)

echo All files have been processed.
pause
