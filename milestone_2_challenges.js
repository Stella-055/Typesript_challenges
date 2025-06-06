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
/*console.log (findWinner([
   { name: "Alice", votes: 50 },
   { name: "Bob", votes: 75 },
   { name: "Charlie", votes: 65 }
 ]))//{ name: "Bob", votes: 75 } */
//challenge 4: Longest word
function findLongestWord(arr) {
    var longest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (longest.length < arr[i].length) {
            longest = arr[i];
        }
    }
    return longest;
}
//console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]))//grapefruit
//challenge 5:Count Properties
function countProperties(obj) {
    var count = Object.keys(obj).length;
    return count;
}
//console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }))//3
//challenge6 :Filter by Length
function filterByLength(arr, minLength) {
    var items = arr.filter(function (i) { return i.length >= minLength; });
    return items;
}
//console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5))// returns: ["giraffe", "hippo", "elephant"]
//challenge 7:Sum of Even Numbers
function sumEvenNumberss(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}
//console.log(sumEvenNumberss([1, 2, 3, 4, 5, 6]))// returns: 12  
//challenge 8:Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(arr) {
    var evenArray = arr.filter(function (i) { return i % 2 === 0; });
    var oddArray = arr.filter(function (i) { return i % 2 !== 0; });
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 0; i < evenArray.length; i++) {
        sumEven += evenArray[i];
    }
    for (var i = 0; i < oddArray.length; i++) {
        sumOdd += oddArray[i];
    }
    return sumEven - sumOdd;
}
//console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]))//3 
//challenge 9 Count Truthy 
function countTruthy(obj) {
    var sum = 0;
    for (var k in obj) {
        if (obj[k]) {
            sum++;
        }
    }
    return sum;
}
//console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }))//2
//challenge 10 :Average of Numbers
function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum == 0) {
        return 0;
    }
    else
        return sum / arr.length;
}
//console.log(average([2, 4, 6, 8])) // returns: 5
//console.log(average([])) // returns: 0 */
//challenge 11 Linear Search
function linearSearch(arr, val) {
    //return arr.indexOf(val)
    var firstindex = -1;
    for (var i = 0; i < arr.length && firstindex == -1; i++) {
        if (arr[i] == val) {
            firstindex = i;
        }
    }
    return firstindex;
}
//console.log(linearSearch([5, 3, 7, 1,7, 4], 7) ) // returns: 2
//console.log (linearSearch([5, 3, 7, 1, 4], 10) )// returns: -1) */
//challenge 12 :reverse linear search
function reverseLinearSearch(arr, val) {
    //return arr.lastindexOf(val)
    var lastindex = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            lastindex = i;
        }
    }
    return lastindex;
}
//console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7) ) // returns: 5 */
//challenge 13 : linear search  all indices
function linearSearchAll(arr, val) {
    var allIndices = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            allIndices.push(i);
        }
    }
    return allIndices;
}
//console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7) ) // returns: [2,5]*/
// challenge 14:Count Occurrences
function countOccurrences(arr) {
    var occurrences = {};
    arr.forEach(function (element) {
        if (element in occurrences) {
            occurrences[element] += 1;
            return;
        }
        occurrences[element] = 1;
    });
    return occurrences;
}
// console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]))// returns: { apple: 3, banana: 2, orange: 1 }
// challenge 15: Remove Duplicates
function removeDuplicates(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
//console.log(removeDuplicates([1, 2, 3, 2, 1, 4]))// returns: [1, 2, 3, 4]
//challenge 16 : Most Frequent
function mostFrequent(arr) {
    var occurrences = {};
    arr.forEach(function (element) {
        if (element in occurrences) {
            occurrences[element] += 1;
            return;
        }
        occurrences[element] = 1;
    });
    var maxCount = 0;
    var mostFrequentElement = Object.keys(occurrences)[0];
    for (var element in occurrences) {
        if (occurrences[element] > maxCount) {
            maxCount = occurrences[element];
            mostFrequentElement = element;
        }
    }
    return mostFrequentElement;
}
console.log(mostFrequent([1, 2, 3, 2, 1, 4])); // returns: 1
