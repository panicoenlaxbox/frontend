var $ = require('jquery');

var Persona = function (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    var self = this;

    return {
        saludar: function () {
            $('h2').html("Hola, mi nombre es " + self.nombre);
        },
        presentar: function () {
            $('h3').html("Tengo " + self.edad + " años.");
        }
    };
}

module.exports = Persona;  