// Realizado por Jesus Manuel

var puntos = localStorage.getItem('Puntos')
function mostrarMensaje(texto) {
  if (texto === 'Texto 1') {
    Swal.fire({
      title: 'has recolectado 10 Monedas',
      customClass: {
        popup: 'pupup-correcto',
        title: 'titulo-correcto',
        content: 'contenido-correcto',
        confirmButton: 'confirmar-correcto',
      }
    }).then(function () {
      window.location.href = '2Pregunta3Quimica.html';
      sumarPuntos(10);
    });
  } else {
    Swal.fire({
      title: 'has perdido 10 Monedas',

      customClass: {
        popup: 'pupup-incorrecto',
        title: 'titulo-incorrecto',
        content: 'contenido-incorrecto',
        confirmButton: 'confirmar-incorrecto',
      },
    }).then(function () {
      // Llamar a la función restarPuntos(10) para restar 10 puntos
      window.location.href = '2Pregunta3Quimica.html';
      restarPuntos(10);

    });
  }
}
