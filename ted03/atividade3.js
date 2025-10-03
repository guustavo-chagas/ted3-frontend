let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
console.log(nomes[2]);

nomes.push("Fernanda");
nomes.unshift("Gustavo");
console.log(nomes);

nomes.pop();
console.log(nomes);

let numeros = [2, 4, 6, 8];
let numerosDobrados = numeros.map(function(num) {
  return num * 2;
});
console.log(numerosDobrados);

let numeros2 = [1, 3, 5, 7, 9];
let maioresQueCinco = numeros2.filter(function(num) {
  return num > 5;
});
console.log(maioresQueCinco);
