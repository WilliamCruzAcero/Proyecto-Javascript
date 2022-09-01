// Levantar la simulación de "base de datos" de la API
API_simularBaseDeDatosDeAPI();

let formulario = document.getElementById("formulario");

function registrarUsuario( nombre, apellido, email, contrasena ) {    

    let headersList = {
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      name: nombre,
      last_name: apellido,
      email,
      password: contrasena
    });

    const options = { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    }

    const API = "https://postman-echo.com/post";

    // Requiere tener instalado https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino
    // ya que por seguridad no se permite que una página consuma APIS de otro servidor.
    // En un proyecto real, tanto la página como el servidor estarían alojados bajo un mismo dominio
    fetch(API, options)
     .then( response => response.json() )
     .then( ({ data }) => {        

      console.log("Respuesta de la API");
      console.table(data);

      // -----------------------------------------  Esto debería ocurrir en la API  -----------------------------------
      // Al ser una API de juguete, no almacena datos, entonces, se almacenan con localstorage para simular el guardado
          API_guardarUsuario(data);
      // --------------------------------------------------------------------------------------------------------------

      const { name, last_name, email, password } = data;
      const usuario = new Usuario( name, last_name, email, password );
      usuario.confirmarRegistro();

     }).catch( error => {
        console.error( error );
        const mensaje = error.message ?? "No se pudo guardar el usuario";
        mostrarError( mensaje );
     });
}

function validarCampo( input, campo ) {

    if ( !input.value ){

        const mensaje = `El campo ${campo} es requerido`;
        
        let parrafo = document.getElementById(`mensaje_${input.id}`)
        parrafo.innerText = mensaje;

        throw mensaje;
    }
}

function limpiarMensajesDeError() {
  const mensajes = document.getElementsByClassName("mensaje_error");

  for ( const mensaje of mensajes ) {
      mensaje.innerText = "";
  }
}

formulario.addEventListener("submit", function(e) {

    e.preventDefault();    

    limpiarMensajesDeError();

    let inputNombre = document.getElementById("nombre");
    let inputApellido = document.getElementById("apellido");
    let inputEmail = document.getElementById("email");
    let inputContrasena = document.getElementById("password");
    let inputTerminos = document.getElementById("terminos");

    if (!inputTerminos.checked) {
        
        const mensaje = document.getElementById("mensaje_terminos");
        mensaje.innerText=("Debe aceptar los términos y condiciones");
        document.mensaje_terminos.appendChild(mensaje);
        mensaje.value = ""; 
        throw mensaje;
    }    

    validarCampo( inputNombre, "Nombre" );
    validarCampo( inputApellido, "Apellidos" );
    validarCampo( inputEmail, "Email" );
    validarCampo( inputContrasena, "Contraseña" );

    registrarUsuario( inputNombre.value, inputApellido.value, inputEmail.value, inputContrasena.value );
});