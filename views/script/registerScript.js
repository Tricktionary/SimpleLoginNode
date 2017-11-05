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