let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//O que resulta em verdadeiro?
isAtivo = 1;
console.log(!!isAtivo);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//O que resulta em falso?
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = 0));

//Pra finalizar
console.log(!!('' || null || 0 || " "));

let nome = "Lucas"
console.log(nome || "Desconhecido");