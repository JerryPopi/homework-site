const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const db = require("./database.js");
const crypto = require("crypto")
let username = 'asdas'
let userpass = 'domatic'

/*let mykey = crypto.createCipher('aes-128-cbc', userpass);
let passhash = mykey.update('abc', 'utf8', 'hex');
passhash += mykey.final('hex');*/

//Check if the password contains only letters and numbers.
function alphanumValidation(userpass){
    let alphanum = /^[0-9a-zA-Z]+$/;
    if(userpass.value.match(alphanum)){
        return true;
    }else{
        return false;
    }
}
if(alphanumValidation(userpass)){
    console.log("Returned: True");
}else{
    console.log("Returned: False");
}
//db.sqlinsert(username, passhash);
app.use("/public", express.static("public"));

//Manage html pages
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/registration.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/registration.html"));
});
app.listen(3000);
