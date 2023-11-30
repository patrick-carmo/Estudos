const mensagemDeErro = {
  nome: 'Preencha o nome corretamente',
  endereco: 'Somente letras e números',
  login: 'Somente letras e números',
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
