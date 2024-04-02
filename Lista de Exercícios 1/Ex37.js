function progressaoAritmetica(n, a1, r) {
    an = a1 + (n - 1) * r
    for(let c = a1; c <= an; c += r) {
        console.log(c);
    }
}

function progressaoGeometrica(n, a1, r) {
    an = a1 * (r ** (n-1))
    for(let c = a1; c <= an; c *= r) {
        console.log(c);
    }
}

progressaoAritmetica(5, 2, 4);
console.log("");
progressaoGeometrica(5, 1, 3);
