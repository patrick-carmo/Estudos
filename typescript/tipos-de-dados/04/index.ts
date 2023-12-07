type etiqueta = {
  produto: string
  lote: number
  ano: number
  qtd: number
}

function imprimirEtiqueta(produto: etiqueta): string[] {
  const resultado: string[] = []

  for (let i = 1; i <= produto.qtd; i++) {
    let numeroFormatado = i.toString().padStart(3, '0')
    resultado.push(`${produto.lote}-${produto.ano}-${numeroFormatado}`)
  }

  return resultado
}

console.log(
  imprimirEtiqueta({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5,
  })
)
