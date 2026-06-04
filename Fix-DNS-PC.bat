@echo off
chcp 65001 >nul
title Decorao — reparare DNS pe PC
echo.
echo  PC-ul tau foloseste inca adresa veche a site-ului (hosting vechi).
echo  Telefonul merge pentru ca are DNS actualizat.
echo.
echo  Pas 1: golesc cache DNS Windows...
ipconfig /flushdns
echo  Gata.
echo.
echo  Pas 2: Seteaza DNS Google + Cloudflare (recomandat).
echo  Deschide: Setari Windows -^> Retea -^> Wi-Fi sau Ethernet -^> DNS
echo  Sau ruleaza ca Administrator comenzile din GHID-DNS-PC.txt
echo.
echo  Pas 3: Inchide complet browserul si deschide:
echo    https://www.decorao.ro
echo.
pause
