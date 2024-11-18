
import { Proveedor } from "./proveedor";
import { Veterinaria } from "./sucursalVeterinaria";

/*Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
 ● Sucursales de Veterinarias ● Clientes ● Pacientes (mascotas) ● Proveedores  */

  //Clase RedVeterinarias

  export  class RedVeterinaria{

    private veterinarias: Veterinaria [];
    private proveedores:  Proveedor [];


//constructor
    public constructor(){
        this.veterinarias =[];
        this.proveedores = [];
    }

    //getters
    public getVeterinarias() :Veterinaria []{
        return this.veterinarias;
    }
    
    public getProveedores() : Proveedor []{
        return this.proveedores;
    }

  
    //setters
    public setVeterinarias(veterinarias: Veterinaria[]) : void {
        this.veterinarias = veterinarias;

    }
    
    public setProveedores(proveedores: Proveedor []) {
        this.proveedores = proveedores;
    
  }

//proovedores agregar
  
    public agregarProveedores(proveedores: Proveedor): void {
      this.proveedores.push(proveedores);
      console.log(`Proveedor agregado: ${proveedores.obtenerInformacion()}`);
    }
  

    //PROVEEDORES ELIMINARLOS
    public eliminarProveedores(id: number): void {
      let indice = -1;
      for (let i = 0; i < this.proveedores.length; i++) {
        if (this.proveedores[i].id === id) {
          indice = i;
          break;
        }
      }
      if (indice !== -1) {
        const proveedorEliminado = this.proveedores.splice(indice, 1)[0];
        console.log(
          `Proveedor eliminado: ${proveedorEliminado.obtenerInformacion()}`
        );
      } else {
        console.log("Proveedor no encontrado para eliminar");
      }
    }
  
    //modif
    modificarProveedor(Proveedor:Proveedor){{
      this.proveedores.push(Proveedor);
    }
  }
}
/* idCounter: number = 0;

function generateUniqueId(): string {
    return 'uniqueId_' + idCounter++;
}
*/
 // Genera un ID aletatorio entre 1 y 15000.
 //let idAleatoria: number = 0;
 
 export function idAleatoria(){
  return Math.floor(Math.random() * 15000) + 1;
}
