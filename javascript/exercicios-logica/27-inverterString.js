// Escreva uma função chamada "inverterString" que recebe uma string como argumento
// e retorna uma nova string com os caracteres na ordem inversa.

function inverterString(str) {
  // return str.split('').reverse().join('')

  const palavra = []

  for(let i = str.length - 1; i>=0; i--){
    palavra.push(str[i])
  }

  return palavra.join('')
}

console.log(inverterString('abacaxi')) // Deve retornar "ixacaba"
console.log(inverterString('banana')) // Deve retornar "ananab"
console.log(inverterString('carambola')) // Deve retornar "alobmarac"
console.log(inverterString('elefante')) // Deve retornar "etnafale"
