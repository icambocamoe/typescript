import l1 from './assets/objects/l1.js';
import l2 from './assets/objects/l2.js';
import l3 from './assets/objects/l3.js';
import mc from './assets/objects/mc.js';
import mp from './assets/objects/mp.js';
import { Coordinates, Estacion } from './assets/interfaces/Estacion';
import listaAdyacencia from './assets/objects/adjacentList.js';
import { Lista } from './assets/interfaces/Lista'
/*import linea1 from './assets/db/l1.json'; 
import linea2 from './assets/db/l2.json'; 
import linea3 from './assets/db/l3.json'; 
import linea4 from './assets/db/mc.json'; 
import linea5 from './assets/db/mp.json'; 
const l1: Estacion[] = linea1;
const l2: Estacion[] = linea2;
const l3: Estacion[] = linea3;
const mc: Estacion[] = linea4;
const mp: Estacion[] = linea5;*/

// Bubble sort function

function bubbleSort(arr: Estacion[], key: keyof Estacion): Estacion[] {
  const n = arr.length;
  let sortedArray = [...arr]; // Create a copy of the original array

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare and swap if needed
      if (sortedArray[j][key] > sortedArray[j + 1][key]) {
        // Swap the elements
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
      }
    }
  }
  return sortedArray;
}


// Insertion sort algorithm based on given key
function insertionSort(arr: Estacion[], key: keyof Estacion): Estacion[] {
  // Create a copy of the array to avoid mutating the original array
  const sortedArr = [...arr];

  for (let i = 1; i < sortedArr.length; i++) {
    const current = sortedArr[i];
    let j = i - 1;

    // Check if the current key is a number or string and handle sorting
    while (j >= 0 && sortedArr[j][key] > current[key]) {
      sortedArr[j + 1] = sortedArr[j];
      j--;
    }
    sortedArr[j + 1] = current;
  }

  return sortedArr;
}


function selectionSort(arr: Estacion[], key: keyof Estacion): Estacion[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j][key] < arr[minIndex][key]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}


function mergeSort(arr: Estacion[], key: keyof Estacion): Estacion[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle), key);
  const right = mergeSort(arr.slice(middle), key);

  return merge(left, right, key);
}


function merge(left: Estacion[], right: Estacion[], key: keyof Estacion): Estacion[] {
  let sortedArray: Estacion[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i][key] < right[j][key]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // Collect remaining elements
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}

function quickSort(arr: Estacion[], key: keyof Estacion): Estacion[] {
  let sortedArray = [...arr]; // Create a copy of the original array
  let stack: [number, number][] = []; // Stack to keep track of low and high indices

  stack.push([0, sortedArray.length - 1]);

  function partition(low: number, high: number): number {
    let pivot = sortedArray[Math.floor((low + high) / 2)][key];
    let i = low - 1;
    let j = high + 1;

    while (true) {
      do {
        i++;
      } while (sortedArray[i][key] < pivot);

      do {
        j--;
      } while (sortedArray[j][key] > pivot);

      if (i >= j) return j;

      // Swap elements
      [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
    }
  }

  while (stack.length > 0) {
    const [low, high] = stack.pop()!;

    if (low < high) {
      let partitionIndex = partition(low, high);

      // Push the left and right partitions onto the stack
      stack.push([low, partitionIndex]);
      stack.push([partitionIndex + 1, high]);
    }
  }

  return sortedArray;
}

const combinedDataset: Estacion[] = [...l1, ...l2, ...l3, ...mc, ...mp];
const DictList = {
  "L1": l1,
  "L2": l2,
  "L3": l3,
  "MP": mp,
  "MC": mc,
}
const sortedByName = quickSort(combinedDataset, 'Nombre');

const itemsPerPage = 50; // Number of items to display per page
let currentPage = 1;

const uniqueStations = new Set<string>();
listaAdyacencia.forEach(station => {
  uniqueStations.add(station.Nombre);

});
const vertices = Array.from(uniqueStations);
const size = vertices.length;
const adjacencyMatrix: number[][] = Array(size).fill(null).map(() => Array(size).fill(0));

function displayMatrix(): void {
  //console.log(size, vertices)
  listaAdyacencia.forEach((item) => {
    const rowIndex = vertices.indexOf(item.Nombre);
    //console.log(`Nombre: ${item.Nombre}`);
    //console.log('Neighbors:');

    item.neighbors.forEach((neighbor) => {
      let split: string[] = [];
      let colIndex;
      if (neighbor.includes(',')) {
        split = neighbor.split(',');

        colIndex = vertices.indexOf(split[1]);
        //console.log(`- ${split[1]}`);
        if (colIndex !== -1) { adjacencyMatrix[rowIndex][colIndex] = 1; }
      } else {

        colIndex = vertices.indexOf(neighbor);
        //console.log(`- ${neighbor}`);
        if (colIndex !== -1) { adjacencyMatrix[rowIndex][colIndex] = 1; }
      }
    });

  });
  const matrixHTML = generateMatrixHTML(adjacencyMatrix, vertices);
  const matrixContainer = document.getElementById('matrixContainer') as HTMLElement;
  matrixContainer.innerHTML = matrixHTML;
  //console.log(adjacencyMatrix)
}


function generateMatrixHTML(matrix: number[][], vertices: string[]): string {
  let html = `
    <table class="min-w-full border-collapse border border-gray-300 shadow-lg">
      <thead>
        <tr class="bg-gray-200 sticky top-0 z-10">
          <th class="p-2 border border-gray-300 text-gray-700 bg-gray-200">Station</th>
          ${vertices.map(vertex => `<th class="p-2 border border-gray-300 text-gray-700">${vertex}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
  `;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    html += `<tr class="even:bg-gray-100 odd:bg-white">`;
    html += `<th class="p-3 border border-gray-300 text-gray-700 bg-gray-200 sticky left-0 z-10">${vertices[i]}</th>`; // First column with station name
    for (let cell of row) {
      const cellStyle = cell === 1 ? 'bg-yellow-300 font-bold' : 'text-gray-800';
      html += `<td class="p-3 border border-gray-300 text-center ${cellStyle}">${cell}</td>`;
    }
    html += `</tr>`;
  }
  html += `
      </tbody>
    </table>
  `;
  return html;
}

// Function to display items on the current page
function displayItems(): void {
  const itemsContainer = document.getElementById('itemsContainer') as HTMLElement;
  itemsContainer.innerHTML = ''; // Clear previous items

  // Calculate start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the sorted dataset for the current page
  const itemsToDisplay = sortedByName.slice(startIndex, endIndex);

  // Display items
  itemsToDisplay.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
            <strong>Nombre:</strong> ${item.Nombre}<br>
        `;
    itemsContainer.appendChild(itemDiv);
  });

  // Update button states
  const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;
  const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = endIndex >= sortedByName.length;
}


