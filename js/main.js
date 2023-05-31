//declaramos la variable
let comprar = document.querySelectorAll(".button")[0];

//funcion del footer para el año del proyecto
const año = document.getElementById('año-actual');
año.innerHTML = new Date().getFullYear();


// BOTON DE COMPRA PARA EL SWEET
const botonCompra = document.getElementById('botonCompra');
// Agrega un event listener para el evento 'click' al botón
botonCompra.addEventListener('click', function() {
   
  // Por ejemplo, puedes mostrar un mensaje de confirmación
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Gracias por tu compra!',
    showConfirmButton: false,
    timer: 1500
  })

});

//Boton comprar en la tienda que te redirige al formulario de compra
botonCompra.addEventListener('click', function() {
   
  // Por ejemplo, puedes mostrar un mensaje de confirmación
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Gracias por tu compra!',
    showConfirmButton: false,
    timer: 1500
  })

});
document.getElementById('botonCompra').addEventListener("click", function comprar() {
    window.location.href = "formulariodeCompra.html";
  });
  
  //
  function enviar(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Has completado tus datos!',
    showConfirmButton: false,
    timer: 1500
  })}


  
  // Obtén una referencia al botón de envío
const miBoton = document.getElementById('#botonCompra');

// Agrega un event listener al botón de envío
miBoton.addEventListener('click', function(event) {
  // Evita que el formulario se envíe de forma predeterminada
  event.preventDefault();

  // Muestra el Sweet Alert
  Swal.fire({
    title: '¡Éxito!',
    text: 'El formulario se ha enviado correctamente.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    // Aquí puedes realizar alguna acción adicional después de cerrar el Sweet Alert
    if (result.isConfirmed) {
      // Por ejemplo, puedes enviar el formulario manualmente
      document.getElementById('../formulariodeCompra.html').submit();
    }
  });
});

//BOTON EN EL FORMULARIO DE REGISTRO QUE ME ENVIE A LA PAGINA PRINCIPAL
document.getElementById('#botonCompra').addEventListener("click", function comprar() {
  window.location.href = "../index.html";
});