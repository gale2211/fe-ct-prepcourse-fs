String.prototype.reverse = function (){
   var arreglo_invertido = []
   var arreglo_separado = this.split('')
   var j = arreglo_separado.length-1
   for(i = j; i >= 0; i--){
      arreglo_invertido.push(arreglo_separado[i])
   }
   string_invertido = arreglo_invertido.join('')
   return string_invertido
}

var nombre = 'juan'

console.log(nombre.reverse())