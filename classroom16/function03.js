function factorial(number) {
    let fact = 1;
    for (let counter = number; counter > 1; counter--) {
        fact *= counter;      
    }
    return fact;
}

console.log(factorial(5));