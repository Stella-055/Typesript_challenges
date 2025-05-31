//challenge 1:sum of positives
function sumOfPositives(arr:number[]): number {
    let sum:number =0;
    for (let i:number = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumOfPositives([1, -4, 7, 12]))//20 


// challenge 2:Find Maximum Value

function findMax(arr:number[]): number {
    let max:number=arr[0] ;
    for (let i=0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
//console.log(findMax([1, 4, 7, 12]))//12 


interface candidate{
    name: string;
    votes: number;
}
// challenge 3: Election winner
function findWinner(arr:candidate[]): candidate {

    let winner:candidate = arr[0];
    for ( let i=0; i < arr.length; i++){
        if (arr[i].votes > winner.votes){
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

  function findLongestWord(arr: string[]): string {
    let longest:string =arr[0]
    for (let i=0;i<arr.length;i++){
      if(longest.length<arr[i].length){
           longest=arr[i]
      }
    }
    return longest
  }

  //console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]))//grapefruit

  //challenge 5:Count Properties

function countProperties(obj: Record<string,any>): number {
    
    let count:number= Object.keys(obj).length
    return count
   }
//console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }))//3
   
   
//challenge6 :Filter by Length

function filterByLength(arr:string[],minLength: number): string[] {
    let items:string[] =arr.filter(i => i.length>=minLength)
   return items
   }
   
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5))// returns: ["giraffe", "hippo", "elephant"]
   
   
 