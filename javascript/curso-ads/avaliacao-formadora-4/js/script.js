import { mensagemDeErro, mensagem, isValid } from '../js/mensagemDeErro.js'
import regex from '../js/regex.js'
import mostrarSenha from './mostrarSenha.js'
import {} from '../js/mascaras.js'

const botao = document.getElementById('enviar')
const camposFormulario = document.querySelectorAll('.form-control')

const erro = document.getElementById('mensagemDeErro')

const senha = document.getElementById('senha')
const senha2 = document.getElementById('confirmarSenha')
const erroSenha = document.querySelectorAll('.erroSenha')

function verificarSenha(campo) {
  if (campo.id === 'senha' || campo.id === 'confirmarSenha') {
    if (senha.value.length === 0 || senha2.value.length === 0) {
      isValid(senha, false)
      isValid(senha2, false)

      campo.setCustomValidity('Preencha a senha e confirme a mesma')
      campo.reportValidity()
      return
    }
    if (senha.value === senha2.value) {
      isValid(senha, true)
      isValid(senha2, true)
    }

    if (senha.value !== senha2.value) {
      isValid(senha, false)
      isValid(senha2, false)

      campo.setCustomValidity('Senhas não idênticas!')
      campo.reportValidity()
    }
  }
}

camposFormulario.forEach(campo => {
  campo.addEventListener('input', function () {
    this.setCustomValidity('')

    if (!this.value.match(regex[this.id]) || !this.checkValidity()) {
      this.setCustomValidity(mensagemDeErro[this.id])

      isValid(this, false)
      if (this.id === 'nascimento') {
        return
      }
      this.reportValidity()
      return
    }

    isValid(this, true)

    verificarSenha(this)
  })
})

botao.addEventListener('click', e => {
  const camposInvalidos = []

  camposFormulario.forEach(campo => {
    campo.setCustomValidity('')
    if (!campo.value.match(regex[campo.id]) || !campo.checkValidity()) {
      campo.setCustomValidity(mensagemDeErro[campo.id])
      camposInvalidos.push(mensagem(campo.id))

      isValid(campo, false)
    } else {
      isValid(campo, true)
    }

    verificarSenha(campo)
    
    if (camposInvalidos.length > 0) {
      erro.innerText = `Inválidos: ${camposInvalidos.join(', ').trim()}!`
      erro.style.opacity = '1'
      erro.style.maxHeight = '1000px'

      setTimeout(() => {
        erro.style.opacity = '0'
        erro.style.maxHeight = '0px'
      }, 5000)
      return
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
  erroSenha.forEach(erro => (erro.style.display = 'none'))
  erro.style.opacity = '0'
  erro.style.maxHeight = '0px'
}

window.limparFormulario = limparFormulario
window.mostrarSenha = mostrarSenha
