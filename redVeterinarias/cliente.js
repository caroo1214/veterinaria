"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
/*Clientes: nombre, teléfono, si es VIP (cliente recurrente, en el cual se guarda el número de visitas e
incrementarlo cada vez que se realiza una y para ser VIP tiene que tener 5 o mas)
y un id (generado igual que los anteriores), las veterinarias deben contar con la opción de alta,
baja y modificación de los mismos. */
// Clase Cliente
var Cliente = /** @class */ (function () {
    //constructor
    function Cliente(nombre, telefono, idDueño) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.idDueño = idDueño;
        this.numDeVisitas = 0;
    }
    //getters
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.getIdDueño = function () {
        return this.idDueño;
    };
    Cliente.prototype.getnumDeVisitas = function () {
        return this.numDeVisitas;
    };
    //setter
    Cliente.prototype.setNombre = function (Nombre) {
        this.nombre = Nombre;
    };
    Cliente.prototype.setTelefono = function (Telefono) {
        this.telefono = Telefono;
    };
    Cliente.prototype.setnumDeVisitas = function (numDeVisitas) {
        this.numDeVisitas = numDeVisitas;
    };
    // contador vip
    Cliente.prototype.contadorVIP = function (Cliente) {
        if (this.numDeVisitas < 5) {
            Cliente.setnumDeVisitas(this.numDeVisitas + 1);
            console.log(this.numDeVisitas);
            console.log("El cliente no es VIP");
        }
        else {
            console.log("!!Es cliente VIP¡¡");
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
