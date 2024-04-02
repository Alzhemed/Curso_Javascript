function calculaDiaUtil(dia) {
    let diaTexto;
    let diaUtil;
    switch (dia) {
        case 1:
            diaUtil = "não é";
            diaTexto = "Domingo"
            break;
        case 2:
            diaUtil = "é";
            diaTexto = "Segunda-feira"
            break;
        case 3:
            diaUtil = "é";
            diaTexto = "Terça-feira"
            break;
        case 4:
            diaUtil = "é";
            diaTexto = "Quarta-feira"
            break;
        case 5:
            diaUtil = "é";
            diaTexto = "Quinta-feira"
            break;
        case 6:
            diaUtil = "é";
            diaTexto = "Sexta-feira"
            break;  
        case 7:
            diaUtil = "não é";
            diaTexto = "Sábado"
            break;
        default:
            diaTexto = "O valor do dia informado é inválido";
    }

    if(diaTexto.length > 13){
        console.log(diaTexto)
    } else {
        console.log(`${diaTexto} ${diaUtil} dia útil.`)
    }
}

calculaDiaUtil(7);