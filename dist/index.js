import { GrafoEstacion } from './GrafoEstacion';
import { NodoEstacion } from './NodoEstacion';
import { SaveFile } from './SaveFile';
const grafo = new GrafoEstacion();
const yeshua = new SaveFile();
// Create estaciones
const estacion1 = new NodoEstacion("plaza universidad", ["linea 2"], "Juarez", "5am-11pm", "extra1", 2);
const estacion2 = new NodoEstacion("independencia", ["linea 3"], "independencia", "5am-11pm", "extra1", 2);
const estacion3 = new NodoEstacion("santuario", ["linea 3"], "juan manuel", "5am-11pm", "extra1", 2);
const estacion4 = new NodoEstacion("guadalajara centro", ["linea 3"], "16 de septiembre", "5am-11pm", "extra1", 2);
const estacion5 = new NodoEstacion("plaza de la bandera", ["linea 3"], "juan manuel", "5am-11pm", "extra1", 2);
const estacion6 = new NodoEstacion("juarez", ["linea 2"], "Juarez", "5am-11pm", "extra1", 2);
const estacion7 = new NodoEstacion("san juan de dios", ["linea 2"], "independencia", "5am-11pm", "extra1", 2);
// Initialize vecindad
const lista = new Map();
// Add estaciones and their vecinos to vecindad
grafo.addEstacionToVecindad(lista, estacion4, grafo.createVecinos(estacion1, estacion2, estacion3));
grafo.addEstacionToVecindad(lista, estacion2, grafo.createVecinos(estacion4, estacion5));
grafo.addEstacionToVecindad(lista, estacion1, grafo.createVecinos(estacion6, estacion7, estacion4));
grafo.findVecinos("guadalajara centro", lista);
yeshua.appendEstacion(estacion1);
yeshua.readFromFile();
yeshua.appendEstacion(estacion2);
yeshua.readFromFile();
//# sourceMappingURL=index.js.map