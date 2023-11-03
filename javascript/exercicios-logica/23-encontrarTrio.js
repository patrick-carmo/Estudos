// Escreva uma função chamada "encontrarTrio" que recebe uma matriz de números inteiros e um valor alvo como argumentos
// e retorna um array com três números da matriz que somam ao valor alvo. Se não houver um trio que satisfaça a condição, retorne um array vazio.

function encontrarTrio(arr, alvo) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let x = i + 1; x < arr.length - 1; x++) {
      for (let y = x + 1; y < arr.length; y++) {
        if (arr[i] + arr[x] + arr[y] === alvo) {
          return [arr[i], arr[x], arr[y]]
        }
      }
    }
  }
  return []
}

console.log(encontrarTrio([1, 2, 3, 4, 5, 6], 12)) // Deve retornar [1, 5, 6] (1 + 5 + 6 = 12)
console.log(encontrarTrio([1, 2, 3, 4, 5, 6], 10)) // Deve retornar [2, 3, 5] (2 + 3 + 5 = 10)
console.log(encontrarTrio([1, 2, 3, 4, 5, 6], 20)) // Deve retornar [] (não há um trio que some a 20)
