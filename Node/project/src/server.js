const port = 3003;

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const database = require("./database");

/*Essa linha significa que para qualquer requisição que seja feita no servidor e
*que o body esteja no formato url encoded, o Body Parser realizará uma transformação do
*body da requisição para objeto, de forma que o possamos utilizar dentro do Javascript.
*/
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
    res.send(database.getProducts()); //O objeto será convertido para JSON
})

//Neste acesso o ":id" pode ser substituído pelo próprio id do produto, por exemplo: /produtos/125.
app.get("/produtos/:id", (req, res, next) => {
    res.send(database.getProduct(req.params.id));
})

app.post("/produtos", (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put("/produtos/:id", (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    })
    res.send(product)
})

app.delete("/produtos", (req, res, next) => {
    res.send(database.removeProduct(req.body.id));
})

app.listen(port, () => {
    console.log(`The server has been launched succesfully on port ${port}.`);
});