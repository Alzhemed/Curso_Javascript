function rand({min = 0, max = 1000} = {}) {
    if (max < min) {
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({max: 50, min: 40}));
console.log(rand({min: 950}));
console.log(rand({}));
//console.log(rand());