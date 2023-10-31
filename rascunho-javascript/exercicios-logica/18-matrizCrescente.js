// Escreva uma função chamada "ehMatrizCrescente" que recebe uma matriz de números inteiros como argumento
// e retorna true se a matriz for uma matriz estritamente crescente e false caso contrário.

function ehMatrizCrescente(arr) {
  // Seu código aqui
  for(let i = 0; i<arr.length; i++){
    if(arr[i] >= arr[i+1]){
      return false
    }
  }
  return true
}

console.log(ehMatrizCrescente([1, 2, 3, 4, 5])) // Deve retornar true
console.log(ehMatrizCrescente([1, 2, 2, 3, 4])) // Deve retornar false
console.log(ehMatrizCrescente([5, 7, 10, 15, 20])) // Deve retornar true
console.log(ehMatrizCrescente([1, 3, 2, 4, 5])) // Deve retornar false
