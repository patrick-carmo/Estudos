const filtrarPares = (numeros) => {
  const pares = numeros.filter((numero) => numero % 2 === 0)

  return console.log(pares)
}

filtrarPares([1, 2, 3, 4]) // retorna [2, 4]
filtrarPares([11, 22, 33, 44]) // retorna [22, 44]
