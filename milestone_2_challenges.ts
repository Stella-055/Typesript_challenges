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
console.log(sumOfPositives([1, -4, 7, 12]))//20 
