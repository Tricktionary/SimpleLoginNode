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
			if(data.status === 200){
				window.location.href = "index.html";
			}
			else{
				console.log("IDK");
			}
		});
	});

	
});

//Removes Space Keys
function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
}
