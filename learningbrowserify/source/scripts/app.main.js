var $ = require('jquery');  
var persona = require('./app.persona');

$('h1').html('Hola Browserify');

var carlos = new persona("Carlos", 30);  
carlos.saludar();  
carlos.presentar();

var els = document.getElementsByTagName("h1");
for(var el in els) {
    els[el].style.backgroundColor="red";
}