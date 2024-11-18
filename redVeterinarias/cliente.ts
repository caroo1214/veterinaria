import {Paciente} from './paciente';


/*Clientes: nombre, teléfono, si es VIP (cliente recurrente, en el cual se guarda el número de visitas e 
incrementarlo cada vez que se realiza una y para ser VIP tiene que tener 5 o mas) 
y un id (generado igual que los anteriores), las veterinarias deben contar con la opción de alta, 
baja y modificación de los mismos. */

// Clase Cliente
 export class Cliente {
    private nombre:string;
    private telefono:number;
    private idDueño:number;
    private numDeVisitas:number;
    
    //constructor
    public constructor(nombre:string, telefono: number,idDueño:number){
        this.nombre=nombre;
        this.telefono=telefono;
        this.idDueño=idDueño;
        this.numDeVisitas=0
    }
    

    //getters

    public getNombre():string{
        return this.nombre
    }
   
    public getTelefono():number{
        return this.telefono
    } 
    
    public getIdDueño(): number{
        return this.idDueño
    } 

    public getnumDeVisitas():number{
        return this.numDeVisitas
    }



    //setter
    
    public setNombre(Nombre:string):void{
        this.nombre=Nombre
    }

   public setTelefono(Telefono:number):void{
        this.telefono=Telefono
    }

    public setnumDeVisitas(numDeVisitas:number):void{
        this.numDeVisitas=numDeVisitas  

    }
    
    
    // contador vip
    public contadorVIP(Cliente: Cliente){ 
        if (this.numDeVisitas< 5){
            Cliente.setnumDeVisitas (this.numDeVisitas+1)
            console.log(this.numDeVisitas)
            console.log ("El cliente no es VIP")
                
        }else {
            console.log ("!!Es cliente VIP¡¡")
        }
    }

}
