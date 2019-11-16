[CmdletBinding(SupportsShouldProcess)]
[OutputType([string])]
param($PipelineParams=@{})
function main() {
	$params = @{
		Path = ".\data\test.log"
	};
	# Read Log Files
	& /home/marc/work/powowshell/examples/components/FileList.ps1 @params
}
Set-StrictMode -Version Latest
main
