function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como True.
    // Retornar el arreglo.
    // Tu código:
    objetoMuchosUsuarios.forEach(usuario => {
        usuario.esPremium = true
        }
    )
    return objetoMuchosUsuarios
 }

arr = [
    {
        esPremium:false
    },
    {
        esPremium:false
    },
    {
        esPremium:false
    },
    {
        esPremium:false
    }
]

console.log(pasarUsuarioAPremium(arr))

function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
    // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
    // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
    // Luego debes restar del precio total del producto ese valor de descuento.
    // Retornar el precio final.
    // Ejemplo:
    // Precio ---> 10
    // PorcentajeDeDescuento ---> 0.2
    // Precio final ---> 8
    // Tu código:
    objetoProducto.calcularPrecioDescuento = function (){
       nuevo_precio = this.precio * (1 - this.porcentajeDeDescuento)
       return nuevo_precio
    }
    precio_final = objetoProducto.calcularPrecioDescuento(objetoProducto)
   
    return precio_final
 }
 
 arrey = {precio: 10, porcentajeDeDescuento:0.2}
 console.log(agregarMetodoCalculoDescuento(arrey))
 console.log(arrey)