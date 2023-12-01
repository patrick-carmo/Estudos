const mensagemDeErro = {
  nome: 'O nome deve começar com uma letra maiúscula e deve conter no mínimo 10 caracteres',
  nomeMaterno: 'O nome deve começar com uma letra maiúscula e deve conter no mínimo 10 caracteres',
  endereco: `O endereço deve começar com  "Rua", "Avenida", "Travessa", ou "Av" e deve conter no mínimo 10 caracteres`,
  login: 'Somente letras e números, deve conter ao menos 1 letra e todas devem ser maiúsculas',
  cpf: 'O CPF deve conter 11 números',
  celular: 'O celular deve conter 11 números começando por 9 depois do DDD',
  fixo: 'O telefone fixo deve conter 10 números começando por 2, 3, 4 ou 5 depois do DDD',
  endereco: 'O endereço deve começar com  "Rua", "Avenida", "Travessa", ou "Av" e deve conter no mínimo 10 caracteres',
  senha: 'A senha deve conter exatas 7 letras e/ou números',
  confirmarSenha: 'A senha deve conter exatas 7 letras e/ou números', 
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
