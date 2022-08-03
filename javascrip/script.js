
const mensaje = []

mensaje[0] = ("Ingrase los datos correspondientes")
mensaje[1] = ("El Nombre no es valido")
mensaje[2] = ("El Apellido no es valido")
mensaje[3] = ("El  Email no es valido")
mensaje[4] = ("La  Contraseña es incorrecta") 
mensaje[5] = ("Registro exitoso")
    
 
class registro {
    constructor (nombre, apellido, email, contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena; 
        
    }
}



function llenarRegistro(){

    let nombre = prompt("Ingrese su Nombre:")
    let apellido = prompt("Ingrese su Apellido:")
    let email = prompt("Ingrese su Email:")
    let contrasena = prompt("Ingrese su Contraseña:")

    if ((nombre == "") || (apellido == "") || (email == "") || (contrasena == "") )  {
        alert(mensaje[0])
        
    }else{   
        
    let objetoRegistro = new registro (nombre, apellido, email, contrasena); 
    
    return objetoRegistro;
    }
    
}

for (let i = 0 ; i < 1 ; i++){
    let objeto = llenarRegistro();

    alert(mensaje[5])
}





           
        
    


   