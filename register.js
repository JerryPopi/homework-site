const main = require("./app.js");
const crypto = require("crypto")
const db = require("./database.js");

//db.sqlinsert(username, passhash);

//Check if the password contains only letters and numbers.
exports.alphanumValidation = function(usernameId, userpassId) {
  console.log("called func")
  let userpass = document.getElementById(userpassId).value;
  let username = document.getElementById(usernameId).value;

  let alphaNum = /^[0-9a-zA-Z]+$/;
  if (userpass.match(alphaNum)) {
    //If validation is passed, hash the password.
    let mykey = crypto.createCipher("aes-128-cbc", userpass);
    let passhash = mykey.update("abc", "utf8", "hex");
    passhash += mykey.final("hex");
    //Check if username exists in database.
    if(db.usernameVerificator(username)){
      db.sqlinsert(username, passhash);
    }
  } else {
    alert("Use only letters and numbers")
  }
}


