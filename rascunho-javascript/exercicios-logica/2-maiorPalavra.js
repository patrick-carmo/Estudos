// Escreva uma função chamada "maiorPalavra" que recebe uma string como argumento e retorna a maior palavra da string.

function maiorPalavra(str) {
  // escreva seu código aqui
  return str.trim().split(' ').reduce((valor,atual)=>atual.length > valor.length ? atual : valor)

}

// Teste sua função com os seguintes casos de teste:
console.log(maiorPalavra('O gato pulou sobre o muro')) // deve imprimir "pulou"
console.log(maiorPalavra('Eu amo programar em JavaScript')) // deve imprimir "JavaScript"
