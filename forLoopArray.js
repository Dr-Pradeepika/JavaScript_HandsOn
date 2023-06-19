var n = 5;
var output = 1;

function getEachNumberOfMultiplication(n) {
    for (let i = 1; i <= n; i++) {
        output = output * i;
        console.log(output);
    }
}
getEachNumberOfMultiplication(n);