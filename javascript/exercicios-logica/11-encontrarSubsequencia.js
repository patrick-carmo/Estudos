// Escreva uma função chamada "encontrarSubsequencia" que recebe duas strings como argumentos e retorna true se a segunda string for uma subsequência da primeira string, ou false caso contrário.

function encontrarSubsequencia(str1, str2) {
  // escreva seu código aqui
  return str1.includes(str2)
}
// Teste sua função com os seguintes casos de teste:
console.log(encontrarSubsequencia('Olá, mundo!', 'mundo')) // deve imprimir true
console.log(encontrarSubsequencia('JavaScript é divertido', 'Java')) // deve imprimir true
console.log(encontrarSubsequencia('JavaScript é divertido', 'Python')) // deve imprimir false
