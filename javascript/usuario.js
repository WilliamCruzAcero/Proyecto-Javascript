

class usuario{
    
    constructor ( nombre, apellido, email, contrasena){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
        this.activo = true ;  
    }

    saludar() {

       

        Swal.fire({
        position: 'top',
        icon: 'success',
        title: ` Bienvenido ${this.nombre} ${this.apellido} \n Ha sido registrado con el email ${this.email} \n Su estado es ${this.activo}`,
        showConfirmButton: false,
        timer: 3500
        
        })  
       
        
    }
}




  