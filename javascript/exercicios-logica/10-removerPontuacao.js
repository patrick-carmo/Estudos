// Escreva uma função chamada "removerPontuacao" que recebe uma string como argumento e retorna a string sem pontuação.

function removerPontuacao(str) {
  // escreva seu código aqui
  return str.replace(/[^\w\s\u00C0-\u017F]/g, '')
}

// Teste sua função com os seguintes casos de teste:
console.log(removerPontuacao('Olá, mundo!')) // deve imprimir "Olá mundo"
console.log(removerPontuacao('JavaScript é divertido.')) // deve imprimir "JavaScript é divertido"
