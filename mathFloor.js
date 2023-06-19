
// function getMilk(){
var costBottlesOfMilk = 1.5;
console.log('Hello! How many bottles of milk you need?');
var noOfBottles = prompt('Hello! How many bottles of milk you need?');
var amountOfMoney = prompt('Kindly Give me money to buy bottles of Milk');
var calPrice_UserBottlesOfMilk = Math.floor(amountOfMoney / costBottlesOfMilk);

var returnRestOfAmount = Math.floor(noOfBottles / costBottlesOfMilk);
alert('Here is your ' + calPrice_UserBottlesOfMilk + ' Milk of Bottles and here is your money ' + returnRestOfAmount);



// }

// Other Method;

function getMilk() {
    var costBottlesOfMilk = 1.5;
    var noOfBottles = prompt('Hello! How many bottles of milk you need?');
    var amountOfMoney = prompt('Kindly Give me money to buy bottles of Milk')
    var spendMoneyOnBuyingBottlesOfMilk = Math.floor(costBottlesOfMilk * noOfBottles);
    var returnRestOfAmount = Math.floor(amountOfMoney - spendMoneyOnBuyingBottlesOfMilk);
    return (alert('Here is your ' + noOfBottles + ' Milk of Bottles and here is your money ' + returnRestOfAmount + 'Total money spend is ' + spendMoneyOnBuyingBottlesOfMilk));
}

getMilk(returnRestOfAmount);
