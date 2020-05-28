const main = require("./app.js");
const crypto = require("crypto");
const db = require("./database.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let passhash;
//db.sqlinsert(username, passhash);

//Check if the password contains only letters and numbers.
exports.alphanumValidation = function (username, userpass) {
  console.log(username);
  let user = username;
  let alphaNum = /^[0-9a-zA-Z]+$/;

  if (userpass.match(alphaNum)) {
    //If validation is passed, hash the password.

    /*let mykey = crypto.createCipher("aes-128-cbc", userpass);
    let passhash = mykey.update("abc", "utf8", "hex");
    passhash += mykey.final("hex");*/

    bcrypt.hash(userpass, saltRounds, function (err, hash) {
      //Check if username exists in database.
      db.usernameVerificator(username, hash);
    });

    exports.addTodb = function (user, hash) {
      console.log(user + hash);
      db.sqlinsert(user, hash);
      console.log("added to db");
    };
  }
};
