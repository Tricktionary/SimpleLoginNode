/*
	SIMPLE SERVER SKELETON
	Created By : Andy Bui
*/
var fs = require("fs");
var express = require('express');
var app = express();
var hat = require('hat'); //creates random tokens
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//user structure is: name:{pass,clicks}
var accounts = fs.readFileSync("./data/account.json");

var ROOT = "./views/";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req,res,next){
	console.log(req.method + " request for "+req.url);	
	next();
});

//Login Page
app.get(["/","/login","/login.html"],function(req,res){
	res.sendFile("login.html",{root:ROOT});
});

app.post("/login",function(req,res){
	var username = req.body.name;
	var password = req.body.pass;

	console.log(username + " and " + password);

	var user = accounts[username];	//Should Pull username
	
	if(!(user)){
			
	}else{
		next();
	}

});

//Registration Page
app.get('/register'),function(req,res){
	res.sendFile('register',{root:ROOT});
}

//Handle all static requests 
app.use(express.static(ROOT));   

//Send A 404 For everything else not found
app.all("*",function(req,res){
	res.sendStatus(404);
});

//Listening on local host 3000
app.listen(3000,function(){
	console.log("Server Running on localhost:3000");
});

//TOKEN GENERATOR 
function newToken(){
	return Math.floor(Math.random()*1000000);
}
