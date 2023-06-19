// Get ArrayInput from user :[1,2,3,4,5];
// Result: [2,4,6,8,10]
// Console.log[];

var input = [5, 6, 7, 8, 9];
var result = [];
function finalResult(input) {
    for (let i = 0; i < input.length; i++) {
        var getIndexValue = input[i]
        var getDouble = getIndex * 2;

        result.push(getDouble);
    }
    console.log(result);
}
finalResult(input);