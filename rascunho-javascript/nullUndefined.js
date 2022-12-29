let valor // não inicializado
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.tostring()) // erro

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)
produto.preco = undefined //evite atribuir undefined
console.log(produto.preco)
console.log(produto)
