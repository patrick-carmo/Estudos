class Funcionario {
  nome: string
  idade: number
  cargo: string

  constructor(nome: string, idade: number, cargo: string) {
    this.nome = nome
    this.idade = idade
    this.cargo = cargo
  }
}

class Empresa {
  funcionarios: Funcionario[] = []

  adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario)
  }

  listarFuncionarios(): void {
    this.funcionarios.forEach(funcionario => {
      console.log(funcionario)
    })
  }
}

const funcionario1 = new Funcionario('Patrick', 27, 'Desenvolvedor')

const empresa = new Empresa()
empresa.adicionarFuncionario(funcionario1)
empresa.listarFuncionarios()
