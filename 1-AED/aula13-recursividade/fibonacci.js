// Fibonacci

function fibonacci(n) { // 5
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // 4 + 3 / 3 + 2 / 2 + 1 / 1 + 0
}

console.log(fibonacci(5));

/*
fibo(5) = fibo(4) + fibo(3) = 3 + 2 = 5
fivo(4) = fibo(3) + fibo(2) = 2 + 1 = 3
fibo(3) = fibo(2) + fibo(1) = 1 + 1 = 2
fibo(2) = fibo(1) + fibo(0) = 1 + 0 = 1
fibo(0) = 0
fibo(1) = 1
fibo(2) = 1 + 0 = 1
fibo(3) = 1 + 1 = 2
fibo(4) = 2 + 1 = 3
fibp(5) = 3 + 2 = 5
*/