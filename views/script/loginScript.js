/*
	Login Script
*/
$(document).ready(function(){
	
	//Login
	$("#login").click(function(){
		var username = $("#username").val();
		var password = $("#password").val();

		$.post('/login',{name:username,pass:password},function(data){

		});
	});

	
});

