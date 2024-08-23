import { LinkedList } from 'typescript-collections';
import { Estacion } from './Estacion';
export class GrafoEstacion {
    constructor(){

    }
    public createVecinos(...estaciones: Estacion[]): LinkedList<Estacion> {
        const vecinos = new LinkedList<Estacion>();
        estaciones.forEach(estacion => vecinos.add(estacion));
        return vecinos;
    }

    public addEstacionToVecindad(vecindad: Map<Estacion, LinkedList<Estacion>>, estacion: Estacion, vecinos: LinkedList<Estacion>) {
        vecindad.set(estacion, vecinos);
    }

    public findVecinos(requested_estacion: String, vecindad: Map<Estacion, LinkedList<Estacion>>): String{
        let output: string="";
        vecindad.forEach((vecinos, estacion) => {
            if (estacion.getNombre() == requested_estacion){
                // Start the output string with the current estacion
                let output = estacion.getNombre();
            
                // Append each vecino's name to the output string
                vecinos.toArray().forEach(vecino => {
                    output += ` -> ${vecino.getNombre()}`;
                });
            }
        });
        return output;
    }
    public getEstaciones(vecindad: Map<Estacion, LinkedList<Estacion>>): String{
        let output: string="";
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
export default Estacion;