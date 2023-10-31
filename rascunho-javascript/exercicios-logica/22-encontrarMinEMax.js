// Escreva uma função chamada "encontrarMinEMax" que recebe um array de números inteiros como argumento
// e retorna um novo array contendo o menor e o maior número do array original.

function encontrarMinEMax(arr) {
  // Seu código aqui
  const ordenado = arr.sort((a, b)=> a-b)
  return {
    menor: ordenado[0],
    maior: ordenado[ordenado.length-1]
  }
}

console.log(encontrarMinEMax([3, 7, 2, 8, 4])) // Deve retornar [2, 8] (menor: 2, maior: 8)
console.log(encontrarMinEMax([10, 5, 2, 15, 1])) // Deve retornar [1, 15] (menor: 1, maior: 15)
console.log(encontrarMinEMax([9, 12, 6, 1, 7])) // Deve retornar [1, 12] (menor: 1, maior: 12)
