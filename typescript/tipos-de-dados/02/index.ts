type lista = {
  nome: string
  idade: number
  status: boolean
}[]

const usuarios: lista = [
  {
    nome: 'Guido',
    idade: 32,
    status: true,
  },
  {
    nome: 'Dani',
    idade: 30,
    status: true,
  },
  {
    nome: 'João',
    idade: 40,
    status: false,
  },
  {
    nome: 'Guilherme',
    idade: 29,
    status: true,
  },
  {
    nome: 'Ana',
    idade: 18,
    status: false,
  },
  {
    nome: 'José',
    idade: 28,
    status: false,
  },
]

function filtrarUsuario(nome: string) {
  const lista: lista = usuarios.filter(elemento =>
    elemento.nome.toLowerCase().startsWith(nome.toLowerCase())
  )

  return lista
}

const nome: string = 'João'

console.log(filtrarUsuario(nome))

export = {}