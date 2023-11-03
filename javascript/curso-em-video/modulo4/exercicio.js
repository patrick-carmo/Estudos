function imprimeNumerosPares(x){
    if(x<=1){
        console.log("Valor inválido")
    }else{
        for(i=0; i<=x; i++){
            if(i%2==0){
                console.log(`${i}`)
            }
        }
    }
}

imprimeNumerosPares(10)