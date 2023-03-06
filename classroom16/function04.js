/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4! 
n! = n x (n-1)!
1! = 1
*/
function factorial(number) {
    if (number == 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }    
}

console.log(factorial(5));