// javascript
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let password1 = document.querySelector("#container-p2") 
let password2 = document.querySelector("#container-p3") 
let randomPassword1 = []
let randomPassword2 = []

////////////first password function 
function generatePassword1(){
randomPassword1 = []    
for(let i = 0; i < 16; i++){
randomNumber = Math.floor(Math.random()*91)
randomPassword1 += [characters[randomNumber]]
}   
password1.innerText = randomPassword1
}

////////////second password function 
function generatePassword2(){
randomPassword2 = [] 
for(let i = 0; i < 16; i++){
randomNumber = Math.floor(Math.random()*91)
randomPassword2 += [characters[randomNumber]]
}
 password2.innerText = randomPassword2
}

