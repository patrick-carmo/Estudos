// Escreva uma função chamada "acharPares" que recebe um array de números inteiros como argumento
// e retorna um array com todos os pares de números que somam a um valor específico "somaAlvo".

function acharPares(arr, somaAlvo) {
  // Seu código aqui
  const resultado = []
  for (let i = 0; i < arr.length; i++) {
    for (let x = i+1; x < arr.length; x++) {
      if (arr[i] + arr[x] === somaAlvo) {
        resultado.push([arr[i], arr[x]])
      }
    }
  }
  return resultado
}

console.log(acharPares([1, 2, 3, 4, 5, 6], 10)) // Deve retornar [[4, 6]]
console.log(acharPares([1, 2, 3, 4, 5, 6], 7)) // Deve retornar [[1, 6], [2, 5], [3, 4]]
console.log(acharPares([1, 2, 3, 4, 5, 6], 12)) // Deve retornar []
