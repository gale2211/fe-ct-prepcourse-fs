//function mayuscula(nombre) {
//    // Esta función recibe un nombre (string).
//    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
//    // [Ejemplo]: "mario" ----> "Mario".
//    // Tu código:
//    var palabra = nombre.split('')
//    var nueva_palabra = []
//    for (i = 0; i<palabra.length; i++){
//       if(i==0){
//          nueva_palabra.push(palabra[i].toUpperCase())
//       }
//       else {
//          nueva_palabra.push(palabra[i])
//       }
//    }
//    nombre_mayusc = nueva_palabra.join('')
//    return nombre_mayusc
// 
// 
// }
//
//console.log(mayuscula('juan'))

 function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    var new_array = []
    function chequeo_palabra (palabra){
       var array_palabra = palabra.split('')
       if(array_palabra[0]=='a'){
          return true
       }
       else {
          return false
       }
    }
 
    for(i=0; i < arrayOfStrings.length;i++){
       condicion = chequeo_palabra(arrayOfStrings[i])
       if(condicion){
          new_array.push(arrayOfStrings[i])
       }
       else{
          continue
       }
    }
    return new_array
 }

 console.log(filter(['avocado','carne','milanesa','arcoiris']))