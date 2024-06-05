//A propriedade "argv" retorna um array com todos o argumentos que foram informado no terminal.
const anonimo = process.argv.indexOf("-a") !== -1;

if(anonimo) {
    process.stdout.write("Inicializando o programa de forma anônima...");
} else {
    process.stdout.write("Inicializando o programa...");
    console.log("")
    process.stdout.write("Favor informar o nome de usuário: ");
    /*A linha abaixo ativa um observador que vai chamar a função callback quando
    *quando algum dado for inserido no terminal e a tecla enter for pressionada
    *para enviar.
    */
    process.stdin.on("data", data => {
        let usuario = data.toString().replace('\n', '');
        process.stdout.write(`Bem-vindo, ${usuario}!\n`);
        process.exit();
    });
}