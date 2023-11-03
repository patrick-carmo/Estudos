// itens do PDF: 5-7.
const nome = prompt('Seja bem-vindo(a)! Qual é o seu nome?')

// 8.
window.document.write(`<p>Olá ${nome}</p>`)

// 9-10.
// const textoTitulo = document.getElementById('titulo')
const textoTitulo = document.getElementsByTagName('h1')[0]

const exibirNome = nome && nome.trim() !== '' ? nome : 'visitante'

const novoTexto = `Olá ${exibirNome}! ${textoTitulo.textContent.split(' ').slice(1).join(' ')}`

textoTitulo.textContent = novoTexto

// 11.
// const alterarCorDeFundo = () => {
//   const body = document.querySelector('body')

//   if (body.style.backgroundColor === 'rgb(242, 228, 255)') {
//     body.style.backgroundColor = 'white'
//     return
//   }
//   body.style.backgroundColor = '#f2e4ff'
// }

// 12.

const alterarCor = () => {
  const body = document.querySelector('body')

  if (body.style.backgroundColor === 'rgb(242, 228, 255)') {
    body.style.backgroundColor = ''
    return
  }
  body.style.backgroundColor = '#f2e4ff'
}

const botaoFundo = document.getElementById('botao_fundo')
botaoFundo.addEventListener('click', alterarCor)

// 13.
const alteraCorClasse = () => {
  // const section = document.querySelectorAll('section')
  const section = document.querySelectorAll('.par')

  const corSection = (cor) => {
    // for (let i = 0; i < section.length; i += 2) {
    //   section[i].style.backgroundColor = cor
    // }
    section.forEach((atual) => (atual.style.backgroundColor = cor))
  }

  if (section[0].style.backgroundColor === 'rgb(242, 228, 255)') {
    corSection('')
    return
  }

  corSection('#f2e4ff')
}

// 14-15.
const somar = document.getElementById('somar')
const subtrair = document.getElementById('subtrair')
const multiplicar = document.getElementById('multiplicar')
const dividir = document.getElementById('dividir')

// Função compartilhada com o item 16
const operacao = (numeros, tipoOperacao, formulario) => {
  const numero1 = Number(document.getElementById(numeros[0]).value)
  const numero2 = Number(document.getElementById(numeros[1]).value)

  const divResultado = document.getElementById('resultado')

  if (!numero2 && tipoOperacao === '/') {
    formulario
      ? alert('Não é possível dividir por 0!')
      : (divResultado.innerHTML = '<p>Não é possível dividir por 0!</p>')
    return
  }

  const resultadoDaOperacao = eval(`${numero1} ${tipoOperacao} ${numero2}`)

  if (!formulario) {
    const divResultado = document.getElementById('resultado')
    divResultado.innerHTML = `<p>Resultado: ${resultadoDaOperacao}</p>`
    return
  }

  alert(`Resultado: ${resultadoDaOperacao}`)
}

somar.addEventListener('click', () => operacao(['numero1', 'numero2'], '+'))
subtrair.addEventListener('click', () => operacao(['numero1', 'numero2'], '-'))
multiplicar.addEventListener('click', () => operacao(['numero1', 'numero2'], '*'))
dividir.addEventListener('click', () => operacao(['numero1', 'numero2'], '/'))

// 16.

// Não sei se poderia modificar o HTML, então fiz sem a modificação.

const sectionForm = document.getElementById('oper2')
const form = sectionForm.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const radio = Array.from(document.getElementsByName('operacao'))
  const radioChecked = radio.filter((atual) => atual.checked)

  if (!radioChecked.length) {
    alert('Selecione uma operação!')
    return
  }

  const tipoOperacao = {
    soma: '+',
    subtracao: '-',
    multiplicacao: '*',
    divisao: '/',
  }
  const operacaoSelecionada = tipoOperacao[radioChecked[0].value]

  operacao(['n1', 'n2'], operacaoSelecionada, true)
})

// 17.

const repetirMusica = () => {
  const quantidade = Number(document.getElementById('quantidade').value)
  const resultadoRepeticao = document.getElementById('resultado_repeticao')

  resultadoRepeticao.innerHTML = ''

  if (!quantidade) {
    resultadoRepeticao.innerHTML = '<p>Digite um número!</p>'
    return
  }

  for(let i=0; i<quantidade; i++) {
    resultadoRepeticao.innerHTML += '<p>Um elefante incomoda muita gente</p>'
  }

}

const botaoRepetir = document.getElementById('repetir')
botaoRepetir.addEventListener('click', repetirMusica)
