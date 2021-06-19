const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

  readline.question(`Plz enter the length of password : `, password_length => {
  readline.close()
         var password = "";
           for(var i = 0; i < password_length; i++){
           var randomNumber = Math.floor(Math.random()*chars.length);
           password += chars.substring(randomNumber, randomNumber+1);
       }
console.log(password);
})