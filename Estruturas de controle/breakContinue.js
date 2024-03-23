const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in nums) {
  if (x == 5) {
    break;
  }
  console.log(`X = ${nums[x]}`);
}

console.log("");

for (let y in nums) {
  if (y == 5) {
    continue; //Interrompe a repetição atual e pula para a próxima.
  }
  console.log(`Y = ${nums[y]}`);
}

console.log("");

externo: //Atribuindo um nome/rótulo para o laço "For"
  for (a in nums) {
    for (b in nums) {
      if (a == 2 && b == 3) {
        break externo;
      } 
      
      console.log(`Par = ${a}, ${b}`);
      
    }
  }
  
  console.log("Fim")