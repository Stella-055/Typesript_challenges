//Challenge 1:Return the Sum of Two Numbers

function addition(num1:number,num2:number) : number{
   
    return num1+num2
}

//console.log(addition(4,5))// 9

//challenge 2: convert minutes to seconds
function convert(minutes:number): number {
    return minutes*60
}
//console.log(convert(5));// 300


//Challenge 3: Perimeter of a Rectangle
function findPerimeter(length:number,width:number): number {
    let sum:number = length+width
    return 2*sum
}
//console.log(findPerimeter(6,7));// 26


//Challenge 4:check negative

function isNegative(number:number): boolean {
    if (number<0){
     return true;
 
    }
    else
    return false
 }
 console.log(isNegative(2))//false
 console.log(isNegative(-1))//true
 