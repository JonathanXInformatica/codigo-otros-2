var boton = document.querySelector("#form");//se modifica para que se seleccione el boton y no el formulario

boton.onclick = function(ed) {//se cambia la referencia a boton y el onsubmit a onclick para que haga referencia a cuando se da click al boton y no al formulario
  ed.preventDefault();//se cambiuo el nombre de e a ed para no afectar las variables internas y para que el formulario no haga que se reinicie la pagina al darle click al boton.
  formulario = document.querySelector("#formulario");//se agrega para que se obtengan los datos del formulario
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  else{
    n.classList.remove("error");//se agrega para evitar que se quede en rojo si sale un error una vez
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }
  else{
    e.classList.remove("error");//misma razon linea 23
  }

if (nombre.length > 0 && (edad > 18 && edad < 120) ) {//se arreglan los saltos de linea para que sea mas comprensible y se eviten errores
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);



function crearElemento(descripcion, valor) {//se eliminan las lineas duplicadas que no sirven
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}