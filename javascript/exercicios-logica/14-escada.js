// Escreva uma função chamada "gerarEscada" que recebe um número inteiro como argumento
// e retorna uma "escada" representada como um array multidimensional.

function gerarEscada(niveis) {
  // Seu código aqui
  const array = []
  for(let i = 1; i<niveis; i++){
    const array2 = []
    for(let x = 1; x<=i; x++){
      array2.push(x)
    }
    array.push(array2)
  }
  return array
}

console.log(gerarEscada(3))
// Deve retornar:
// [
//   [1],
//   [1, 2],
//   [1, 2, 3]
// ]

console.log(gerarEscada(5))
// Deve retornar:
// [
//   [1],
//   [1, 2],
//   [1, 2, 3],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4, 5]
// ]
