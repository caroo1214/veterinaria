"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
exports.idAleatoria = idAleatoria;
/*Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
 ● Sucursales de Veterinarias ● Clientes ● Pacientes (mascotas) ● Proveedores  */
//Clase RedVeterinarias
var RedVeterinaria = /** @class */ (function () {
    //constructor
    function RedVeterinaria() {
        this.veterinarias = [];
        this.proveedores = [];
    }
    //getters
    RedVeterinaria.prototype.getVeterinarias = function () {
        return this.veterinarias;
    };
    RedVeterinaria.prototype.getProveedores = function () {
        return this.proveedores;
    };
    //setters
    RedVeterinaria.prototype.setVeterinarias = function (veterinarias) {
        this.veterinarias = veterinarias;
    };
    RedVeterinaria.prototype.setProveedores = function (proveedores) {
        this.proveedores = proveedores;
    };
    //proovedores agregar
    RedVeterinaria.prototype.agregarProveedores = function (proveedores) {
        this.proveedores.push(proveedores);
        console.log("Proveedor agregado: ".concat(proveedores.obtenerInformacion()));
    };
    //PROVEEDORES ELIMINARLOS
    RedVeterinaria.prototype.eliminarProveedores = function (id) {
        var indice = -1;
        for (var i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].id === id) {
                indice = i;
                break;
            }
        }
        if (indice !== -1) {
            var proveedorEliminado = this.proveedores.splice(indice, 1)[0];
            console.log("Proveedor eliminado: ".concat(proveedorEliminado.obtenerInformacion()));
        }
        else {
            console.log("Proveedor no encontrado para eliminar");
        }
    };
    //modif
    RedVeterinaria.prototype.modificarProveedor = function (Proveedor) {
        {
            this.proveedores.push(Proveedor);
        }
    };
    return RedVeterinaria;
}());
exports.RedVeterinaria = RedVeterinaria;
/* idCounter: number = 0;

function generateUniqueId(): string {
    return 'uniqueId_' + idCounter++;
}
*/
// Genera un ID aletatorio entre 1 y 15000.
//let idAleatoria: number = 0;
function idAleatoria() {
    return Math.floor(Math.random() * 15000) + 1;
}
