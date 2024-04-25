function repetirString(num) {
    resultado = "";

    for(let i = 0; i < num; i++) {
        resultado += "+";
    }

    return resultado;
}

console.log(repetirString(5));