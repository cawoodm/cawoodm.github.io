<#
 .Synopsis
 Investigating the best ways of exception handling in PowerShell

 .Description
 This script generates 3 types of exceptions
 * A synax error: referencing an $UnknownVariable 

#>
[CmdletBinding()]
param(
    [int]$ErrorMode=0
)
$OutputPath=".\"
function main() {
    
    $PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
    
    try {
        $ErrorActionPreference = "SilentlyContinue"
        Generate-NonTerminatingErrors
    } catch {
        $ErrMsg = "ERROR in $($_.InvocationInfo.ScriptName):$($_.InvocationInfo.ScriptLineNumber): $($_.Exception.Message)"
        if ($ErrorMode -eq 0) {
            # This is the easiest for a human/developer to deal with
            #  We get a single line with a link to the exact line number of the error
            Write-Host ($ErrMsg) -ForegroundColor Red
        } elseif ($ErrorMode -eq 1) {
            # This is the same as above but properly written to stderr
            $Host.UI.WriteErrorLine($ErrMsg)
        } elseif ($ErrorMode -eq 2) {
            # This would appear to be the standard way but it has many disadvantages
            #  * We get a multi-line error
            #  * THe line number is often/mostly very misleading and includes the line of the Write-Error and/or the invocation of main below
            Write-Error "ERROR in $($_.InvocationInfo.ScriptName):$($_.InvocationInfo.ScriptLineNumber):`n$($_.Exception.Message)"
        }
        #$_.InvocationInfo | gm
        #throw $_
    }
    
    try {
        Generate-TerminatingErrors
    } catch {
        $ErrMsg = "ERROR in $($_.InvocationInfo.ScriptName):$($_.InvocationInfo.ScriptLineNumber): $($_.Exception.Message)"
        if ($ErrorMode -eq 0) {
            # This is the easiest for a human/developer to deal with
            #  We get a single line with a link to the exact line number of the error
            Write-Host ($ErrMsg) -ForegroundColor Red
        } elseif ($ErrorMode -eq 1) {
            # This is the same as above but properly written to stderr
            $Host.UI.WriteErrorLine($ErrMsg)
        } elseif ($ErrorMode -eq 2) {
            # This would appear to be the standard way but it has many disadvantages
            #  * We get a multi-line error
            #  * The line number is often/mostly very misleading and includes the line of the Write-Error and/or the invocation of main below
            Write-Error "ERROR in $($_.InvocationInfo.ScriptName):$($_.InvocationInfo.ScriptLineNumber):`n$($_.Exception.Message)"
        }
        #$_.InvocationInfo | gm
        #throw $_
    }
}

function Generate-NonTerminatingErrors() {

    try {
        # 1. Generate a non-terminating error
        "1. We can't catch this non-terminating error unless (`$ErrorActionPreference is SilentlyContinue AND we clear() and check `$error):"
        $error.clear()
        remove-item wecanNOTcatchthis.txt
        if ($error) {throw "Unable to delete wecanNOTcatchthis.txt (We can catch this because $ErrorActionPreference is SilentlyContinue)"}

        # 2. Catch and throw a non-terminating error - we can catch this
        $error.clear()
        remove-item wecancatchthis.txt -ErrorAction SilentlyContinue
        if ($error) {throw "Unable to delete wecancatchthis.txt (We can catch this because of -ErrorAction SilentlyContinue)"}

        # 3. Generate a syntax error
        return $UnknownVariable
    } catch {
        # If we don't throw here, we get the wrong line number reported above
        #  if any syntax errors occur
        throw $_
    } finally {
        "4. We always get here finally!"
    }
}
function Generate-TerminatingErrors() {

    try {
        # 1. Generate a terminating error
        return $UnknownVariable
    } catch {
        # If we don't throw here, we get the wrong line number reported above
        #  if any syntax errors occur
        throw $_
    } finally {
        "4. We always get here finally!"
    }
}


Set-StrictMode -Version Latest
main