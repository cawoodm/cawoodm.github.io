[CmdletBinding(SupportsShouldProcess)]
[OutputType([string])]
param([Parameter(ValueFromPipeline=$true)]$InputObject,$PipelineParams=@{})
function main() {
	$params = @{
		Fields = "name", "age", "email"
	};
	# Select Name and Email
	$InputObject | & /home/marc/work/powowshell/examples/components/SelectFields.ps1 @params
}
Set-StrictMode -Version Latest
main
