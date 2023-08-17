// Escreva uma função chamada "contarConsoantes" que recebe uma string como argumento e retorna o número de consoantes na string.

function contarConsoantes(str) {
  // escreva seu código aqui
  const vogais = 'aeiouAEIOU'

  const filtro = str.split('').reduce((contador, atual) => {
    if (/[a-zA-Z]/.test(atual)) {
      if (!vogais.includes(atual)) {
        contador++
      }
    }
    return contador
  }, 0)

  return filtro
}

// Teste sua função com os seguintes casos de teste:
console.log(contarConsoantes('Olá, mundo!')) // deve imprimir 5
console.log(contarConsoantes('JavaScript é divertido')) // deve imprimir 13
