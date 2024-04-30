function filtrarParesIndicesPares(array) {
    return array.filter((num, idx) => (num % 2 == 0) && (idx % 2 == 0));
}

console.log(filtrarParesIndicesPares([1, 2, 3, 4]));
console.log(filtrarParesIndicesPares([10, 70, 22, 43]));