

 function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    var mayores = array.map((num) => {
            if (num > 18){
                return num
            }
        }
    )
    return mayores.length
 }

 console.log(cuentoElementos([1,2,3,4,19,20,21]));

 function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar True si el entero inicia con 9 y False en otro caso.
    // Tu código:
    num_str = num.toString()
    a = num_str.split('')
    if (a[0]==9){
        return true
    }
    else {
        return false
    }
 }

 console.log(empiezaConNueve(8))

 function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar True.
    // Caso contrario retornar False.
    // Tu código:
    for (let i = 0; i < array.length-1; i++){
       var j = i + 1
       var elements_condition
       if(array[i]==array[j]){
          elements_condition = true
       }
       else {
          elements_condition = false
          break
       }
    }
    return elements_condition
 }

console.log(todosIguales([1,2,3,4,19,20,21]));
console.log(todosIguales([1,1,1,1,1]));

function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    var new_array =[]
    var j = 0
    var accum = num
    var falla = ''
    for (let i = 0; i < 10; i++){ 
          accum = accum + 2
          if(accum == j){
             falla = 'Se interrumpió la ejecución'
             break
          }
          else{
             new_array[j] = accum
             j++
          }
    }
    return new_array
 }
 console.log(breakStatement(8))


function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    var new_array =[]
    var accum = num
    var iteraciones = 0
    while (iteraciones < 10){ 
        iteraciones++
        if (iteraciones == 5){
            new_array[iteraciones-1] = accum
            continue
        }
        accum = accum + 2
        new_array[iteraciones-1] = accum
        
    }

}
console.log(continueStatement(8))