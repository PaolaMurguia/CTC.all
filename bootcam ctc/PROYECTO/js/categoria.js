
//Aquí seleccionamos el ID del H1 al que cambiaremos sus datos
const bienvenidaUser = document.querySelector("#nombreBienvenida");

//Aquí creamos una variable donde guardaremos el valor obtenido del input.value   
//que está con "nombre" que está guardado en el almacenamiento local.
const nombreUser = localStorage.getItem("nombre");

//acontinuación imprimimos que el valor obtenido de "nombre" y verificamos que sea correcto.
console.log(nombreUser);

//Aquí le asignaremos un valor al contenido de texto que tiene nuestro H1 con el valor de "nombre"
bienvenidaUser.textContent = `Hola Master ${nombreUser}`;




