function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(calculateFactorial(5)); 
console.log(calculateFactorial(0)); 
console.log(calculateFactorial(1));

let doubleArray = function(arr) {
    return arr.map(num => num * 2);
};

console.log(doubleArray([1, 2, 3])); 
console.log(doubleArray([5, 10, 15]));

let factorial = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};

console.log(factorial(5)); 
console.log(factorial(0));
console.log(factorial(1));

function processArray(arr, callback) {
    return arr.map(callback);
}


let arr = [1, 2, 3, 4, 5];
let doubledArray = processArray(arr, function(num) {
    return num * 2;
});

console.log(doubledArray);