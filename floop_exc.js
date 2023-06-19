// Write a JavaScript program that displays the largest integer among two integers.
// Define function (){}
// Get the userInput : number1, number2. ex: let 
//if  condition 

function findLargestInteger(){
    var userFirstInteger = document.getElementById("userFirstInteger").value;
    var userSecondInteger = document.getElementById("userSecondInteger").value;

    var maxNumber = 0;

    if(userFirstInteger > userSecondInteger){
        maxNumber = userFirstInteger;

    }else{
        maxNumber = userSecondInteger;
    }
    prompt(maxNumber);
    
}
