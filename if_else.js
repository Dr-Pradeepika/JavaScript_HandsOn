// Exercise:
// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Hey Sorry! You are Old Man. You are " + userInputAge + "Year old"", otherwise output "Hey Congratulations! You are still PlayBoy.You are " + userInputAge + "Year old

function getUserAge(){
var userInputAge = +document.getElementById("userAge").value;

if(userInputAge >18) {
    prompt("Hey Sorry! You are Old Man. You are " + userInputAge + "Year old");
}else{
    prompt("Hey Congratulations! You are still PlayBoy.You are " + userInputAge + "Year old");
}
}
