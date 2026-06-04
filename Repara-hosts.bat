@echo off
chcp 65001 >nul
:: Ruleaza cu click dreapta -> Ruleaza ca administrator
cd /d "%~dp0"

net session >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo  Click DREAPTA pe acest fisier -^> Ruleaza ca administrator
    echo.
    pause
    exit /b 1
)

if exist "C:\Windows\System32\drivers\etc\hosts.txt" del "C:\Windows\System32\drivers\etc\hosts.txt"

copy /Y "%~dp0hosts-pentru-Windows" "C:\Windows\System32\drivers\etc\hosts" >nul
if %errorlevel% neq 0 (
    echo Nu am putut copia fisierul hosts.
    pause
    exit /b 1
)

ipconfig /flushdns >nul
echo.
echo  Gata! Fisierul hosts a fost reparat (fara .txt).
echo  Deschide in browser: https://www.decorao.ro
echo.
pause
