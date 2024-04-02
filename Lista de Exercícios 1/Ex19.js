function calculaPedido(cod, qtd) {
    valorItem = 0;
    switch(cod) {
        case 100:
            //Cachorro quente
            valorItem = 3;
            break;
        case 200:
            //Hambúrguer simples
            valorItem = 4;
            break;
        case 300:
            //Cheeseburguer
            valorItem = 5.50;
            break;
        case 400:
            //Bauru
            valorItem = 7.50;
            break;
        case 500:
            //Refrigerante
            valorItem = 3.50;
            break;
        case 600:
            //Suco
            valorItem = 2.80;
            break;
        default:
            console.log("O código informado para o item é inválido.")
    }
    return valorItem * qtd;
}

fecharPedido = false;
valorDoPedido = 0;
let codigo = 0;
let quantidade = 0;

while(!fecharPedido) {
    console.log("             Cardápio             ");
    console.log("Código       Descrição         Preço");
    console.log("100       Cachorro quente      R$ 3,00");
    console.log("200       Hambúrguer simples   R$ 4,00");
    console.log("300       Cheeseburguer        R$ 5,50");
    console.log("400       Bauru                R$ 7,50");
    console.log("500       Refrigerante         R$ 3,50");
    console.log("600       Suco                 R$ 2,80");
    console.log("");
    codigo = Number(prompt("Qual é código do item que deseja?"));
    quantidade = Number(prompt("E qual é a quantidade?"));
    valorDoPedido += calculaPedido(codigo, quantidade);
    if(prompt("Deseja fechar o pedido?") == "Sim") {
        console.log(`O valor total do pedido é: R$ ${valorDoPedido.toFixed(2).replace(".",",")}`);
        break;
    }
}
