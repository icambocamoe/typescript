import { LinkedList } from 'typescript-collections';
export class GrafoEstacion {
    constructor() {
    }
    createVecinos(...estaciones) {
        const vecinos = new LinkedList();
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
                console.log(output);
            }
        });
    }
    getEstaciones(vecindad) {
        let output = "";
        // Iterate and print
        vecindad.forEach((vecinos, estacion) => {
            // Start the output string with the current estacion
            let output = estacion.getNombre();
            // Append each vecino's name to the output string
            vecinos.toArray().forEach(vecino => {
                output += ` -> ${vecino.getNombre()}`;
            });
        });
        return output;
    }
}
// Export default (optional)
export default GrafoEstacion;
//# sourceMappingURL=GrafoEstacion.js.map