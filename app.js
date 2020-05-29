const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const db = require("./database.js");
const crypto = require("crypto");
const register = require("./register.js");
const socket = require("socket.io");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//const uuid = require('uuid');

//app.use(express.static('/', { extensions: ['html'] }));

/*
let mykey = crypto.createCipher('aes-128-cbc', userpass);
let passhash = mykey.update('abc', 'utf8', 'hex');
passhash += mykey.final('hex');
*/
//db.sqlinsert(username, userpass);

app.use("/public", express.static("public"));

app.use(cookieParser());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Manage html pages
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
  res.cookie('name', 'express').send('cookie set');
  //res.send("kufte")
});
app.get("/success", function (req, res){
	res.sendFile(path.join(__dirname, "/success.html"));
})
app.get("/registration", function (req, res) {
  res.sendFile(path.join(__dirname, "/registration.html"));
  //res.sendFile(path.join(__dirname, "public/register.js"));
});
app.get("/register", function (req, res) {
	res.sendFile(path.join(__dirname, "/public/register.js"));
  });
app.get("/socket.js", function (req, res) {
	res.sendFile(path.join(__dirname, "/public/socket.js"));
	//res.writeHead(302, {
	//	'Location': '/success'
	//})
});
let server = app.listen(80);

let io = socket(server);
io.on('connection', function(socket){
	console.log("made connection");

	socket.on('credentials', function(data){
		let username = data.username;
		let password = data.userpass;
		register.alphanumValidation(data.username, data.userpass);
	});
});