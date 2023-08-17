// Escreva uma função chamada "inverterString" que recebe uma string como argumento e retorna a string invertida.

function inverterString(str) {
  // escreva seu código aqui
  const string = str.trim().split('').reverse().join('')
  return string
}

// Teste sua função com os seguintes casos de teste:
console.log(inverterString('Olá, mundo!')) // deve imprimir "!odnum ,álO"
console.log(inverterString('JavaScript é divertido')) // deve imprimir "odivitred é tpircSavaJ"
