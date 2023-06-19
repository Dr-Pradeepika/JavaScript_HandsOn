// result=Where every number is the sum of the two previous ones.;

var UserInput = prompt("Hello Give any number!");

function fibonacciGenerator(UserInput) {
    var sequence = [0, 1];
    for (var i = 2; i < UserInput; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
        //sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    console.log(sequence);
}
fibonacciGenerator(UserInput);