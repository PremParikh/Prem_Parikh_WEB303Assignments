/*
	WEB 303 Assignment 1 - jQuery
	Name:Prem Parikh
	Stu ID: W0794661

*/


$document.ready(function()

{
$('#amount').on('click',function()
{
	let a = $(#yearly-salary).val();
	let b = $(#percent).val();

	let r = salary * percent / 100;

$('#yearly-salary').keyup(function(){
		$("#amount").html();
	})
}
