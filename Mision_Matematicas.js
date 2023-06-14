// Realizado por Ramses norberto

function comparacion() {
    var cap;

    cap = parseInt(document.getElementById("lista").value);

    if (cap == 1) {
        document.getElementById("Misiones").innerHTML = "<a href='Pregunta1Matematicas.html'><input type='button' class='M1' value='Historia 1:'> <br><br><br> <img src='MATEMATICAS1.png' height='130' width='200' class='img1'></a><p class='parra1'>Osash despues de ir a clases le gustaria aprender mas conceptos sobre las matematicas por lo que va a otro reino.</p><br><br><p class='parra'>Proximamente mas capitulos..</p>";
    } else if (cap == 2) {
        document.getElementById("Misiones").innerHTML = "<a href='2Pregunta1Matematica.html'><input type='button' class='M1' value='Historia 1:'> <br><br><br> <img src='MATEMATICAS2.png' height='130' width='200' class='img1'></a><p class='parra1'>Luego de que Osash terminara sus aprendizajes en el otro reino regresa al suyo para poder usarlos en tareas que su Rey necesita que haga. </p><br><br><p class='parra'>Proximamente mas capitulos..</p>";
    }
}