const dobrarNumeros = (numeros) => {
  const dobro = numeros.map((numero) => numero * 2)
  return console.log(dobro)
}

dobrarNumeros([1, 2, 3, 4]) // retorna [2, 4, 6, 8]
dobrarNumeros([10, 20, 30, 40]) // retorna [20, 40, 60, 80]
