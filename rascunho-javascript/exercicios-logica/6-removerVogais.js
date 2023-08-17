// Escreva uma função chamada "removerVogais" que recebe uma string como argumento e retorna a string sem as vogais.

function removerVogais(str) {
  // escreva seu código aqui
  const vogais = 'aeiouAEIOU'

  const filtro = str
    .split('')
    .filter((letras) => !vogais.includes(letras))
    .join('')
  return filtro
}

// Teste sua função com os seguintes casos de teste:
console.log(removerVogais('Olá, mundo!')) // deve imprimir ", mnd!"
console.log(removerVogais('JavaScript é divertido')) // deve imprimir "JvScrpt  dvrtd"
