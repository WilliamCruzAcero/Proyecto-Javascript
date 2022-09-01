let baseDatosSimulada;

function API_simularBaseDeDatosDeAPI() {
  baseDatosSimulada = JSON.parse(localStorage.getItem("usuarios")) || []
}

function API_ValidarEmailExistente( email ) {

  const usuario = baseDatosSimulada.find( usuario => usuario.email === email );

  if ( usuario ) {
    throw new Error("El usuario ya está registrado");
  }
}

function API_guardarUsuario( data ) {

  const { name, last_name, email, password } = data;

  API_ValidarEmailExistente( email );

  const usuario = new Usuario( name, last_name, email, password );

  baseDatosSimulada.push( usuario );
  localStorage.setItem("usuarios", JSON.stringify(baseDatosSimulada));
}