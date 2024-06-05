const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {};

function saveProduct(product) {
    if(!product.id) product.id = sequence.id;
    products[product.id] = product;
    return product;
}

function getProduct(id) {
    return products[id] || {};
}

function getProducts() {
    return Object.values(products);
}

function removeProduct(id) {
    delete products[id];
    return products;
}

/*Por mais que o objeto "sequence" e o objeto "products" não estejam visíveis fora do módulo,
*as funções que serão visíveis conseguirão manipular eles.
*/
module.exports = { saveProduct, getProduct, getProducts, removeProduct };