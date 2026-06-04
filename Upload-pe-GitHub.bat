@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Decorao — upload GitHub

where git >nul 2>&1
if %errorlevel% neq 0 (
    echo Git nu este instalat. Ruleaza din nou dupa instalarea Git.
    pause
    exit /b 1
)

where gh >nul 2>&1
if %errorlevel% neq 0 (
    echo GitHub CLI ^(gh^) lipseste. Instaleaza: winget install GitHub.cli
    pause
    exit /b 1
)

echo.
echo  === Pas 1: Autentificare GitHub ===
echo  Se deschide browserul. Logheaza-te cu contul tau GitHub.
echo.
gh auth login -h github.com -p https -w

if %errorlevel% neq 0 (
    echo Autentificarea a esuat.
    pause
    exit /b 1
)

echo.
echo  === Pas 2: Creez repository si urc codul ===
echo  Numele repo: decorao ^(public^)
echo.

git branch -M main
gh repo create decorao --public --source=. --remote=origin --push

if %errorlevel% neq 0 (
    echo.
    echo  Daca repo-ul decorao exista deja, ruleaza manual:
    echo    git remote add origin https://github.com/USERUL_TAU/decorao.git
    echo    git branch -M main
    echo    git push -u origin main
    pause
    exit /b 1
)

echo.
echo  Gata! Verifica pe GitHub repository-ul decorao.
echo.
pause
