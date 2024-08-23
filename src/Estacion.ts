// File: Estacion.ts



// Class Declaration
export class Estacion {
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
  public print(): void {
    console.log("Estacion")
    console.log("nombre "+this.nombre)
    console.log("lineas "+this.lineas)
    console.log("direccion "+this.direccion)
    console.log("horario "+this.horario)
    console.log("extra1 "+this.extra1)
    console.log("extra2 "+this.extra2 )
    console.log("******************" )
  }

  public getNombre(): String {
    return this.nombre
  }
}

// Export default (optional)
export default Estacion;
