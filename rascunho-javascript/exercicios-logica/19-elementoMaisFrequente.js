// Escreva uma função chamada "elementoMaisFrequente" que recebe um array de elementos como argumento
// e retorna o elemento que ocorre com maior frequência no array. Se houver empate, retorne qualquer um dos elementos empatados.

function elementoMaisFrequente(arr) {
  // Seu código aqui
  const objeto = {}
  let elementoComum = arr[0]
  let frequencia = 1

  for (const elemento of arr) {
    objeto[elemento] ? objeto[elemento]++ : (objeto[elemento] = 1)

    if (objeto[elemento] > frequencia) {
      elementoComum = elemento
      frequencia = objeto[elemento]
    }
  }

  return elementoComum
}

console.log(elementoMaisFrequente([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])) // Deve retornar 4
console.log(elementoMaisFrequente(['a', 'b', 'b', 'c', 'c', 'c', 'd'])) // Deve retornar 'b' ou 'c' (empate)
console.log(elementoMaisFrequente([true, false, true, true, false])) // Deve retornar true
