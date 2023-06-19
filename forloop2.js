// get the user input number
// collect all the even number upto that given number
// display all the numbers

function displayResult(){
    prompt("display Result method called");

    let userInputNumber = +document.getElementById("userInputNumber").value;

    var evenNumberArray = [];
    var oddNumberArray = [];

    prompt("You have input following number: "+ userInputNumber);

    for(let i = 0; i< userInputNumber; i++){
        if(i % 2 == 0){
            evenNumberArray.push(i);
        }else{
            oddNumberArray.push(i);
        }
    }
    
    prompt("total even numbers "+ evenNumberArray);
    prompt("total Odd numbers "+ oddNumberArray);
}