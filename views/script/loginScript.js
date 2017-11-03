/*
	Login Script
*/
$(document).ready(function(){
	
	//Login
	$("#login").click(function(){
		var username = $("#username").val();
		var password = $("#password").val();

		$.post('/login',{name:username,pass:password},function(data){
			if(data.status === 404){
				$("#status").text(data.message);
			}
			else{
				console.log("We're Good");
			}
		});
	});

	
});

