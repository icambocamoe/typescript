import { GrafoEstacion } from './GrafoEstacion';
import { Estacion } from './Estacion';
import { LinkedList } from 'typescript-collections';

const grafo = new GrafoEstacion();

// Create estaciones
const estacion1 = new Estacion("plaza universidad", ["linea 2"], "Juarez", "5am-11pm", "extra1", 2);
const estacion2 = new Estacion("independencia", ["linea 3"], "independencia", "5am-11pm", "extra1", 2);
const estacion3 = new Estacion("santuario", ["linea 3"], "juan manuel", "5am-11pm", "extra1", 2);
const estacion4 = new Estacion("guadalajara centro", ["linea 3"], "16 de septiembre", "5am-11pm", "extra1", 2);
const estacion5 = new Estacion("plaza de la bandera", ["linea 3"], "juan manuel", "5am-11pm", "extra1", 2);
const estacion6 = new Estacion("juarez", ["linea 2"], "Juarez", "5am-11pm", "extra1", 2);
const estacion7 = new Estacion("san juan de dios", ["linea 2"], "independencia", "5am-11pm", "extra1", 2);

// Initialize vecindad
const vecindad = new Map<Estacion, LinkedList<Estacion>>();

// Add estaciones and their vecinos to vecindad
grafo.addEstacionToVecindad(vecindad, estacion4, grafo.createVecinos(estacion1, estacion2, estacion3));
grafo.addEstacionToVecindad(vecindad, estacion2, grafo.createVecinos(estacion4, estacion5));
grafo.addEstacionToVecindad(vecindad, estacion1, grafo.createVecinos(estacion6, estacion7, estacion4));



grafo.findVecinos("guadalajara centro", vecindad);


