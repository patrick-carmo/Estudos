class Produto {
  nome: string
  preco: number
  descricao: string

  constructor(nome: string, preco: number, descricao: string) {
    this.nome = nome
    this.preco = preco
    this.descricao = descricao
  }
}

class CarrinhoDeCompras {
  produtos: Produto[] = []

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto)
  }

  calcularTotal(): number {
    return this.produtos.reduce((acc, produto) => acc + produto.preco, 0)
  }

  listarProdutos(): void {
    this.produtos.forEach(produto => console.log(produto))
  }
}

const produto = new Produto('Notebook', 5000, 'Notebook Dell')
const produto2 = new Produto('Mouse', 50, 'Mouse Logitech')

const carrinho = new CarrinhoDeCompras()
carrinho.adicionarProduto(produto)
carrinho.adicionarProduto(produto2)

carrinho.listarProdutos()
console.log(carrinho.calcularTotal())
