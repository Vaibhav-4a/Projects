const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const chars = "!@#$%^&*()";
const length = 12;

const passwordBox = document.getElementById("Password");

function randomPassword(){
    let password = "";
    let allchars = upperCase+lowerCase+numbers+chars;
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=chars[Math.floor(Math.random()*chars.length)];
    while(length>password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordBox.value = password;
}

function copy(){
    passwordBox.select();
    document.execCommand("copy");
}