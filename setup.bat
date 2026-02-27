@echo off
TITLE Trinity Backend Setup
COLOR 0A
ECHO ============================================
ECHO  Trinity Backend - First Time Setup
ECHO ============================================
ECHO.

:: Check Node is available
node --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
  ECHO [ERROR] Node.js not found! Please install from https://nodejs.org
  PAUSE
  EXIT /B 1
)

ECHO [1/5] Installing backend dependencies...
cd /d "%~dp0backend"
CALL npm install --legacy-peer-deps
IF %ERRORLEVEL% NEQ 0 (ECHO [ERROR] npm install failed. & PAUSE & EXIT /B 1)

ECHO.
ECHO [2/5] Generating Prisma client...
CALL npx prisma generate
IF %ERRORLEVEL% NEQ 0 (ECHO [ERROR] Prisma generate failed. & PAUSE & EXIT /B 1)

ECHO.
ECHO [3/5] Checking .env file...
IF NOT EXIST "%~dp0backend\.env" (
  COPY "%~dp0backend\.env.example" "%~dp0backend\.env"
  ECHO  Created backend\.env from example. Edit it before continuing!
  ECHO  Press any key to open it in Notepad...
  PAUSE > nul
  NOTEPAD "%~dp0backend\.env"
) ELSE (
  ECHO  backend\.env already exists. Skipping.
)

ECHO.
ECHO [4/5] Starting Docker (PostgreSQL + Backend)...
cd /d "%~dp0"
docker compose up -d
IF %ERRORLEVEL% NEQ 0 (
  ECHO [WARNING] Docker Compose failed. Is Docker Desktop running?
  ECHO  Start Docker Desktop and re-run this script, or start manually.
  ECHO  You can also run the backend without Docker using a local PostgreSQL.
)

ECHO.
ECHO [5/5] Waiting 5s for DB to be ready, then running migrations + seed...
TIMEOUT /T 5 /NOBREAK > nul
docker compose exec backend npx prisma migrate dev --name init
docker compose exec backend node -e "const {PrismaClient}=require('@prisma/client');const bcrypt=require('bcryptjs');const p=new PrismaClient();bcrypt.hash(process.env.ADMIN_PASSWORD||'Trinity@Admin2024',12).then(pw=>p.user.upsert({where:{email:process.env.ADMIN_EMAIL||'admin@thetrinityservices.in'},create:{name:'Trinity Admin',email:process.env.ADMIN_EMAIL||'admin@thetrinityservices.in',password:pw,role:'ADMIN'},update:{}})).then(()=>{console.log('Admin ready!');process.exit(0)}).catch(e=>{console.error(e);process.exit(1)})"

ECHO.
ECHO ============================================
ECHO  Setup complete!
ECHO.
ECHO  Backend running at: http://localhost:8080
ECHO  Health check: http://localhost:8080/api/health
ECHO.
ECHO  Frontend: cd trinity_ai_hub ^& npm start
ECHO  Admin panel: http://localhost:4028/admin/login
ECHO.
ECHO  Credentials:
ECHO    Email:    admin@thetrinityservices.in
ECHO    Password: Trinity@Admin2024
ECHO ============================================
PAUSE
