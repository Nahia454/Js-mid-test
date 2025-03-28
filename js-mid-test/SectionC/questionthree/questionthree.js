// create my function of  two similar numbers to find their product
function sum (a,b){
  if (a===b){
        return(a+b)*3; 
    }
  else{
        return (a+b);
    }
}
//  similiar numbers
console.log(sum(6,6)); // output:36
// different numbers
console.log(sum(5,9)); // output:14
