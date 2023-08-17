// Escreva uma função chamada "removerEspacos" que recebe uma string como argumento e retorna a string sem espaços.

function removerEspacos(str) {
  // escreva seu código aqui
  return str.replaceAll(' ', '')
}

// Teste sua função com os seguintes casos de teste:
console.log(removerEspacos('Olá, mundo!')) // deve imprimir "Olá,mundo!"
console.log(removerEspacos('JavaScript é divertido')) // deve imprimir "JavaScriptédivertido"
