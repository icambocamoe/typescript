import { NodoEstacion } from './NodoEstacion.js';
// Create estaciones
const estacion1 = new NodoEstacion("plaza universidad", ["linea 2"], "Juarez", "5am-11pm", "extra1", 2);
const estacion2 = new NodoEstacion("independencia", ["linea 3"], "independencia", "5am-11pm", "extra1", 2);
const estacion3 = new NodoEstacion("santuario", ["linea 3"], "juan manuel", "5am-11pm", "extra1", 2);
const estacion4 = new NodoEstacion("guadalajara centro", ["linea 3"], "16 de septiembre", "5am-11pm", "extra1", 2);
const estacion5 = new NodoEstacion("plaza de la bandera", ["linea 3"], "juan manuel", "5am-11pm", "extra1", 2);
const estacion6 = new NodoEstacion("juarez", ["linea 2"], "Juarez", "5am-11pm", "extra1", 2);
const estacion7 = new NodoEstacion("san juan de dios", ["linea 2"], "independencia", "5am-11pm", "extra1", 2);
const graph = {
    "plaza universidad": [estacion6, estacion7, estacion4],
    "guadalajara centro": [estacion4, estacion2, estacion3, estacion1],
    "independencia": [estacion2, estacion5, estacion4],
};
let nodes = Object.keys(graph);
let currentNodeIndex = 0;
function deleteEstacion(graph, keyToDel) {
    for (const key in graph) {
        const estaciones = graph[key]; // NodoEstacion array for the current key
        console.log(`Key: ${key}`);
        estaciones.forEach(estacion => {
            console.log(`estacion: ${estacion.getNombre().toString()}, key: ${keyToDel.toString()}`);
            if (estacion.getNombre().toString() == keyToDel.toString()) {
                const index = estaciones.indexOf(estacion);
                if (index > -1) {
                    estaciones.splice(index, 1); // Remove the estacion from the array
                    console.log(`Deleted estacion from ${key}`);
                }
                else {
                    console.log(`Estacion not found in ${key}`);
                }
            }
        });
    }
    if (graph.hasOwnProperty(keyToDel)) {
        delete graph[keyToDel]; // Deletes the entire key and its associated array
        console.log(`Deleted graph key: ${keyToDel}`);
    }
    else {
        console.log(`Key ${keyToDel} does not exist`);
    }
    refreshNodes();
}
function updateUI() {
    var _a;
    const currentNode = nodes[currentNodeIndex];
    const currentNodeElement = document.getElementById('current-node');
    const stationsList = document.getElementById('stations-list');
    if (currentNodeElement) {
        currentNodeElement.innerText = currentNode;
    }
    if (stationsList) {
        stationsList.innerHTML = ''; // Clear previous stations
        (_a = graph[currentNode]) === null || _a === void 0 ? void 0 : _a.forEach(estacion => {
            const li = document.createElement('li');
            li.innerText = estacion.print();
            stationsList.appendChild(li);
        });
    }
    updateButtons(); // Disable or enable buttons based on current position
}
function refreshNodes() {
    nodes = Object.keys(graph); // Update the nodes array based on the current graph
    updateButtons(); // Call the function to update button states
}
function updateButtons() {
    const upButton = document.getElementById('up-button');
    const downButton = document.getElementById('down-button');
    console.log(nodes.length);
    if (upButton && downButton) {
        upButton.disabled = currentNodeIndex === 0;
        downButton.disabled = currentNodeIndex === nodes.length - 1;
    }
}
function addEventListeners() {
    const upButton = document.getElementById('up-button');
    const downButton = document.getElementById('down-button');
    const saveButton = document.getElementById('save-button');
    const deleteButton = document.getElementById('delete-button');
    upButton === null || upButton === void 0 ? void 0 : upButton.addEventListener('click', () => moveNode('up'));
    downButton === null || downButton === void 0 ? void 0 : downButton.addEventListener('click', () => moveNode('down'));
    saveButton === null || saveButton === void 0 ? void 0 : saveButton.addEventListener('click', (event) => saveEstacion(event));
    deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener('click', () => deleteEstacion(graph, nodes[currentNodeIndex]));
}
function saveEstacion(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve values from form
    const nombre = document.getElementById('nombre').value;
    const lineas = document.getElementById('lineas').value.split(','); // Split by comma
    const adyacentes = document.getElementById('adyacencias').value.split(','); // Estacion anterior y posterior
    const direccion = document.getElementById('direccion').value;
    const horario = document.getElementById('horario').value;
    const extra1 = document.getElementById('extra1').value;
    const extra2 = parseInt(document.getElementById('extra2').value, 10);
    // Create the new NodoEstacion instance
    const nuevaEstacion = new NodoEstacion(nombre, lineas, direccion, horario, extra1, extra2);
    console.log(nuevaEstacion); // You can log it or further process it
    // Append it to the graph under a specific key (e.g., "guadalajara centro")
    modifyEstacion(graph, nuevaEstacion.getNombre(), nuevaEstacion, adyacentes[0], adyacentes[1]);
    refreshNodes(); // Refresh nodes and update buttons
}
function modifyEstacion(graph, newkey, nuevaEstacion, afterEstacion, beforeEstacion) {
    const newGraph = {};
    const afterKeyExists = afterEstacion && graph[afterEstacion] !== undefined;
    const beforeKeyExists = beforeEstacion && graph[beforeEstacion] !== undefined;
    // Log the arrays for the specified after and before keys
    // console.log(`After Estacion (${afterEstacion}):`, afterKeyExists ? graph[afterEstacion] : undefined);
    // console.log(`Before Estacion (${beforeEstacion}):`, beforeKeyExists ? graph[beforeEstacion] : undefined);
    // Proceed only if either afterEstacion or beforeEstacion is a valid key
    if (afterKeyExists || beforeKeyExists) {
        // Loop through the graph to find the key
        if (!graph[newkey]) {
            // If only afterEstacion is found, insert after it
            if (afterKeyExists) {
                console.log(`afterEstacion ${afterEstacion}`);
                graph[afterEstacion].push(nuevaEstacion);
                for (const key in graph) {
                    newGraph[key] = graph[key]; // Copy existing key-value pairs
                    if (key == afterEstacion) {
                        // Insert new key-value pair after the target key
                        newGraph[newkey] = [nuevaEstacion];
                        const estacion = findEstacionInGraph(graph, afterEstacion, afterEstacion);
                        if (estacion) {
                            newGraph[newkey].push(estacion);
                            console.log(`la estacion ${estacion} ha sido añadida debidamente`);
                        }
                    }
                }
                // Update the original graph with the new graph structure
                for (const key in newGraph) {
                    console.log(`AfterEstacion ${key}`);
                    delete graph[key];
                    graph[key] = newGraph[key];
                }
            }
            else {
                console.log(`Error: afterEstacion '${afterEstacion}' was not found in key '${newkey}'.`);
            }
            // If only beforeEstacion is found, insert before it
            if (beforeKeyExists) {
                console.log(`beforeEstacion ${beforeEstacion}`);
                graph[beforeEstacion].push(nuevaEstacion);
                for (const key in graph) {
                    if (key == beforeEstacion) {
                        // Insert new key-value pair after the target key
                        newGraph[newkey] = [nuevaEstacion];
                        const estacion = findEstacionInGraph(graph, beforeEstacion, beforeEstacion);
                        if (estacion) {
                            newGraph[newkey].push(estacion);
                        }
                    }
                    newGraph[key] = graph[key]; // Copy existing key-value pairs                
                }
                // Update the original graph with the new graph structure
                for (const key in newGraph) {
                    console.log(`nuevo grafo ${key}`);
                    delete graph[key];
                    graph[key] = newGraph[key];
                }
                console.log(newGraph); // Log the updated graph for debugging
            }
            // If both are not found, log an error
            else {
                console.log(`Error: beforeEstacion '${beforeEstacion}' was not found in key '${newkey}'.`);
            }
        }
        else {
            console.log(`Error: newKey '${newkey}' not found in graph.`);
        }
    }
    else {
        // If the newkey exists, push the nuevaEstacion to the array
        if (graph[newkey]) {
            console.log(`tu ${newkey} ya existe`);
        }
        else {
            // If the newkey doesn't exist, create a new array with the nuevaEstacion
            graph[newkey] = [nuevaEstacion];
        }
    }
    console.log(graph); // Log the updated graph for debugging
}
function findEstacionInGraph(graph, key, estacionName) {
    // Check if the key exists in the graph
    if (!graph[key]) {
        console.log(`Error: Key '${key}' not found in the graph.`);
        return undefined;
    }
    // Use .find() to locate the specific object in the array by name (or another property)
    const estacion = graph[key].find(est => est.getNombre() === estacionName);
    if (!estacion) {
        console.log(`Error: Estacion with name '${estacionName}' not found in '${key}'.`);
        return undefined;
    }
    return estacion;
}
function moveNode(direction) {
    if (direction === 'up' && currentNodeIndex > 0) {
        currentNodeIndex--;
    }
    else if (direction === 'down' && currentNodeIndex < nodes.length - 1) {
        currentNodeIndex++;
    }
    updateUI();
}
// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    addEventListeners();
});
//# sourceMappingURL=app.js.map