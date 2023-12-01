const mensagemDeErro = {
  nome: 'Preencha o nome corretamente',
  nomeMaterno: 'Preencha o nome materno corretamente',
  endereco: `O endereço deve começar com  "Rua", "Avenida", "Travessa", ou "Av" e deve conter no mínimo 10 caracteres`,
  login: 'Somente letras e números',
  cpf: 'O CPF deve conter 11 números',
  celular: 'O celular deve conter 11 números começando por 9',
  fixo: 'O telefone fixo deve conter 10 números começando por 2, 3, 4 ou 5',
  endereco: 'O endereço deve começar com  "Rua", "Avenida", "Travessa", ou "Av" e deve conter no mínimo 10 caracteres',
  senha: 'A senha deve conter exatas 8 letras e/ou números',
  confirmarSenha: 'A senha deve conter exatas 8 letras e/ou números', 
}

const mensagem = (campo) => {
  if (campo === 'confirmarSenha') {
    return 'Confirmar senha'
  }
  if (campo === 'endereco') {
    return 'Endereço'
  }
  return campo.charAt(0).toUpperCase() + campo.slice(1)
}

const isValid = (campo, condicional) => {
  if (condicional === 'remover') {
    campo.classList.remove('is-invalid')
    campo.classList.remove('is-valid')
    return
  }

  if (condicional) {
    campo.classList.remove('is-invalid')
    campo.classList.add('is-valid')
    return
  }

  campo.classList.remove('is-valid')
  campo.classList.add('is-invalid')
}

export  { mensagemDeErro, mensagem, isValid }
