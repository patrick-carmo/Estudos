data = new Date()

hora = data.getHours()

switch (hora){
    case 1:
        {
            console.log("1 da manhã")
        }
        break
    case 21:
        {
            console.log(`São ${hora} horas`)
            if(hora > 20){
                console.log("hora de dormir")
            }
            else
                console.log("hora de estudar")
        }
        break
}