// Exercício: Calculadora de Média
// O objetivo deste exercício é criar uma função que calcula a média de um array de números.

// 1. Defina uma função chamada 'calcularMedia' que aceita um parâmetro 'numeros'.
function calcularMedia(numeros) {
  // 2. Verifique se o array está vazio; nesse caso, retorne 0.
  if (numeros.length === 0) {
    return 0
  }
  // 3. Some todos os números do array.
  const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
  // 4. Calcule a média dividindo a soma pelo total de números.
  const media = soma / numeros.length
  // 5. Retorne a média.
  return media
}

// 6. Teste a função com diferentes arrays de números para calcular a média.
console.log(calcularMedia([10, 20, 30, 40, 50])) // Deve imprimir: 30
console.log(calcularMedia([5, 7, 12, 15])) // Deve imprimir: 9.75
console.log(calcularMedia([])) // Deve imprimir: 0
