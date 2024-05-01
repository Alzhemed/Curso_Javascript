function numeroDaSorte(num) {
    const numSorte = Math.floor(Math.random() * 10) + 1;

    if(num == numSorte) {
        console.log(`Parabéns! O número sorteado foi ${numSorte}.`)
    } else {
        console.log(`Que pena! O número sorteado foi ${numSorte}.`)
    }
}

numeroDaSorte(6);
numeroDaSorte(3);
numeroDaSorte(10);