$allQuestions = Get-Content -Raw -Path c:\projects\cissp\all_questions.json | ConvertFrom-Json

$b1 = Get-Content -Raw -Path c:\projects\cissp\batch1_done.json | ConvertFrom-Json
$b2 = Get-Content -Raw -Path c:\projects\cissp\batch2_done.json | ConvertFrom-Json
$b3 = Get-Content -Raw -Path c:\projects\cissp\batch3_done.json | ConvertFrom-Json
$b4 = Get-Content -Raw -Path c:\projects\cissp\batch4_done.json | ConvertFrom-Json

$allModified = @()
$allModified += $b1
$allModified += $b2
$allModified += $b3
$allModified += $b4

foreach ($mod in $allModified) {
    for ($i = 0; $i -lt $allQuestions.Length; $i++) {
        if ($allQuestions[$i].type -eq 'scenario' -and $allQuestions[$i].id -eq $mod.id) {
            $allQuestions[$i] = $mod
            break
        }
    }
}

$jsonOutput = $allQuestions | ConvertTo-Json -Depth 10

# Create the final JS file content
$jsContent = "// CISSP Practice Exam - Comprehensive Question Bank`n" +
             "// Overhauled for true managerial-level difficulty`n" +
             "// Question types: `"mc`" (multiple choice), `"ms`" (multi-select), `"scenario`"`n" +
             "// Difficulty: 1=Easy (Definitional), 2=Medium (Process), 3=Hard (Managerial Scenarios)`n`n" +
             "const questionBank = " + $jsonOutput + ";`n"

# Set-Content using UTF8 (without BOM if possible, but standard Set-Content UTF8 is fine)
Set-Content -Path c:\projects\cissp\questions.js -Value $jsContent -Encoding UTF8

Write-Host "Merge completed successfully."
