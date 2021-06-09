$(document).ready(function () {
    $("#registrarse").validate({
        rules: {
            nombre: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            edad: {
                required: true,
                number: true,
                min: 1,
                max: 99
            },
            txtContrasena: {
                required: true,
                minlength: 5
            },
            txtRepetirContrasena: {
                required: true,
                equalTo: "#txtContrasena"
            },

        },
        messages: {
            nombre: {
                required: "ESCRIBA SU NOMBRE"
            },
            email: {
                required: "ESCRIBA SU CORREO ELECTRONICO",
                email: "Formato no valido, pruebe con poner una -@-"
            },
            edad: {
                required: "ESCRIBA SU EDAD",
                number: "Escriba su edad en numero",
                min: "No se aceptan 0 años e inferior",
                max: "No se aceptan 100 años y superior"
            },
            txtContrasena: {
                required: "INGRESE CONTRASEÑA",
                minlength: "Minimo 5 caracteres"
            },
            txtRepetirContrasena: {
                required: "REPITA CONTRASEÑA",
                equalTo: "Contraseñas no coinciden"
            }
        }
    });
});
$(function () {
    $("#enviar").click(function (event) {
        event.preventDefault();

        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var edad = $("#edad").val();
        var contrasena = $("#txtContraseña").val();
        var repetir_contrasena = $("#txtRepetirContrasena").val();

        if (nombre != "" && email != "" && edad != "" && contrasena != "" && repetir_contrasena != "") {
            alert("Bienvenido " + nombre + ", Se ha registrado correctamente")
        }
    });
});


