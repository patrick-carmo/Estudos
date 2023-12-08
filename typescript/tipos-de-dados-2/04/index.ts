import fs from 'fs'

type Endereco = {
  cep: string
  rua: string
  complemento?: string
  bairro: string
  cidade: string
}

type Usuario = {
  nome: string
  email: string
  cpf: string
  profissao?: string
  endereco: Endereco | null
}

const dadosUsuario = {
  nome: 'Patrick',
  email: 'ptemy5@gmail.com',
  cpf: '123.456.789-10',
  profissao: 'Desenvolvedor Back-End',
  endereco: {
    cep: '12345-678',
    rua: 'Rua dos Devs',
    complemento: 'Casa 199',
    bairro: 'Centro',
    cidade: 'Rio de Janeiro',
  },
}

const lerArquivo = (): unknown => {
  return JSON.parse(
    fs.readFileSync('./typescript/tipos-de-dados-2/bd.json', 'utf-8')
  )
}
const escreverArquivo = (dados: any): void => {
  fs.writeFileSync(
    './typescript/tipos-de-dados-2/bd.json',
    JSON.stringify(dados)
  )
}

const cadastrarUsario = (dados: Usuario): Usuario => {
  const bd = lerArquivo() as Usuario[]
  bd.push(dados)
  escreverArquivo(bd)
  return dados
}

const listarUsuarios = (): Usuario[] => {
  return lerArquivo() as Usuario[]
}

const detalharUsuario = (cpf: string): Usuario => {
  const db = lerArquivo() as Usuario[]

  const usuario = db.find(usuario => {
    return usuario.cpf === cpf
  })

  if (!usuario) {
    throw new Error('Usuário não encontrado')
  }

  return usuario
}

const atualizarUsuario = (cpf: string, dados: Usuario):Usuario => {
  const bd = lerArquivo() as Usuario[]

  const usuario = bd.find(usuario => {
    return (usuario.cpf = cpf)
  })

  if (!usuario) {
    throw new Error('Usuário não encontrado')
  }

  Object.assign(usuario, dados)

  escreverArquivo(bd)

  return usuario
}

const excluirUsuario = (cpf: string):Usuario => {
  const bd = lerArquivo() as Usuario[]

  const usuario = bd.find(usuario => {
    return (usuario.cpf = cpf)
  })

  if (!usuario) {
    throw new Error('Usuário não encontrado')
  }

  const exclusao = bd.filter(usuario =>{
    return usuario.cpf !== cpf
  })

  Object.assign(usuario, exclusao)

  escreverArquivo(bd)

  return usuario
}

// const patrick = cadastrarUsario(dadosUsuario)
// const db = lerArquivo()
// console.log(patrick, db)
// console.log(detalharUsuario('123.456.789-10'))

// dadosUsuario.nome = 'Teste'
// dadosUsuario.email = 'teste@gmail.com'
// const usuarioAtualizado = atualizarUsuario('123.456.789-10', dadosUsuario)
// console.log(usuarioAtualizado)

console.log(excluirUsuario('123.456.789-10'))

export = {}
