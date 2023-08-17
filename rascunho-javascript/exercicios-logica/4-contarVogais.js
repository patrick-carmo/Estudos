// Escreva uma função chamada "contarVogais" que recebe uma string como argumento e retorna o número de vogais na string.

function contarVogais(str) {
  // escreva seu código aqui
  const vogais = 'aeiouAEIOU'
  const total = str.split('').reduce((acumulador, atual) => {
    if (vogais.includes(atual)) {
      acumulador = acumulador + 1
    }
    return acumulador
  }, 0)

  return total
}

// Teste sua função com os seguintes casos de teste:
console.log(contarVogais('Olá, mundo!')) // deve imprimir 3
console.log(contarVogais('JavaScript é divertido')) // deve imprimir 7
