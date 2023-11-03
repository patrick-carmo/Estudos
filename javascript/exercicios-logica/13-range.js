// Escreva uma função chamada "range" que recebe dois argumentos, start e end, e retorna um array contendo todos os números de start até end (inclusive).

function range(start, end) {
  // Seu código aqui
  let retorno = []
  for(start; start<=end; start++){
      retorno.push(start)
  }

  return retorno
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
