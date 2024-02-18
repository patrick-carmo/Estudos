class Livro {
  titulo: string
  autor: string
  anoPublicacao: number
  genero: string

  constructor(titulo: string, autor: string, anoPublicacao: number, genero: string) {
    this.titulo = titulo
    this.autor = autor
    this.anoPublicacao = anoPublicacao
    this.genero = genero
  }
}

class Biblioteca {
  livros: Livro[] = []

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro)
  }

  listarLivros(): void {
    this.livros.forEach(livro => console.log(livro))
  }
}

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 'Fantasia')
const livro2 = new Livro('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 1997, 'Fantasia')

const biblioteca = new Biblioteca()
biblioteca.adicionarLivro(livro1)
biblioteca.adicionarLivro(livro2)

biblioteca.listarLivros()
