@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Decorao — pornire site local

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js lipseste. Instaleaza de la https://nodejs.org
    pause
    exit /b 1
)

if not exist "node_modules\astro" (
    echo Instalez dependentele...
    call npm install
    if %errorlevel% neq 0 (
        pause
        exit /b 1
    )
)

echo.
echo  Pornesc serverul intr-o fereastra separata.
echo  NU inchide fereastra "Decorao local" — doar minim-o.
echo  Site: http://localhost:4321/
echo.

start "Decorao local — NU INCHIDE" cmd /k "cd /d "%~dp0" && npm run dev --open"

timeout /t 3 /nobreak >nul
echo  Gata. Poti inchide ACEASTA fereastra — serverul ramane in cealalta.
pause
