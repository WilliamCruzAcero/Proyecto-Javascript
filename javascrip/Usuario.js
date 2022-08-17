 
   class usuario{
    
    constructor ( nombre, apellido, email, contrasena){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
        this.activo = true ;  
    }

    mostrarBiembenida(){

    alert("Bienvenido " +this.nombre+"  "+this.apellido+ "\n"
    +"su email es "+this.email + "\n"
    +"su estado es "+this.activo);        
    }
}  
