function mayoriaDeEdad(edad) {

    if (edad < 18){
        return 'Not allowed'
    }
    else {
       return 'Allowed'
    }
 }

console.log(mayoriaDeEdad (25));

function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    i = 0
    do {
       num = num + 5
       i++
    }
    while (i < 8)
    return num
 }

 console.log(doWhile(5));