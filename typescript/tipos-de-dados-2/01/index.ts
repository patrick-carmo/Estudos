import fs from 'fs/promises'

async function escrita(texto: string): Promise<unknown> {
  if (typeof texto === 'string') {
    return await fs.writeFile('./typescript/tipos-de-dados-2/01/bd.json', texto)
  }

  console.log('O texto precisa ser uma string')
}

async function leitura(): Promise<void> {
  const dados = JSON.parse(
    await fs.readFile('./typescript/tipos-de-dados-2/01/bd.json', 'utf-8')
  ) as unknown

  if (dados !== null && dados !== undefined && typeof dados === 'object') {
    return console.log(dados)
  }

  console.log('Nenhum objeto encontrado')
}

type Pessoa = {
  nome: string
  idade: number
  profissao: string
}

const pessoa: Pessoa = {
  nome: 'Patrick',
  idade: 27,
  profissao: 'Desenvolvedor Back-End',
}

escrita(JSON.stringify(pessoa))
leitura()
