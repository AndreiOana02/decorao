@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Decorao — previzualizare locală

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo  Node.js nu este instalat sau nu apare in PATH.
    echo  Descarca versiunea LTS de la: https://nodejs.org
    echo  Instaleaza, reporneste calculatorul, apoi ruleaza din nou acest fisier.
    echo.
    pause
    exit /b 1
)

if not exist "node_modules\astro" (
    echo Instalez dependentele — prima data poate dura 1-2 minute...
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo  npm install a esuat. Verifica conexiunea la internet.
        pause
        exit /b 1
    )
)

echo.
echo  ========================================
echo   Decorao — site local
echo  ========================================
echo.
echo  Se deschide in browser: http://localhost:4321/
echo.
echo  IMPORTANT: Nu inchide aceasta fereastra neagra
echo  cat timp vrei sa vezi site-ul.
echo.
echo  Pentru a opri: inchide fereastra sau apasa Ctrl+C
echo.

call npm run dev
set ERR=%errorlevel%

if %ERR% neq 0 (
    echo.
    echo  Portul 4321 poate fi deja folosit. Incerc portul 4322...
    call npm run dev -- --port 4322
    set ERR=%errorlevel%
)

if %ERR% neq 0 (
    echo.
    echo  Nu am putut porni serverul. Scrie-mi ce mesaj apare mai sus.
)

pause
