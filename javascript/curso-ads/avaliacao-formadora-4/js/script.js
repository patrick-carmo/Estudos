import { mensagemDeErro, mensagem, isValid } from "../js/mensagemDeErro.js"
import regex from "../js/regex.js"
import mostrarSenha from "./mostrarSenha.js"

const botao = document.getElementById('enviar')
const camposFormulario = document.querySelectorAll('.form-control')

const erro = document.getElementById('mensagemDeErro')

const senha = document.getElementById('senha')
const senha2 = document.getElementById('confirmarSenha')
const erroSenha = document.querySelectorAll('.erroSenha')

camposFormulario.forEach((campo) => {
  campo.addEventListener('input', function () {
    this.setCustomValidity('')

    if (!this.value.match(regex[this.id]) || !this.checkValidity()) {
      this.setCustomValidity(mensagemDeErro[this.id])
      isValid(this, false)
      this.reportValidity()
      return
    }

    if (senha.value !== senha2.value) {
      isValid(senha, false)
      isValid(senha2, false)

      erroSenha.forEach((erro) => (erro.style.display = 'block'))
    } else {
      erroSenha.forEach((erro) => (erro.style.display = 'none'))
    }

    this.setCustomValidity('')
    isValid(this, true)
  })
})

botao.addEventListener('click', function (e) {
  const camposInvalidos = []

  camposFormulario.forEach((campo) => {
    campo.setCustomValidity('')

    if (!campo.value.match(regex[campo.id]) || !campo.checkValidity()) {
      campo.setCustomValidity(mensagemDeErro[campo.id])
      camposInvalidos.push(mensagem(campo.id))

      isValid(campo, false)
    } else {
      isValid(campo, true)
    }

    if (camposInvalidos.length > 0) {
      erro.innerText = `Inválidos: ${camposInvalidos.join(', ').trim()}!`
      erro.style.display = 'block'
    }
  })
})

const limparFormulario = () => {
  const camposFormulario = document.querySelectorAll('.form-control')
  const erro = document.getElementById('mensagemDeErro')

  for (const campo of camposFormulario) {
    isValid(campo, 'remover')
    campo.value = ''
  }
  erroSenha.forEach((erro) => (erro.style.display = 'none'))
  erro.style.display = 'none'
}

window.limparFormulario = limparFormulario
window.mostrarSenha = mostrarSenha