const input = document.querySelector('input')
const p = document.querySelector('p')

const total = localStorage.getItem('value')

if (input && total) {
  input.value = total
  calculate(+input.value)
}

function calculate(value: number) {
  if (p) {
    p.innerText = `Ganho total: ${value + 100 - value * 0.2}`
  }
}

function mudance() {
  if (input) {
    const value = +input.value
    localStorage.setItem('value', value.toString())
    calculate(value)
  }
}

if (input) {
  input.addEventListener('input', mudance)
}
