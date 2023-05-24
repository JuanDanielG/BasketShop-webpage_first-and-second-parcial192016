//declaramos la variable
let comprar = document.querySelectorAll(".button")[0];

//funcion del footer para el año del proyecto
const año = document.getElementById('año-actual');
año.innerHTML = new Date().getFullYear();


// Obtén una referencia al botón de compra utilizando el id
const botonCompra = document.getElementById('botonCompra');

// Agrega un event listener para el evento 'click' al botón
botonCompra.addEventListener('click', function() {
   
  // Por ejemplo, puedes mostrar un mensaje de confirmación
  alert('¡Gracias por tu compra!');
  // También puedes realizar otras acciones, como enviar datos al servidor, mostrar u ocultar elementos, etc.
});

//Boton comprar en la tienda que te redirige al formulario de compra
document.getElementById("btnComprar").addEventListener("click", function comprar() {
    window.location.href = "formulariodeCompra.html";
  });
  