function calculaAnoBissexto(ano) {
    let anoBissexto = false
    if(ano % 400 == 0) {
        anoBissexto = true;
    } else if (ano % 100 == 0) {
        anoBissexto = false;
    } else if (ano % 4 == 0) {
        anoBissexto = true;
    }

    if(anoBissexto) {
        console.log(`O ano ${ano} é bissexto.`)
    } else {
        console.log(`O ano ${ano} não é bissexto.`)
    }
}

calculaAnoBissexto(1600);