// Realizado por ramses norberto

function comparacion() {
    var cap;

    cap = parseInt(document.getElementById("lista").value);

    if (cap == 1) {
        document.getElementById("Misiones").innerHTML = "<a href='Pregunta1Quimica.html'><input type='button' class='M1' value='Historia 1:'> <br><br><br> <img src='QUIMICA1.png' height='130' width='200' class='img1'></a><p class='parra1'>Osash se encuentra en su laboratorio por la mañana y no sabe que hacer hasta que una serie de ideas se le vienen a la cabeza.</p><br><br><p class='parra'>Proximamente mas capitulos..</p>";
    } else if (cap == 2) {
        document.getElementById("Misiones").innerHTML = "<a href='2Pregunta1Quimica.html'><input type='button' class='M1' value='Historia 1:'> <br><br><br> <img src='QUIMICA2.png' height='130' width='200' class='img1'></a><p class='parra1'>Durante la mañana Osash elaboro una presentacion, pero despues de esto, regreso a su la boratorio con muchas tareas.</p><br><br><p class='parra'>Proximamente mas capitulos..</p>";
    }
}