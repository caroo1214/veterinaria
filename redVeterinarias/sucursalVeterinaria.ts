import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import {idAleatoria } from "./redVeterinaria";

/*Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta) 

La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.  */

/*Clientes:  las veterinarias deben contar con la opción de alta, 
baja y modificación de los mismos. */

  /*Pacientes (mascotas): las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */


export class Veterinaria {
    private nombre: string;
    private direccion: string; 
    private id: number;
    private listaClientes: Cliente [];
    private listaPacientes:Paciente [];
   
  
    public constructor (nombre: string, direccion: string, id: number){
        this.nombre= nombre;
        this.direccion = direccion;
        this.id = idAleatoria();
        this.listaClientes = [];
        this.listaPacientes =[];
    }
  
    //getters
    public getNombre():string{
        return this.nombre
    }
  
    public getDireccion():string{
        return this.direccion
    }
  
     public getId(): number{
        return this.id
    }
  
    public getListaClientes():Cliente[] {
        return this.listaClientes;                        //retorna lista de Clientes
    }
  
    public getListaPacientes():Paciente[]{                //retorna lista de Pacientes
        return this.listaPacientes;
    }
   
  
    /*
    // Getters
    public getListaVehiculo(): Vehiculo[] {
        return this.listaVehiculo; // Retorna la lista de vehículos
    }
  
    // Setters
    public setListaVehiculo(listaVehiculo: Vehiculo[]): void {
        this.listaVehiculo = listaVehiculo;
    }*/
  
    //setters
    public setId(nuevoId:number):void {
        this.id = nuevoId;
    }
  
    public setListaClientes(listaClientes: Cliente[]){
        this.listaClientes = listaClientes;
    }
    public setListaPacientes(listaPacientes:Paciente[]){
        this.listaPacientes = listaPacientes;
    }

    //agregar paciente: MASCOTA
    public agregarPaciente(listaPacientes: Paciente): void {
        this.listaPacientes.push(listaPacientes);
        console.log(`Paciente agregado: ${listaPacientes.datosAnimal()}`);
      }


    //eliminar mascota
      public bajaPaciente(id: number): void {
        let index = -1;
        for (let i = 0; i < this.listaPacientes.length; i++) {
          if (this.listaPacientes[i].id === id) {
            index = i;
            break;
          }

    
        if (index !== -1) {
          const pacienteEliminado = this.listaPacientes.splice(index, 1)[0];
          console.log(`Paciente eliminado: ${pacienteEliminado.datosAnimal()}`);
        } else {
          console.log("Paciente no encontrado para eliminar");
        }
        
    }
}
}

  
    
