"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var redVeterinaria_1 = require("./redVeterinaria");
/*Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta)

La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.  */
/*Clientes:  las veterinarias deben contar con la opción de alta,
baja y modificación de los mismos. */
/*Pacientes (mascotas): las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, id) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = (0, redVeterinaria_1.idAleatoria)();
        this.listaClientes = [];
        this.listaPacientes = [];
    }
    //getters
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.getListaClientes = function () {
        return this.listaClientes; //retorna lista de Clientes
    };
    Veterinaria.prototype.getListaPacientes = function () {
        return this.listaPacientes;
    };
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
    Veterinaria.prototype.setId = function (nuevoId) {
        this.id = nuevoId;
    };
    Veterinaria.prototype.setListaClientes = function (listaClientes) {
        this.listaClientes = listaClientes;
    };
    Veterinaria.prototype.setListaPacientes = function (listaPacientes) {
        this.listaPacientes = listaPacientes;
    };
    //agregar paciente: MASCOTA
    Veterinaria.prototype.agregarPaciente = function (listaPacientes) {
        this.listaPacientes.push(listaPacientes);
        console.log("Paciente agregado: ".concat(listaPacientes.datosAnimal()));
    };
    //eliminar mascota
    Veterinaria.prototype.bajaPaciente = function (id) {
        var index = -1;
        for (var i = 0; i < this.listaPacientes.length; i++) {
            if (this.listaPacientes[i].id === id) {
                index = i;
                break;
            }
            if (index !== -1) {
                var pacienteEliminado = this.listaPacientes.splice(index, 1)[0];
                console.log("Paciente eliminado: ".concat(pacienteEliminado.datosAnimal()));
            }
            else {
                console.log("Paciente no encontrado para eliminar");
            }
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
