function verificaCompra(carro) {
    carro = carro.toLowerCase();
    msg = "";
    switch(carro) {
        case "hatch":
            msg = "Compra efetuada como sucesso."
            break;
        default:
            msg = "Não vendemos esse modelo de carro aqui.";
            break;
        case "sedan":
        case "motocicleta":
        case "moto":
        case "caminhonete":
            msg = "Tem certeza que não prefere este modelo?"
    }

    console.log(msg)
}

verificaCompra("hatch");
verificaCompra("moto");
verificaCompra("caminhão");
verificaCompra("sedan");