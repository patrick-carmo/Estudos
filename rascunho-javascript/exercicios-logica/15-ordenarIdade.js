// Escreva uma função chamada "ordenarPorPropriedade" que recebe um array de objetos e o nome de uma propriedade como argumentos
// e retorna o array de objetos ordenado com base na propriedade especificada.

function ordenarPorPropriedade(arrayDeObjetos, propriedade) {
  // Seu código aqui
  return arrayDeObjetos.sort((a, b)=>{
    return a[propriedade] - b[propriedade]
  })
}

const pessoas = [
  { nome: 'Alice', idade: 30 },
  { nome: 'Bob', idade: 25 },
  { nome: 'Charlie', idade: 35 },
  { nome: 'David', idade: 28 },
]

const pessoasOrdenadasPorIdade = ordenarPorPropriedade(pessoas, 'idade')
console.log(pessoasOrdenadasPorIdade)
// Deve retornar:
// [
//   { nome: 'Bob', idade: 25 },
//   { nome: 'David', idade: 28 },
//   { nome: 'Alice', idade: 30 },
//   { nome: 'Charlie', idade: 35 },
// ]
