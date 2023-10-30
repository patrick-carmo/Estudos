// Escreva uma função chamada "ehSequenciaAritmetica" que recebe uma matriz de números inteiros como argumento
// e retorna true se a matriz forma uma sequência aritmética e false caso contrário.

function ehSequenciaAritmetica(arr) {
  // Seu código aqui

  const diferenca = arr[1] - arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diferenca) {
      return false
    }
  }

  return true
}

console.log(ehSequenciaAritmetica([2, 4, 6, 8])) // Deve retornar true (diferença comum é 2)
console.log(ehSequenciaAritmetica([3, 6, 9, 12])) // Deve retornar true (diferença comum é 3)
console.log(ehSequenciaAritmetica([1, 2, 4, 8])) // Deve retornar false (não é uma sequência aritmética)
console.log(ehSequenciaAritmetica([5, 10, 20, 40])) // Deve retornar false (não é uma sequência aritmética)
