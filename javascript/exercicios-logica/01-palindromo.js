// Exercício: Verificador de Palíndromo
// O objetivo deste exercício é criar uma função que verifica se uma palavra é um palíndromo.

// 1. Defina uma função chamada 'verificarPalindromo' que aceita um parâmetro 'palavra'.
function verificarPalindromo(palavra) {
  // 2. Converta a palavra para letras minúsculas para evitar problemas de capitalização.
  const letras = palavra.toLowerCase()
  // 3. Inverta a palavra.
  let palavraInvertida = letras.split('').reverse().join('')
  // 4. Verifique se a palavra invertida é igual à palavra original.
  return palavraInvertida === letras
  // 5. Retorne verdadeiro se for um palíndromo e falso caso contrário.
}

// 6. Teste a função com diferentes palavras para verificar se ela identifica palíndromos corretamente.
console.log(verificarPalindromo('arara')) // Deve imprimir: true
console.log(verificarPalindromo('banana')) // Deve imprimir: false
console.log(verificarPalindromo('radar')) // Deve imprimir: true
