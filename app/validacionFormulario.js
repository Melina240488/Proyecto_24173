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


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let valid = true;

        // Validar nombre
        const firstname = document.getElementById("firstname").value.trim();
        if (firstname === "") {
            alert("El campo 'Nombre' es obligatorio.");
            valid = false;
        }

        // Validar apellido
        const lastname = document.getElementById("lastname").value.trim();
        if (lastname === "") {
            alert("El campo 'Apellido' es obligatorio.");
            valid = false;
        }

        // Validar fecha de nacimiento
        const birthdate = document.getElementById("birthdate").value;
        if (birthdate === "") {
            alert("El campo 'Fecha de nacimiento' es obligatorio.");
            valid = false;
        }

        // Validar grado de satisfacción
        const grado = document.getElementById("grado").value;
        if (grado === "") {
            alert("El campo 'Grado de satisfacción' es obligatorio.");
            valid = false;
        }

        // Evitar el envío del formulario si alguna validación falla
        if (!valid) {
            event.preventDefault();
        }
    });
});