// Realizado por Jesus Manuel y ramses norberto

var puntos = localStorage.getItem('Puntos');



if (puntos < 0) {
  document.getElementById('Puntos').style.color = 'red';
  document.getElementById('Puntos').innerHTML = 'Puntaje:' + puntos;
} else {
  document.getElementById('Puntos').style.color = 'green';
  document.getElementById('Puntos').innerHTML = 'Puntaje:' + puntos;
}
