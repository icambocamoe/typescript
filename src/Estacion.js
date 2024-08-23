"use strict";
// File: Estacion.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estacion = void 0;
// Class Declaration
class Estacion {
    // Constructor
    constructor(nombre, lineas, direccion, horario, extra1, extra2) {
        this.nombre = nombre;
        this.lineas = lineas;
        this.direccion = direccion;
        this.horario = horario;
        this.extra1 = extra1;
        this.extra2 = extra2;
    }
    // Methods
    print() {
        console.log("Estacion");
        console.log("nombre " + this.nombre);
        console.log("lineas " + this.lineas);
        console.log("direccion " + this.direccion);
        console.log("horario " + this.horario);
        console.log("extra1 " + this.extra1);
        console.log("extra2 " + this.extra2);
        console.log("******************");
    }
    getNombre() {
        return this.nombre;
    }
}
exports.Estacion = Estacion;
// Export default (optional)
exports.default = Estacion;
