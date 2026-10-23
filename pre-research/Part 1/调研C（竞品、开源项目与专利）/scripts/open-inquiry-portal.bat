@echo off
setlocal
set "HTML=%~dp0..\docs\inquiry-portal.html"
if not exist "%HTML%" (
  echo Inquiry portal not found: %HTML%
  exit /b 1
)
start "" "%HTML%"
