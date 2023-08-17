// Escreva uma função chamada "removerNumeros" que recebe uma string como argumento e retorna a string sem os números.

function removerNumeros(str) {
  // escreva seu código aqui
  // const filtro = str
  //   .split('')
  //   .filter((letras) => !/\d/.test(letras))
  //   .join('')

  // return filtro

  return str.replace(/\d/g, '').trim()
}

// Teste sua função com os seguintes casos de teste:
console.log(removerNumeros('Olá, mundo! 123')) // deve imprimir "Olá, mundo! "
console.log(removerNumeros('JavaScript é divertido 456')) // deve imprimir "JavaScript é divertido "
