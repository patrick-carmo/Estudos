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

const botaoSubmit = document.getElementById('enviar')

botaoSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  const regex = regexValidacao()

  const erro = document.getElementById('mensagemDeErro')

  const camposFormulario = document.querySelectorAll('.form-control')
  const camposInvalidos = []

  for (const campo of camposFormulario) {
    if (!campo.value.match(regex[campo.id])) {
      isValid(campo, false)

      const mensagem = (campo) => {
        
        if (campo === 'confirmarSenha') {
          return 'Confirmar senha'
        }

        if (campo === 'endereco') {
          return 'Endereço'
        }

        return campo.charAt(0).toUpperCase() + campo.slice(1)
      }

      camposInvalidos.push(mensagem(campo.id))

      continue
    }

    isValid(campo, true)
  }

  const senha = document.getElementById('senha')
  const senha2 = document.getElementById('confirmarSenha')
  const erroSenha = document.querySelectorAll('.erroSenha')

  if (senha.value !== senha2.value) {
    isValid(senha, false)
    isValid(senha2, false)

    erroSenha.forEach((erro) => (erro.style.display = 'block'))
    camposInvalidos.push('Senhas não idênticas')
  } else {
    erroSenha.forEach((erro) => (erro.style.display = 'none'))
  }

  if (camposInvalidos.length > 0) {
    erro.innerText = `Inválidos: ${camposInvalidos.join(', ').trim()}!`
    erro.style.display = 'block'

    return
  }

  erro.style.display = 'none'

  const formulario = document.getElementById('formulario')
  formulario.submit()
})

const limparFormulario = () => {
  const camposFormulario = document.querySelectorAll('.form-control')
  const erro = document.getElementById('mensagemDeErro')

  for (const campo of camposFormulario) {
    isValid(campo, 'remover')
    campo.value = ''
  }
  const erroSenha = document.querySelectorAll('.erroSenha')

  erroSenha.forEach((erro) => (erro.style.display = 'none'))
  erro.style.display = 'none'
}
