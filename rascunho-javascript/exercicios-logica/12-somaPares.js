// Crie uma função chamada "somaPares" que recebe um array de números como argumento
// e retorna a soma de todos os números pares no array.

function somaPares(numeros) {
  // escreva seu código aqui
  const pares = numeros.reduce((inicial, atual)=>{
    if(atual % 2 === 0){
      inicial += atual
    }
    return inicial
  }, 0)
  return pares
}

// Exemplo de uso:
console.log(somaPares([1, 2, 3, 4, 5, 6])) // deve imprimir 12
