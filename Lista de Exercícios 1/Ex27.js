function calculaCrescimento(a1, t1, a2, t2) {
    let anosCrescimento = 0;
    if(a1 < a2) {
        if(t1 > t2) {
            while(a1 <= a2) {
                a1 += t1;
                a2 += t2;
                anosCrescimento += 1;
            }
            console.log(`A primeira criança ultrapassará a altura da segunda em ${anosCrescimento} anos.`)
        } else {
            console.log("A primeira criança é menor, mas devido a baixa taxa de crescimento, ela não ficará maior que a segunda.");
        }
        
    } else if (a1 > a2) {
        if(t1 < t2) {
            while(a2 <= a1) {
                a1 += t1;
                a2 += t2;
                anosCrescimento += 1;
            }
            console.log(`A segunda criança ultrapassará a altura da primeira em ${anosCrescimento} anos.`)
        } else {
            console.log("A segunda criança é menor, mas devido a baixa taxa de crescimento, ela não ficará maior que a primeira.");
        }
    } else {
        console.log("As duas crianças possuem a mesma altura.");
    }
}

calculaCrescimento(80, 7, 70, 9);