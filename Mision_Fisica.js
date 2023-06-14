// Ramses Norberto

function comparacion() {
    var cap;

    cap = parseInt(document.getElementById("lista").value);

    if (cap == 1) {
        document.getElementById("Misiones").innerHTML = "<a href='Pregunta1Fisica.html'><input type='button' class='M1' value='Historia 1:'> <br><br><br> <img src='FISICA1.png' height='130' width='200' class='img1'></a><p class='parra1'>Osash se percata de que hay varios aspectos que se presentan a la hora de hacer cualquier accion a su alrededor por lo que se dispone a conocerlos.</p><br><br><p class='parra'>Proximamente mas capitulos..</p>";
    } else if (cap == 2) {
        document.getElementById("Misiones").innerHTML = "<a href='2Pregunta1Fisica.html'><input type='button' class='M1' value='Historia 1:'> <br><br><br> <img src='FISICA2.png' height='130' width='200' class='img1'></a><p class='parra1'>Un Mago/Cientifico del futuro hace una visita la epoca de Osash.</p><br><br><p class='parra'>Proximamente mas capitulos..</p>";
    }
}