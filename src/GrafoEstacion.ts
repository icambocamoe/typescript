import { LinkedList } from 'typescript-collections';
import { NodoEstacion } from './NodoEstacion';
export class GrafoEstacion {
    constructor(){

    }
    public createVecinos(...estaciones: NodoEstacion[]): LinkedList<NodoEstacion> {
        const vecinos = new LinkedList<NodoEstacion>();
        estaciones.forEach(estacion => vecinos.add(estacion));
        return vecinos;
    }

    public addEstacionToVecindad(vecindad: Map<NodoEstacion, LinkedList<NodoEstacion>>, estacion: NodoEstacion, vecinos: LinkedList<NodoEstacion>) {
        vecindad.set(estacion, vecinos);
    }

    public findVecinos(requested_estacion: String, vecindad: Map<NodoEstacion, LinkedList<NodoEstacion>>) {
       
        vecindad.forEach((vecinos, estacion) => {
            if (estacion.getNombre() == requested_estacion){
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
    public getEstaciones(vecindad: Map<NodoEstacion, LinkedList<NodoEstacion>>): String{
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
export default GrafoEstacion;