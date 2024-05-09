function calcularEdad(fechaNacimiento) {
    var fechaNac = new Date(fechaNacimiento);
    var fechaActual = new Date();
    
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    var mes = fechaActual.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}

const form = document.querySelector('.formulario');
const fechaNacimientoInput = document.getElementById('birthdate');

form.addEventListener('submit', (event) => {
    const fechaNacimiento = fechaNacimientoInput.value;
    const edad = calcularEdad(fechaNacimiento);

    if (isNaN(edad) || edad < 18) {
        event.preventDefault(); // Prevenir el envío del formulario
        alert('Debes tener al menos 18 años para enviar este formulario.');
    }
});
