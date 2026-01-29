@echo off
echo ========================================
echo  Smart Factory Teachers Portal
echo  GitHub Deployment Helper
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo.
)

echo Adding all files to Git...
git add .
echo.

set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=Update: Smart Factory Teachers Portal

echo Committing changes...
git commit -m "%commit_message%"
echo.

REM Check if remote exists
git remote -v | findstr origin > nul
if %errorlevel% neq 0 (
    echo.
    echo No remote repository configured!
    echo.
    set /p repo_url="Enter your GitHub repository URL: "
    git remote add origin !repo_url!
    echo Remote added!
    echo.
)

echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo  Deployment Complete!
echo ========================================
echo.
echo Your portal should be live soon at:
echo https://YOUR-USERNAME.github.io/smart-factory-teachers-portal/
echo.
echo (Remember to enable GitHub Pages in repository settings)
echo.
pause
