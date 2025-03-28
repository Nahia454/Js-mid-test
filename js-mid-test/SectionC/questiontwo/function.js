function SumEvenNumbers(numbers){
    return numbers.filter(num=> num% 2===0).reduce((a,b)=>a+b,0);

}
let numbers =[1,2,3,4,5];
let sum = SumEvenNumbers(numbers)
console.log('Sum of even numbers:${sum}')
