"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrafoEstacion = void 0;
const typescript_collections_1 = require("typescript-collections");
const Estacion_1 = require("./Estacion");
class GrafoEstacion {
    constructor() {
    }
    createVecinos(...estaciones) {
        const vecinos = new typescript_collections_1.LinkedList();
        estaciones.forEach(estacion => vecinos.add(estacion));
        return vecinos;
    }
    addEstacionToVecindad(vecindad, estacion, vecinos) {
        vecindad.set(estacion, vecinos);
    }
    findVecinos(requested_estacion, vecindad) {
        vecindad.forEach((vecinos, estacion) => {
            if (estacion.getNombre() == requested_estacion) {
                // Start the output string with the current estacion
                let output = estacion.getNombre();
                // Append each vecino's name to the output string
                vecinos.toArray().forEach(vecino => {
                    output += ` -> ${vecino.getNombre()}`;
                });
                // Print the final output string
                console.log(output);
            }
        });
    }
    imprimirEstaciones(vecindad) {
        // Iterate and print
        vecindad.forEach((vecinos, estacion) => {
            // Start the output string with the current estacion
            let output = estacion.getNombre();
            // Append each vecino's name to the output string
            vecinos.toArray().forEach(vecino => {
                output += ` -> ${vecino.getNombre()}`;
            });
            // Print the final output string
            console.log(output);
        });
    }
}
exports.GrafoEstacion = GrafoEstacion;
// Export default (optional)
exports.default = Estacion_1.Estacion;
