// File: Estacion.ts



// Class Declaration
export class NodoEstacion {
  // Properties
  private nombre: string;
  private lineas: string[] ;
  private direccion: string;
  private horario: string;
  private extra1: string;
  private extra2: number;

  // Constructor
  constructor(nombre: string, lineas: string[], direccion: string, horario: string, extra1: string, extra2: number) {
    this.nombre = nombre;
    this.lineas = lineas;
    this.direccion = direccion;    
    this.horario = horario;    
    this.extra1 = extra1;    
    this.extra2 = extra2;  
     
  }

  // Methods
  public print(): string {
  
    return `nombre ${this.nombre}
    lineas ${this.lineas}
    direccion ${this.direccion}
    horario ${this.horario}
    extra1 ${this.extra1}
    extra2 ${this.extra2}`;
    
  }

  public getNombre(): string {
    return this.nombre
  }
}

// Export default (optional)
export default NodoEstacion;
