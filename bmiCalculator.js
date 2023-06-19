function bmiCalculator() {
    var getHeight = prompt('Kindly Give us your height');
    var getWeight = prompt('Kindly Give us your weight');
    var bmi = getWeight / Math.pow(getHeight, 2);
    return (alert('Hello ! Your height is ' + getHeight + ' and your weight is ' + getWeight + 'and finally your BMI is:' + Math.round(bmi)));
}
bmiCalculator();

// New Code;
function bmiCalculator() {
    var getHeight = prompt('Kindly Give us your height(in meter)');
    var getWeight = prompt('Kindly Give us your weight(in K.g)');
    var bmi = getWeight / Math.pow(getHeight, 2);
    var bmiFixed = bmi.toFixed(2);
    alert(bmiFixed);

    // return (alert('Hello ! Your height is ' + getHeight + ' and your weight is ' + getWeight + 'and finally your BMI is:' + Math.round(bmi)));

    // bmiCalculator();
    /*BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
    
    BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
    
    BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."*/

    if (bmiFixed < 18.5) {
        alert('Your BMI is ' + bmiFixed + ', so you are underweight.');
    } else if (bmiFixed >= 18.5 && bmiFixed < 24.9) {
        alert('Your BMI is' + bmiFixed + ', so you have a normal weight');
    } else if (bmiFixed > 24.9) {
        alert('Your BMI is ' + bmiFixed + ', so you are overweight.');
    }
}
bmiCalculator();




