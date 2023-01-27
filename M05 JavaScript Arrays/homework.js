/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   i = array.length - 1
   ulti_nombre = array [i]
   console.log(i)
   return ulti_nombre
   
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var array_mas_uno = array.map((num) => {
      return num + 1
      }
   )
   return array_mas_uno
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   frase = palabras.join(' ')
   return frase
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   contiene = array.includes(elemento)
   return contiene
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var p = arrayOfNums.reduce ((acum, new_value) => {
      return acum + new_value
      }
   )
   return p
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var resultados = resultadosTest.reduce ((acum, new_value) => {
      return acum + new_value
      }
   )
   var cantidad_resultados = resultadosTest.length
   return resultados/cantidad_resultados
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var max_val = arrayOfNums.reduce((a, b) => {
      return Math.max(a, b);
   }
  )
  return max_val
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length > 0){
      var accum = 1
      for (let i = 0; i < arguments.length; i++){
         accum = accum * arguments[i]
      }
      return accum 
   }
   else{
      return 0
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cant_mayores = 0
   for (let i = 0; i < array.length; i++){
      if (array[i] > 18) {
         cant_mayores++
      }
   }
   return cant_mayores 
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia == 1 || numeroDeDia == 7 ){
      return 'Es fin de semana'
   }
   else {
      return 'Es dia laboral'
   }
}

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

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var verification_array = []
   var j = 0
   for (let i = 0; i < array.length; i++){
      if(array[i]=='Enero'){
         verification_array[j] = array[i]
         j++
      }
      else if (array[i]=='Marzo'){
         verification_array[j] = array[i]
         j++
      }
      else if (array[i]=='Noviembre'){
         verification_array[j] = array[i]
         j++
      }
   }
   if (j==3){
      return verification_array
   }
   else {
      return "No se encontraron los meses pedidos"
   }
}
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var i = 0
   var tabla_int = []
   var tabla_del_6 = []
   while (i <= 10){
      tabla_int[i] = i
      i++
   }
   tabla_del_6 = tabla_int.map((num) => {
         return num * 6
      }
   )
   return tabla_del_6
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var new_array = []
   var j = 0
   for (let i = 0; i < array.length; i++){
      if (array[i]>100){
         new_array[j] = array[i]
         j++
      }
   }
   return new_array
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

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
   if (falla == ''){
      return new_array
   }
   else {
      return falla
   }
}

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
   var j = 0
   while (iteraciones < 10){ 
       iteraciones++
       if (iteraciones == 5){
           continue
       }
       accum = accum + 2
       new_array[j] = accum
       j++
       
   }
   return new_array
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
