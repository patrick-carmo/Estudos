function contar() {
    const inicio = window.document.querySelector('input#inicio');
    const fim = window.document.querySelector('input#fim');
    const passo = window.document.querySelector('input#passo');
    const resultado = window.document.querySelector('#resultado');
  
    resultado.innerHTML = "";
  
    if (Number(inicio.value) <= Number(fim.value)) {
      for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
        resultado.innerHTML += `${i}<br> `;
      }
    } else {
      for (let i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)) {
        resultado.innerHTML += `${i}<br> `;
      }
    }
  }
  