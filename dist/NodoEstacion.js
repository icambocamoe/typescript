// File: Estacion.ts
// Class Declaration
export class NodoEstacion {
    // Constructor
    constructor(nombre, lineas, direccion, horario, extra1, extra2) {
        this.nombre = nombre;
        this.lineas = lineas;
        this.direccion = direccion;
        this.horario = horario;
        this.extra1 = extra1;
        this.extra2 = extra2;
    }
    // Methods
    print() {
        return `nombre ${this.nombre}
    lineas ${this.lineas}
    direccion ${this.direccion}
    horario ${this.horario}
    extra1 ${this.extra1}
    extra2 ${this.extra2}`;
    }
    getNombre() {
        return this.nombre;
    }
}
// Export default (optional)
export default NodoEstacion;
//# sourceMappingURL=NodoEstacion.js.map