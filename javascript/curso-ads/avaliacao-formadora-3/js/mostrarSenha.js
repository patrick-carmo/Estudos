const mostrarSenha = () => {
  const btnMostrarSenha = document.querySelector('.mostrarSenha')
  const inputs = document.querySelectorAll('#senha, #confirmarSenha')

  inputs.forEach((input) => {
    input.type = input.type === 'password' ? 'text' : 'password'
  })

  const senhaEhVisivel = inputs[0].type === 'text'
  
  if (senhaEhVisivel) {
    btnMostrarSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    return
  }

  btnMostrarSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
}
