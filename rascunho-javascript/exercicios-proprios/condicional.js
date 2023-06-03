function solucao(altitude) {

    if (altitude < 21) {
      console.log('Troposfera')
    } else if (altitude < 51) {
      console.log('Estratosfera')
    } else if (altitude < 81) {
      console.log('Mesosfera')
    } else if (altitude < 451) {
      console.log('Termosfera')
    } else {
      console.log('Exosfera')
    }
  }

let altitude = Number(90)
solucao(altitude)
