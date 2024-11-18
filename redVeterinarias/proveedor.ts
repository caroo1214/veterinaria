import { idAleatoria } from "./redVeterinaria";
/* Proveedores: nombre, teléfono y un id generado como los otros.
 la red debe contar con la opción de alta, baja y modificación de los mismos. 
 IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista. 
 Si ya existe se debe volver a generar.*/

 // Clase Proveedor
  
  export class Proveedor {
    private nombre: string;
    private telefono: number;
    //public id: number=idAleatoria()
    public id:  number=Math.floor(Math.random() * 15000) + 1;

    //constructor
    public constructor (nombre:string, telefono: number,/*id:number*/ id:number){
        this.nombre = nombre;
        this.telefono = telefono;
       // this.id = idAleatoria(); si lo pongo en red
       this.id =Math.floor(Math.random() * 15000) + 1;

    }


    //getters
    public getNombre(): string{
        return this.nombre
    }

    public getTelefono(): number{
        return this.telefono
    }

    public getId(): number{
       return this.id
    }

    
    //setters
    public setNombre(nombre: string): void{
        this.nombre= nombre
    }
    
    public setTelefono(nuevoTelefono: number): void{
        this.telefono = nuevoTelefono
    }

    public setId(nuevoId:number):void {
            this.id = nuevoId;
    }

    //saber informacion del proveedor
    public obtenerInformacion(): string {
        return `id: ${this.id}, nombre: ${this.nombre}, numeroTelefono: ${this.telefono}`;
      }

//modificarlo
     public modificarProveedor(  nuevoNombre: string, nuevoId: number,nuevoTelefono: number): void {
        let proveedorAModificar: Proveedor| undefined;//me lo agrega
       
        if (proveedorAModificar) {
            proveedorAModificar.nombre = nuevoNombre;
            proveedorAModificar.id = nuevoId;
            proveedorAModificar.telefono = nuevoTelefono;

          console.log(`Proveedor modificado: ${proveedorAModificar.obtenerInformacion()}`);
        } else {
          console.log(" El proveedor no está registrado");
        }
      }


    }