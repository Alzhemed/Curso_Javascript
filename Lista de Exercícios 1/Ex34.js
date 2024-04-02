function verificaTexto(txt1 = "", txt2 = "") {
    return txt1.includes(txt2) || txt2.includes(txt1);
}

console.log(verificaTexto("abc", "bc"))

function verificaTexto2(txt1 = "", txt2 = "") {
    return txt1 == txt2;
}

console.log(verificaTexto("abc", "abc"))