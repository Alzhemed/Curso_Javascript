function filtrarNumeros(array) {
    const arrayFiltrado = array.filter(e => typeof e === "number");
    return arrayFiltrado;
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));