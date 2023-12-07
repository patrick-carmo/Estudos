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
    fs.readFileSync('./typescript/tipos-de-dados-2/02/bd.json', 'utf-8')
  )
}
const escreverArquivo = (dados: any): void => {
  fs.writeFileSync(
    './typescript/tipos-de-dados-2/02/bd.json',
    JSON.stringify(dados)
  )
}

const cadastrarUsario = (dados: Usuario): Usuario => {
  const bd = lerArquivo() as Usuario[]
  bd.push(dados)
  escreverArquivo(bd)
  return dados
}

const patrick = cadastrarUsario(dadosUsuario)
const db = lerArquivo()
console.log(patrick, db)