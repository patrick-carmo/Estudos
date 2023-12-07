function soletrar(palavra: string): string{
  return palavra.split('').join('-')
}

console.log(soletrar('Patrick'))