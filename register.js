const main = require("./app.js");
const crypto = require("crypto")

let userpass = 'domatic';
//db.sqlinsert(username, passhash);
function alphanumValidation(userpass) {
  let alphaNum = /^[0-9a-zA-Z]+$/;
  if (userpass.match(alphaNum)) {
    let mykey = crypto.createCipher("aes-128-cbc", userpass);
    let passhash = mykey.update("abc", "utf8", "hex");
    passhash += mykey.final("hex");
  } else {
    alert("Use only letters and numbers")
  }
}

//Check if the password contains only letters and numbers.
if (alphanumValidation(userpass)) {
  console.log("Returned: True");
} else {
  console.log("Returned: False");
}
