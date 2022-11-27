alert("Bienvenido Usuario.")
//variabels pregunta inicial
let respuesta = ""

//pregunta inicial para jugar
do {
    respuestaIngresada = String(prompt("¿Quiere usted jugar un juego? Si o No")).toUpperCase()
    respuesta = respuestaIngresada
} while (respuesta != "SI" && respuesta != "NO")

// variables del juego
let turno = 0
let answer = 0
let bala = 1 + Math.floor(Math.random() * 6)
let numero1 = 0
let numero2 = 0
let terminar = 0

//usuario quiso jugar al juego
if (respuesta == "SI") {
    alert("Estupendo, jugaremos a la ruleta rusa")
    alert("La bala ya ha sido colocada")
    //do while hasta que alguien pierda
    do {
        //sistema de turnos que mira si answer tiene coma o no para decidir de quien es el turno
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
            //usuario tiene la opcion de dispararse a si mismo o la maquina
            if (numero1 != bala) {
                let disparo = ""
                do {
                    disparoIngresado = String(prompt("¿A quien disparas? Usuario/Maquina")).toUpperCase()
                    disparo = disparoIngresado
                } while (disparo != "USUARIO" && disparo != "MAQUINA")

                if (disparo == "USUARIO") {
                    alert("Click")
                    alert("Parece que has tenido suerte")
                } else {
                    alert("Click")
                    alert("Parece que no habia una bala")
                }
            }
            if (numero1 === bala) {
                do {
                    disparoIngresado = String(prompt("¿A quien disparas? Usuario/Maquina")).toUpperCase()
                    disparo = disparoIngresado
                } while (disparo !== "USUARIO" && disparo !== "MAQUINA")

                if (disparo == "USUARIO") {
                    alert("BLAAM")
                    alert("Parece que si habia una bala. Otro usuario te reemplazara")
                    terminar = 1
                } else if (disparo == "MAQUINA") {
                    alert("BLAAM")
                    alert("Enhorabuena, me has ganado, pero yo no desaparezco")
                    terminar = 1
                }
            }
            //turno de la maquina
        } else {
            alert("es mi turno")
            numero2 = 1 + Math.floor(Math.random() * 6)
            //maquina no decide si disparse a si misma o al usuario
            if (numero2 != bala) {
                alert("Click")
                alert("parece que he tenido suerte")
            } else if (numero2 === bala) {
                alert("BLAAM")
                alert("Enhorabuena, me has ganado, pero yo no desaparezco")
                terminar = 1
            }
        }
    } while (terminar !== 1)
    //usuario no quizo jugar
} else {
    alert("Es una pena")
}