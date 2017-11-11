$(document).ready(function(){
	
	$("#register").click(function(){
		var accountName = $("#user").val();
		var pass = $("#pass").val();
		var rePass = $("#repass").val(); 

		if(rePass !== pass){
			return;
		}
		else{
			$.post('/register',{name:accountName,pass:pass},function(data){
				if(data.status === 404){
					$("#status").text("Not Found");
				}
				if(data.status === 200){
					$("#status").text(data.message);
				}
				else{
					$("#status").text(data.message);
				}
			});
		}
	});

});

//Removes Space Keys
function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
}