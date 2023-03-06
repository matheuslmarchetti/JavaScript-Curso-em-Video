// 5! = 5 x 4 x 3 x 2 x 1
function factorial(number) {
    let fact = 1;
    for (let counter = number; counter > 1; counter--) {
        fact *= counter;      
    }
    return fact;
}

console.log(factorial(5));