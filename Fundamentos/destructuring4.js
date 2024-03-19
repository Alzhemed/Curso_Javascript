function rand([min = 0, max = 1000]) {
    if (max < min) [min, max] = [max, min];
    return Math.floor(Math.random() * (max-min) + min);
}

console.log(rand([50, 100]));
console.log(rand([50, 40]));
console.log(rand([, 100]));
console.log(rand([]));