function bfsShortestPath(startNode: string, endNode: string, graph: Lista[]): string[] | null {
  const queue: string[][] = [[startNode]];
  const visited: Set<string> = new Set();

  console.log(queue)
  while (queue.length > 0) {
    console.log(queue)
    const path = queue.shift()!;
    //console.log(path)
    const currentNode = path[path.length - 1];

    if (currentNode === endNode) {
      return path;
    }

    if (!visited.has(currentNode)) {
      visited.add(currentNode);

      const neighbors = graph.find(node => node.Nombre === currentNode)?.neighbors || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          const newPath = path.concat(neighbor);
          queue.push(newPath);
        }
      }
    }
  }

  return null; // No path found
}

// Function to handle next page
function nextPage(): void {
  if ((currentPage - 1) * itemsPerPage + itemsPerPage < sortedByName.length) {
    currentPage++;
    displayItems();
  }
}

// Function to handle previous page
function prevPage(): void {
  if (currentPage > 1) {
    currentPage--;
    displayItems();
  }
}

// Event listeners for pagination buttons
document.getElementById('prevBtn')!.addEventListener('click', prevPage);
document.getElementById('nextBtn')!.addEventListener('click', nextPage);


// Initial display
displayItems();
displayMatrix();

// Function to populate a dropdown with options
function populateDropdown(dropdownId: string, data: Lista[]): void  {
  const dropdown = (document.getElementById(dropdownId)as HTMLInputElement);
  data.forEach(item => {
      const option = document.createElement("option");
      option.value = item.Nombre;
      option.textContent = item.Nombre;
      dropdown.appendChild(option);
  });
}

// Populate source and destination dropdowns
populateDropdown("source", listaAdyacencia);
populateDropdown("destination", listaAdyacencia);

// Event listener for the "Find Path" button
document.getElementById("findPath")?.addEventListener("click", () => {
  const source = (document.getElementById("source") as HTMLInputElement).value;
  const destination = (document.getElementById("destination") as HTMLInputElement).value;

  if (source && destination) {
    console.log(source, destination)
    const shortestPath = bfsShortestPath(source, destination, listaAdyacencia);
    const resultElement = document.getElementById("result");
    if (!resultElement) {
      console.error("Result element is not found in the DOM.");
      return;
    }
    if (shortestPath) {
      resultElement.textContent = `Shortest path: ${shortestPath.join(" -> ")}`;
      // Array of coordinates for bus stations
     const busStations = (shortestPath?.map(stationName => {
      const station = combinedDataset.find(estacion => estacion.Nombre === stationName);

      // Return the coordinates only if the station is found, otherwise null
      return station
        ? { lat: station.Coordenadas.latitude, lng: station.Coordenadas.longitude }
        : null;
    }).filter((station): station is { lat: number, lng: number } => station !== null)) || [];
    // Initialize the map and add markers for bus stations
    // Expose initMap function globally for Google Maps API callback
    initMap(busStations);
    } else {
      resultElement.textContent = "No path found between the specified locations.";
    }
     
  } else {
    alert("Please enter both source and destination locations.");
  }
});

// Function to draw a path between the coordinates using Directions API
function drawPath(map: google.maps.Map, stations: google.maps.LatLngLiteral[]): void {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
  // Convert each station (LatLngLiteral) to google.maps.LatLng for waypoints
  const waypoints: google.maps.DirectionsWaypoint[] = stations.slice(1, -1).map((station) => ({
    location: new google.maps.LatLng(station.lat, station.lng),
    stopover: true,
  }));
  // Set up the route request
  const request: google.maps.DirectionsRequest = {
    origin: stations[0],
    destination: stations[stations.length - 1],
    waypoints: waypoints,
    travelMode: google.maps.TravelMode.TRANSIT,

  };

  // Get and render the route
  directionsService.route(request, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    } else {
      console.error("Error fetching directions:", status);
    }
  });
}
type Coordenadas = {
  lat: number;
  lng: number;
};

function initMap(busStations: Coordenadas[]): void {
  if (!busStations) {
    console.error("Result element is not found in the DOM.");
    return;
  }
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 12,
    center: busStations[0], // Center map on the first station
  });

  // Add markers for each bus station
  busStations.forEach((station) => {
    new google.maps.Marker({
      position: station,
      map,
    });
  });

  // Call function to draw path between bus stations
  drawPath(map, busStations);
}


(window as any).initMap = initMap;