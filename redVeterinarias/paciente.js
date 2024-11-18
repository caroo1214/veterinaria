"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var redVeterinaria_1 = require("./redVeterinaria");
/*Pacientes (mascotas): nombre, especie (si no es perro o gato, deberá registrarse como exótica),
id del dueño, las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */
// Clase Paciente
var Paciente = /** @class */ (function () {
    //constructor
    function Paciente(nombre, especie, id, idDueño) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = (0, redVeterinaria_1.idAleatoria)();
        this.idDueño = (0, redVeterinaria_1.idAleatoria)();
    }
    //getters
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.getIdDueño = function () {
        return this.idDueño;
    };
    Paciente.prototype.getId = function () {
        return this.idDueño;
    };
    //setters
    Paciente.prototype.setEspecie = function (Especie) {
        this.especie = Especie;
    };
    Paciente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    // mascota exotica
    Paciente.prototype.esExotica = function () {
        var ok = false;
        if (this.especie != "perro" && this.especie != "gato") {
            ok = true;
            console.log("el paciente " + this.nombre + " es una especie exotica");
        }
        else {
            console.log("el paciente " + this.nombre + " no es una especie exotica");
        }
        return ok;
    };
    Paciente.prototype.datosAnimal = function () {
        return "paciente: Nombre: ".concat(this.nombre, ", Especie: ").concat(this.especie, ",id: ").concat(this.id, ", Due\u00F1o: ").concat(this.idDueño);
    };
    //modificar paciente
    Paciente.prototype.modificarPaciente = function (nombreNuevo, especieNuevo) {
        var pacienteAModificar; //me lo agrega
        if (pacienteAModificar) {
            pacienteAModificar.nombre = nombreNuevo;
            pacienteAModificar.especie = especieNuevo;
            console.log("Paciente modificado: ".concat(pacienteAModificar.datosAnimal()));
        }
        else {
            console.log(" El paciente no está registrado");
        }
    };
    return Paciente;
}());
exports.Paciente = Paciente;
/*
public getCostoTotal(): number {
  let precio = this.getPrecioBase();
  if (this.limpieza) {
      precio *= 1.10; // 10% adicional de limpieza
  }
  return precio * this.iva; // Se agrega 21% de IVA
}*/ 
