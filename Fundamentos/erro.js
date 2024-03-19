function tratarErroELancar(erro) {
  //throw new Error("...");
  //throw 10;
  //throw true;
  //throw "mensagem";
  objData = new Date();
  data = `${objData.getDate()}/${objData.getMonth()}/${objData.getFullYear()}`;
  hora = `${objData.getHours()}:${objData.getMinutes()}:${objData.getSeconds()}`;
  throw {
    nome: erro.name,
    msg: erro.message,
    date: data + " " + hora
  }
}

function imprimirNomeMaiusc(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
      tratarErroELancar(e);
  } finally {
    console.log("Final.")
  }
  
}

const obj = {name: "João"};

imprimirNomeMaiusc(obj);