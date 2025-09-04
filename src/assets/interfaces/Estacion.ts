// Location.ts
export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Estacion {
    Nombre: string;
    Municipio: string;
    Conexion: string;
    Coordenadas: Coordinates;
    Linea: string;
}

export interface Lista{
    Nombre: string,
    neighbors: string[]
    seq: number
}



