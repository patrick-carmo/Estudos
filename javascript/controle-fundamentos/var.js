{{{{var sera = "teste..."}}}}
console.log(sera)

/*function teste(){
    var local = 123
}
teste()
console.log(local)
*/
var numero = 1
{
    var numero = 2
    console.log("Dentro = ", numero)
}
console.log("Fora =", numero)
