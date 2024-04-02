function verificaFruta(fruta) {
    fruta = fruta.toLowerCase();
    msg = "";
    switch(fruta) {
        case "maçã":
            msg = "Não vendemos essa fruta aqui."
            break;
        case "kiwi":
            msg = "Estamos com escassez de kiwi."
            break;
        case "melancia":
            msg = "Aqui está. São 3 reais o kilo."
            break;
        default:
            msg = "O nome da fruta informado é inválido";
    }

    console.log(msg)
}

verificaFruta("MAÇÃ");
verificaFruta("KiWi");
verificaFruta("Melancia");
verificaFruta("banana");
