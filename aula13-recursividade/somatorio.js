// somar de 1 até N

function somar(n) {
    if (n === 1) {
        return 1;
    }
    return n + somar(n-1);
}

console.log(somar(10));