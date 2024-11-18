"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paciente_1 = require("./paciente");
var proveedor_1 = require("./proveedor");
var redVeterinaria_1 = require("./redVeterinaria");
var sucursalVeterinaria_1 = require("./sucursalVeterinaria");
var rls = require("readline-sync");
//  BIENVENIDOS 
console.error("----------------------------");
console.log(" * BIENVENIDOS * ");
//  MENU DE BIENVENIDA 
var bienvenido = rls.question(" Presione la tecla X para ingresar ");
while (true) {
    if (bienvenido === "X") {
        console.error("------------------------------");
        console.log("1_ RED DE VETERINARIA");
        break;
        console.log("2_ CLIENTES ");
        break;
        console.log("3_ PACIENTES");
        break;
        console.error("------------------------------");
    }
}
//provee
var RedVete = new redVeterinaria_1.RedVeterinaria();
var proveedor1 = new proveedor_1.Proveedor("Roberto Sanchez Dogui", 3386, 95565);
var proveedor2 = new proveedor_1.Proveedor("Analia Pedero sabrositos ", 228465325, 45218);
var proveedor3 = new proveedor_1.Proveedor("Distribuidora sabatini", 2284556523, 29864);
RedVete.agregarProveedores(proveedor1);
RedVete.agregarProveedores(proveedor2);
RedVete.agregarProveedores(proveedor3);
RedVete.eliminarProveedores(29864);
//veterinaria
var veterinaria = new sucursalVeterinaria_1.Veterinaria("huellitas,", "perez 455", 6456465);
var paciente1 = new paciente_1.Paciente("rocko", "perro", 4564, 48562);
var paciente2 = new paciente_1.Paciente("Tomm", "gato", 4455, 7856);
var paciente3 = new paciente_1.Paciente("nina", "Gato", 4456, 5862);
veterinaria.agregarPaciente(paciente1);
veterinaria.agregarPaciente(paciente2);
veterinaria.agregarPaciente(paciente3);
veterinaria.bajaPaciente(4564);
// Listar 
console.log("Lista de pacientes en el registro:");
console.log(veterinaria.getListaPacientes()); // Llama al método para obtener la lista de vehículos.
/*

import * as rls from 'readline-sync';

import { Vehiculo } from "./Vehiculo";

import { RegistroAutomotor } from "./registroAutomotor";

let registro = new RegistroAutomotor();

let ford: Vehiculo = new Vehiculo("Ford", "Ka", "Hatchback", "Vehículo urbano y compacto");
let motomel: Vehiculo = new Vehiculo("Motomel", "110cc", "Transporte urbano y recreativo", "Motocicleta de calle");
let siena: Vehiculo = new Vehiculo("Fiat", "Siena", "Vehículo familiar y urbano", "Sedán");
let scania: Vehiculo = new Vehiculo("Scania", "R 450", "Transporte de carga pesada", "Camión de larga distancia");

// Agregar vehículos al registro
registro.agregarVehiculo(ford);
registro.agregarVehiculo(motomel);
registro.agregarVehiculo(siena);
registro.agregarVehiculo(scania);

// Listar vehículos
console.log("Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo()); // Llama al método para obtener la lista de vehículos.

// Eliminar vehiculo.

registro.eliminarVehiculo(ford);

console.log("El vehículo eliminado es: " , ford);

console.log(" Vehículo eliminado con exito ");
console.log(registro.getListaVehiculo());

// Vehiculo nuevo.
let fitito: Vehiculo = new Vehiculo("fitito", "m83", "Transporte para pequeños ", " corta distancia");
registro.agregarVehiculo( fitito);


console.log("El vehículo agregado es: " );

// Ingreso de un vehiculo por el usuario.
let marca: string = rls.question("Ingrese la marca del vehículo: ");
let modelo: string = rls.question("Ingrese el modelo del vehículo: ");
let tipo: string = rls.question("Ingrese el tipo del vehículo: ");
let uso: string = rls.question("Ingrese el uso del vehículo: ");

let nuevoVehiculo: Vehiculo = new Vehiculo(marca, modelo, tipo, uso);

// Agregar el nuevo vehículo al registro
registro.agregarVehiculo(nuevoVehiculo);

console.log("Vehículo agregado:");
console.log(registro.getListaVehiculo());
*/ 
