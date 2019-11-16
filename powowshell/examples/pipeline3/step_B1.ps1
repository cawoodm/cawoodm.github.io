[CmdletBinding(SupportsShouldProcess)]
[OutputType([string])]
param([Parameter(ValueFromPipeline=$true)]$InputObject,$PipelineParams=@{})
function main() {
	$params = @{
		Delimiter = "|"
		Header = "name", "age", "email", "source"
	};
	# Parse Names File
	$InputObject | & /home/marc/work/powowshell/examples/components/CSV2JSON.ps1 @params
}
Set-StrictMode -Version Latest
main
