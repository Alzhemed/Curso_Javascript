function objetoParaArray(obj) {
    return Object.entries(obj);
}

console.log(objetoParaArray({a: 2, b: 3, c: 4}));