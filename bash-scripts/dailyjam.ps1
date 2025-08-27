$repoPath = "C:\Users\George Wellington\Documents\workspace\georgewelly.github.io"
$fileName = "text-files\todaysjam.txt"

Set-Location $repoPath

# Get clipboard text
$line = Get-Clipboard
Set-Content $fileName $line

git add $fileName
git commit -m ("Updated jam text " + (Get-Date -Format "yyyy-MM-dd HH:mm:ss"))
git push


Pause   # <-- keeps the window open until you press a key
