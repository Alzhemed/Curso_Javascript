function calculaDelta(a, b, c) {
    delta = (b ** 2) - (4 * a * c);
    if (delta < 0) {
        return "O delta é negativo";
    } else {
        return [Math.sqrt(delta), -Math.sqrt(delta)];
    }
}

console.log(calculaDelta(1, 12, -13));