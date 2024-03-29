/*
	SIMPLE SERVER SKELETON (NO MONGO)
	Created By : Andy Bui
*/
var fs = require("fs");
var express = require('express');
var app = express();
var hat = require('hat'); //creates random tokens
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data/account.json')
const db = low(adapter)

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

//Registration Request
app.post('/register',function(req,res){
	var username = req.body.name;
	var password = req.body.pass;

	var userList = db.__wrapped__.users;
	
	if((username.length <4 ) || (password.length <4)){
		res.send({
				message : "Password or Username is too short",
				status: 500,
		});
	}
	
	for(var i = 0 ; i < userList.length; i++){
		if(username === userList[i].username){
			res.send({
				message : "Username Already Exist",
				status  : 500,
			});
		}
	}

	var newUser = {
		username : username,
		password : password,
	};

	res.send({
		message : "User Has Been Registered",
		status  : 200,
	})

	db.get("users").push(newUser).write();


	
});

//Loging in action
app.post("/login",function(req,res){
	var userFound = false;
	var username = req.body.name;
	var password = req.body.pass;
	var userList = db.__wrapped__.users;


	for(var i = 0; i < userList.length; i++){
		if(userList[i].username === username && userList[i].password === password){
			userFound = true;
		}
	}

	if(userFound===false){
		res.send({
				message : "User not found",
				status: 404,
		});
	}
	else{
		//res.sendFile('index.html',{root:ROOT});
		res.send({
				message : "User found",
				status: 200,
		});
	}
});

 

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
