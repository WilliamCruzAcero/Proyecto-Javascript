  
   
 

    
    
    const nombreUsuario = "william";
    const apellidoUsuario = "cruz";
    const emailUsuario = "williamcruz@hotmail.com";
    const contrasenaUsuario = "1234";
    
    
    
      
            let nombre = document.getElementById("nombre");
            let apellido = document.getElementById("apellido");
            let email = document.getElementById("email");
            let contrasena = document.getElementById("password");
    
            let formulario =  document.getElementById("formulario");
            formulario.addEventListener("submit", function(e){
                e.preventDefault();
                
            if (nombre && apellido && email && contrasena){
    
                let validacion = validarDatos(nombre,apellido, email,contrasena);
    
                if(validacion){
    
                    let objetoUsuario = new usuario(nombre, apellido, email, contrasena);
    
                    console.log(objetoUsuario);
                    objetoUsuario.mostrarBiembenida();
                }
            }else{
    
                alert("Ingrese todos los datos");
            
                } 
    
                 
                
        })

        function validarDatos(nombre, apellido, email,contrasena){
    
            if (nombre  == nombreUsuario){
                alert("ya existe ese nombre");
                return false;
        
            }
            if (nombre  == nombreUsuario){
                alert("ya existe ese nombre");
                return false;
        
            }
            if (apellido  == apellidoUsuario){
                alert("ya existe ese apellido");
                return false;
        
            }
            
            if (email == emailUsuario){
                alert("ya existe ese email");
                return false;
            }
            if(contrasena == contrasenaUsuario){
                alert("la contraseña ya existe");
                return false;
            }
        return true;
        
        } 
        

   







   
  
   