function verificaMes(numMes) {
    let mesExtenso = "";
    switch(numMes){
        case 1:
            mesExtenso = "Janeiro";
            break;
        case 2:
            mesExtenso = "Fevereiro";
            break;
        case 3:
            mesExtenso = "Março";
            break;
        case 4:
            mesExtenso = "Abril";
            break;
        case 5:
            mesExtenso = "Maio";
            break;
        case 6:
            mesExtenso = "Junho";
            break;
        case 7:
            mesExtenso = "Julho";
            break;
        case 8:
            mesExtenso = "Agosto";
            break;
        case 9:
            mesExtenso = "Setembro";
            break;
        case 10:
            mesExtenso = "Outubro";
            break;
        case 11:
            mesExtenso = "Novembro";
            break;
        case 12:
            mesExtenso = "Dezembro";
            break;
        default:
            mesExtenso = "O número informado para o mês não está entre 1 e 12.";
    }

    return mesExtenso;
}

console.log(verificaMes(7));