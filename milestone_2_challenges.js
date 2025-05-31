//challenge 1:sum of positives
function sumOfPositives(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumOfPositives([1, -4, 7, 12]))//20 
// challenge 2:Find Maximum Value
function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// challenge 3: Election winner
function findWinner(arr) {
    var winner = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].votes > winner.votes) {
            winner = arr[i];
        }
    }
    return winner;
}
console.log(findWinner([
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
])); //{ name: "Bob", votes: 75 } */
