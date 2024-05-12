function mostrar(grado) {
    // Ocultar todos los elementos con la clase 'grados-info'
    var grados = document.getElementsByClassName('grados-info');
    for (var i = 0; i < grados.length; i++) {
        grados[i].style.display = 'none';
    }

    // Mostrar el elemento correspondiente al grado seleccionado
    document.getElementById(grado).style.display = 'block';
}
