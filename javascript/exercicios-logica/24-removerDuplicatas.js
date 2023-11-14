const removerDuplicatas = (array) => {
  const arraySemDuplicatas = array.filter((elemento, indice) => array.indexOf(elemento) === indice)
  return console.log(arraySemDuplicatas)
}

removerDuplicatas([1, 2, 3, 3, 4, 5, 5, 6]) // retorna [1, 2, 3, 4, 5, 6]
removerDuplicatas([10, 20, 10, 20, 40, 20, 50]) // retorna [10, 20, 30, 40, 50]
