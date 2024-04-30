function removerPropriedade(obj, prop) {
    let newObj = Object.assign({}, obj);

    delete newObj[prop];

    return newObj;
}

obj1 = {a: 2, b: 3};

obj2 = removerPropriedade(obj1, "b");

console.log(obj2);

console.log(Object.is(obj1, obj2));