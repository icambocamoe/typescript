"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GrafoEstacion_1 = require("./GrafoEstacion");
const Estacion_1 = require("./Estacion");
const grafo = new GrafoEstacion_1.GrafoEstacion();
// Create estaciones
const estacion1 = new Estacion_1.Estacion("plaza universidad", ["linea 2"], "Juarez", "5am-11pm", "extra1", 2);
const estacion2 = new Estacion_1.Estacion("independencia", ["linea 3"], "independencia", "5am-11pm", "extra1", 2);
const estacion3 = new Estacion_1.Estacion("santuario", ["linea 3"], "juan manuel", "5am-11pm", "extra1", 2);
const estacion4 = new Estacion_1.Estacion("guadalajara centro", ["linea 3"], "16 de septiembre", "5am-11pm", "extra1", 2);
const estacion5 = new Estacion_1.Estacion("plaza de la bandera", ["linea 3"], "juan manuel", "5am-11pm", "extra1", 2);
const estacion6 = new Estacion_1.Estacion("juarez", ["linea 2"], "Juarez", "5am-11pm", "extra1", 2);
const estacion7 = new Estacion_1.Estacion("san juan de dios", ["linea 2"], "independencia", "5am-11pm", "extra1", 2);
// Initialize vecindad
const vecindad = new Map();
// Add estaciones and their vecinos to vecindad
grafo.addEstacionToVecindad(vecindad, estacion4, grafo.createVecinos(estacion1, estacion2, estacion3));
grafo.addEstacionToVecindad(vecindad, estacion2, grafo.createVecinos(estacion4, estacion5));
grafo.addEstacionToVecindad(vecindad, estacion1, grafo.createVecinos(estacion6, estacion7, estacion4));
grafo.findVecinos("guadalajara centro", vecindad);
