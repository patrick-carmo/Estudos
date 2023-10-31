// Escreva uma função chamada "segundoMenor" que recebe um array de números inteiros como argumento
// e retorna o segundo menor número no array.

function segundoMenor(arr) {
  // Seu código aqui
  const ordenado = arr.sort((a, b)=> a-b)
  if(ordenado.length>1){
    return ordenado[1]
  }
  return ordenado[0]
}

console.log(segundoMenor([5, 2, 8, 1, 3])) // Deve retornar 2
console.log(segundoMenor([9, 7, 10, 4, 6])) // Deve retornar 6
console.log(segundoMenor([1, 1, 1, 1, 1])) // Deve retornar 1 (todos os números são iguais)
console.log(segundoMenor([7, 2, 2, 8, 5, 6])) // Deve retornar 2
