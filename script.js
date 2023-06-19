function callFunction(){
    prompt('hello');
}

function addTwoNumber(){
    var a = 20 ;
    

    var firstNumber = +document.getElementById("firstNumber").value;
    var secondNumber = +document.getElementById("secondNumber").value;
   

    // call
    var sum = addTwoNumber1(firstNumber, secondNumber);
    var sum1 = firstNumber + secondNumber;
    prompt(sum1);
}



// take two number as input
// making sum of them
// return sum
function addTwoNumber1(numberOne,  numberTwo){
    var sum = numberOne + numberTwo;
    
    return sum;
}