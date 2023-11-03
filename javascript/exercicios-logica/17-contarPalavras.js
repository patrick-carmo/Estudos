// Escreva uma função chamada "contarPalavras" que recebe uma string como argumento
// e retorna um objeto onde as chaves são as palavras na string e os valores são a quantidade de vezes que cada palavra ocorre.

function contarPalavras(str) {
  // Seu código aqui
  const palavras = str.split(' ')

  const resultado = {}

  for (let palavra of palavras) {
    resultado[palavra] 
    ? resultado[palavra]++ 
    : (resultado[palavra] = 1)
  }

  return resultado
}

const texto = 'o gato pulou sobre o muro e o gato foi visto novamente'
const resultado = contarPalavras(texto)
console.log(resultado)
// Deve retornar um objeto como:
// { "o": 4, "gato": 2, "pulou": 1, "sobre": 1, "muro": 1, "e": 1, "foi": 1, "visto": 1, "novamente": 1 }
