var express = require('express');
var app = express();
var hat = require('hat'); //creates random tokens
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var accountData;

app.use(function(req,res,next){
	console.log(req.method + " request for "+req.url);	
	next();
});

//Login Page
app.get(["/login","/login.html"],function(req,res){
	res.sendFile("login.html",{root:"./views/"});
});

//Listening on local host 3000
app.listen(3000,function(){
	console.log("Server Running on localhost:3000");
});