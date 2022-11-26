alert("Bienvenido Usuario.")
let respuesta = ""
let intentosPermitidos = 3

do {
    respuestaIngresada = String(prompt("¿Quiere usted jugar un juego? Si o No")).toUpperCase()
    respuesta = respuestaIngresada
} while (respuesta != "SI" && respuesta != "NO")


turno = 0
let answer = 0
let bala = 1 + Math.floor(Math.random() * 6)
let pierdeMaquina = 0
let pierdeUsuario = 0
if (respuesta == "SI") {
    alert("Estupendo, jugaremos a la ruleta rusa")
    alert("La bala ya ha sido colocada")
    /* Sistema de turnos con For. Sin usar ya que creo que necesito IA para que sea funcional con un juego
    for (let turno = 1; turno < 9; turno++) {
        coma=false
        answer=turno/2
        console.log(answer)
        if (parseInt(answer)!=answer) {
            coma=true
        }
        console.log(coma)
        
        if (coma===true){
            alert("es tu turno")
            
        } else {
            alert("es mi turno")
            
        }   
    }*/
    do {
        turno++
        coma = false
        answer = turno / 2
        console.log(answer)

        if (parseInt(answer) != answer) {
            coma = true
        }
        console.log(coma)

        if (coma === true) {
            alert("es tu turno")
            numero1 = 1 + Math.floor(Math.random() * 6)
            pierdeUsuario = numero1
            if (pierdeUsuario != bala) {
                alert("click")
                alert("parece que has tenido suerte")
            }

        } else {
            alert("es mi turno")
            numero2 = 1 + Math.floor(Math.random() * 6)
            pierdeMaquina = numero2
            if (pierdeMaquina != bala) {
                alert("click")
                alert("parece que he tenido suerte")
            }
        }
    } while (pierdeMaquina !== bala && pierdeUsuario !== bala)
} else {
    alert("Es una pena")
}


if (pierdeMaquina === bala) {
    alert("blaam")
    alert("Enhorabuena, me has ganado")
} else if (pierdeUsuario === bala) {
    alert("blaam")
    alert("Has perdido, otro usuario tomara tu lugar")
}
