import * as fs from 'fs';
import { LinkedList } from 'typescript-collections';
import { NodoEstacion } from './NodoEstacion';

export class SaveFile {
    private filePath = 'estaciones.json';

    constructor() {}

    public appendEstacion(estacion: NodoEstacion): void {
        try {
            let estaciones: NodoEstacion[] = [];

            // Check if the file exists and read data synchronously
            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                estaciones = JSON.parse(data);
            }

            // Append new Estacion
            estaciones.push(estacion);

            // Write back to the file synchronously
            fs.writeFileSync(this.filePath, JSON.stringify(estaciones
                , null, 2));
                console.log('Estacion appended successfully! ' + estacion.getNombre());
            } catch (error) {
                console.error('Error appending Estacion:', error);
            }
        }
    
        public appendVecindad(dictEstaciones: Map<NodoEstacion, LinkedList<NodoEstacion>>): void {
            try {
                let dataArray = [];
    
                // Check if the file exists and read data synchronously
                if (fs.existsSync(this.filePath)) {
                    const data = fs.readFileSync(this.filePath, 'utf8');
                    dataArray = JSON.parse(data);
                }
    
                // Convert Map to an array of serializable objects
                const dictEstacionesArray = Array.from(dictEstaciones.entries()).map(([key, value]) => ({
                    estacion: key,    // Ensure Estacion is serializable
                    vecinos: value,   // Ensure LinkedList<Estacion> is serializable
                }));
    
                // Append new dictEstaciones data
                dataArray.push(...dictEstacionesArray);
    
                // Write back to the file synchronously
                fs.writeFileSync(this.filePath, JSON.stringify(dataArray, null, 2));
                console.log('dictEstaciones appended successfully!');
            } catch (error) {
                console.error('Error appending dictEstaciones:', error);
            }
        }
    
        public readFromFile(): void {
            try {
                if (fs.existsSync(this.filePath)) {
                    // Synchronous read
                    const data = fs.readFileSync(this.filePath, 'utf8');
                    console.log(data);
                } else {
                    console.log('File does not exist.');
                }
            } catch (error) {
                console.error('Error reading file:', error);
            }
        }
    }
    
    // Export default (optional)
    export default SaveFile;
    