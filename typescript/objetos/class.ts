class Pessoa {
  nome: string
  idade: number
  email: string

  constructor(nome: string, idade: number, email: string) {
    this.nome = nome
    this.idade = idade
    this.email = email
  }

  exibirDados() {
    console.log(`Nome: ${this.nome} Idade: ${this.idade} Email: ${this.email}`)
  }
}

const pessoa = new Pessoa('Patrick', 27, 'ptemy5@gmail.com')

pessoa.exibirDados()