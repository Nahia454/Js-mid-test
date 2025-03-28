function isPalindrome(word){
    word= word.toLowerCase(); // convert to lower case
    return word === word.split(''). reverse().join('') // join all elements within the reverved

}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('Apple`')); //flase
