//Le pido el name al usuario
let name = prompt("Ingrese el name");
// Declaro un booleano para preguntar varias veces la age cuando NO sea valida
let isok = true
// declaro la variable
let age
while (isok) {
    //le pido la age al usuario
    age = prompt("Ingrese la age")
    //Pregunto si la age es mayor o igual a 18
    if (age >= 18) {
        alert(`Hola  ${name}, eres mayor de age. ¡Prepárate para grandes oportunidades en el mundo de la programación!`)
        isok = false
    }
    //Pregunto si la age es menor a 18
    else if (age > 0 && Number.isInteger(age) < 18) {
        alert(`Hola ${name}, eres menor de age. ¡Sigue aprendiendo y disfrutando del código!`)
        isok = false
    }
    // si entra acá es porque digitó una age que NO es valida
    else {
        alert("Digite una age válida");

    }
}

