import { Lista } from '../interfaces/Lista'
const listaAdyacencia: Lista[] = [
    {
        "Nombre": "Auditorio",
        "neighbors": ["Periferico Norte",],
        "seq": 0
    },
    {
        "Nombre": "Periferico Norte",
        "neighbors": ["Dermatologico", "Auditorio", "MP Periferico Norte",],
        "seq": 0
    },
    {
        "Nombre": "Dermatologico",
        "neighbors": ["Atemajac", "Periferico Norte",],
        "seq": 0
    },
    {
        "Nombre": "Atemajac",
        "neighbors": ["Division del Norte", "Dermatologico",],
        "seq": 0
    },
    {
        "Nombre": "Division del Norte",
        "neighbors": ["Avila Camacho", "Atemajac"],
        "seq": 0

    },
    {
        "Nombre": "Avila Camacho",
        "neighbors": ["Mezquitan", "Division del Norte", "L3 Avila Camacho"],
        "seq": 0

    },
    {
        "Nombre": "Mezquitan",
        "neighbors": ["Refugio", "Avila Camacho",],
        "seq": 0

    },
    {
        "Nombre": "Refugio",
        "neighbors": ["Juarez", "Mezquitan",],
        "seq": 0

    },
    {
        "Nombre": "Juarez",
        "neighbors": ["Mexicaltzingo", "Refugio", "Juarez II",],
        "seq": 0

    },
    {
        "Nombre": "Mexicaltzingo",
        "neighbors": ["Washington", "Juarez",],
        "seq": 0

    },
    {
        "Nombre": "Washington",
        "neighbors": ["Santa Filomena", "Mexicaltzingo",],
        "seq": 0

    },
    {
        "Nombre": "Santa Filomena",
        "neighbors": ["Unidad Deportiva", "Washington",],
        "seq": 0

    },
    {
        "Nombre": "Unidad Deportiva",
        "neighbors": ["Urdaneta", "Santa Filomena",],
        "seq": 0

    },
    {
        "Nombre": "Urdaneta",
        "neighbors": ["18 de Marzo", "Unidad Deportiva",],
        "seq": 0

    },
    {
        "Nombre": "18 de Marzo",
        "neighbors": ["Isla Raza", "Urdaneta",],
        "seq": 0

    },
    {
        "Nombre": "Isla Raza",
        "neighbors": ["Patria", "18 de Marzo",],
        "seq": 0

    },
    {
        "Nombre": "Patria",
        "neighbors": ["España", "Isla Raza",],
        "seq": 0

    },
    {
        "Nombre": "España",
        "neighbors": ["Santuario Martires de Cristo Rey", "Patria",],
        "seq": 0

    },
    {
        "Nombre": "Santuario Martires de Cristo Rey",
        "neighbors": ["Periferico Sur", "España",],
        "seq": 0

    },
    {
        "Nombre": "Periferico Sur",
        "neighbors": ["Santuario Martires de Cristo Rey", "MP Periferico Sur",],
        "seq": 0

    },
    {
        "Nombre": "Juarez II",
        "neighbors": ["Plaza Universidad", "Juarez", "Guadalajara Centro"],
        "seq": 0

    },
    {
        "Nombre": "Plaza Universidad",
        "neighbors": ["San Juan de Dios", "Juarez II", "MC San Juan de Dios",],
        "seq": 0

    },
    {
        "Nombre": "San Juan de Dios",
        "neighbors": ["Belisario Domínguez", "Plaza Universidad",],
        "seq": 0

    },
    {
        "Nombre": "Belisario Domínguez",
        "neighbors": ["Oblatos", "San Juan de Dios",],
        "seq": 0

    },
    {
        "Nombre": "Oblatos",
        "neighbors": ["Cristobal de Oñate", "Belisario Domínguez",],
        "seq": 0

    },
    {
        "Nombre": "Cristobal de Oñate",
        "neighbors": ["San Andrés", "Oblatos",],
        "seq": 0

    },
    {
        "Nombre": "San Andrés",
        "neighbors": ["San Jacinto", "Cristobal de Oñate",],
        "seq": 0

    },
    {
        "Nombre": "San Jacinto",
        "neighbors": ["La Aurora", "San Andrés",],
        "seq": 0

    },
    {
        "Nombre": "La Aurora",
        "neighbors": ["Tetlan", "San Jacinto",],
        "seq": 0

    },
    {
        "Nombre": "Tetlan",
        "neighbors": ["La Aurora",],
        "seq": 0
    },
    {
        "Nombre": "Arcos de Zapopan",
        "neighbors": ["Periferico Belenes",],
        "seq": 0
    },
    {
        "Nombre": "Periferico Belenes",
        "neighbors": ["Mercado del Mar", "Arcos de Zapopan", "MP Periferico Belenes",],
        "seq": 0
    },
    {
        "Nombre": "Mercado del Mar",
        "neighbors": ["Zapopan Centro", "Periferico Belenes",],
        "seq": 0
    },
    {
        "Nombre": "Zapopan Centro",
        "neighbors": ["Plaza Patria", "Mercado del Mar",],
        "seq": 0
    },
    {
        "Nombre": "Plaza Patria",
        "neighbors": ["Circunvalacion Country", "Zapopan Centro",],
        "seq": 0
    },
    {
        "Nombre": "Circunvalacion Country",
        "neighbors": ["L3 Avila Camacho", "Plaza Patria",],
        "seq": 0
    },
    {
        "Nombre": "L3 Avila Camacho",
        "neighbors": ["La Normal", "Circunvalacion Country", "Avila Camacho",],
        "seq": 0
    },
    {
        "Nombre": "La Normal",
        "neighbors": ["Santuario", "L3 Avila Camacho",],
        "seq": 0
    },
    {
        "Nombre": "Santuario",
        "neighbors": ["Guadalajara Centro", "La Normal",],
        "seq": 0
    },
    {
        "Nombre": "Guadalajara Centro",
        "neighbors": ["Independencia", "Santuario", "Plaza Universidad"],
        "seq": 0
    },
    {
        "Nombre": "Independencia",
        "neighbors": ["Plaza de la Bandera", "Guadalajara Centro", "Bicentenario"],
        "seq": 0
    },
    {
        "Nombre": "Plaza de la Bandera",
        "neighbors": ["CUCEI", "Independencia",],
        "seq": 0
    },
    {
        "Nombre": "CUCEI",
        "neighbors": ["Revolucion", "Plaza de la Bandera",],
        "seq": 0
    },
    {
        "Nombre": "Revolucion",
        "neighbors": ["Río Nilo", "CUCEI",],
        "seq": 0
    },
    {
        "Nombre": "Río Nilo",
        "neighbors": ["Tlaquepaque Centro", "Revolucion",],
        "seq": 0
    },
    {
        "Nombre": "Tlaquepaque Centro",
        "neighbors": ["Lazaro Cardenas", "Río Nilo",],
        "seq": 0
    },
    {
        "Nombre": "Lazaro Cardenas",
        "neighbors": ["Central de Autobuses", "Tlaquepaque Centro",],
        "seq": 0
    },
    {
        "Nombre": "Central de Autobuses",
        "neighbors": ["Lazaro Cardenas",],
        "seq": 0
    },
    {
        "Nombre": "Mirador",
        "neighbors": ["Huentitan",],
        "seq": 0

    },
    {
        "Nombre": "Huentitan",
        "neighbors": ["Zoologico", "Mirador",],
        "seq": 0

    },
    {
        "Nombre": "Zoologico",
        "neighbors": ["Independencia Norte", "Huentitan",],
        "seq": 0

    },
    {
        "Nombre": "Independencia Norte",
        "neighbors": ["San Patricio", "Zoologico", "MP Independencia Norte",],
        "seq": 0

    },
    {
        "Nombre": "San Patricio",
        "neighbors": ["Igualdad", "Independencia Norte",],
        "seq": 0

    },
    {
        "Nombre": "Igualdad",
        "neighbors": ["Monumental", "San Patricio",],
        "seq": 0

    },
    {
        "Nombre": "Monumental",
        "neighbors": ["Monte Olivete", "Igualdad",],
        "seq": 0

    },
    {
        "Nombre": "Monte Olivete",
        "neighbors": ["Circunvalacion", "Monumental",],
        "seq": 0

    },
    {
        "Nombre": "Circunvalacion",
        "neighbors": ["Ciencias de la Salud", "Monte Olivete",],
        "seq": 0

    },
    {
        "Nombre": "Ciencias de la Salud",
        "neighbors": ["Juan alvarez", "Circunvalacion",],
        "seq": 0

    },
    {
        "Nombre": "Juan alvarez",
        "neighbors": ["Alameda", "Ciencias de la Salud",],
        "seq": 0

    },
    {
        "Nombre": "Alameda",
        "neighbors": ["MC San Juan de Dios", "Juan alvarez",],
        "seq": 0

    },
    {
        "Nombre": "MC San Juan de Dios",
        "neighbors": ["Bicentenario", "Alameda", "San Juan de Dios",],
        "seq": 0

    },
    {
        "Nombre": "Bicentenario",
        "neighbors": ["La Paz", "MC San Juan de Dios", "Independencia"],
        "seq": 0

    },
    {
        "Nombre": "La Paz",
        "neighbors": ["Niños Héroes", "Bicentenario",],
        "seq": 0

    },
    {
        "Nombre": "Niños Héroes",
        "neighbors": ["Agua Azul", "La Paz",],
        "seq": 0

    },
    {
        "Nombre": "Agua Azul",
        "neighbors": ["Ciprés", "Niños Héroes",],
        "seq": 0

    },
    {
        "Nombre": "Ciprés",
        "neighbors": ["Héroes de Nacozari", "Agua Azul",],
        "seq": 0

    },
    {
        "Nombre": "Héroes de Nacozari",
        "neighbors": ["Lazaro Cardenas", "Ciprés",],
        "seq": 0

    },
    {
        "Nombre": "Lazaro Cardenas",
        "neighbors": ["El Dean", "Héroes de Nacozari",],
        "seq": 0

    },
    {
        "Nombre": "El Dean",
        "neighbors": ["Zona Industrial", "Lazaro Cardenas",],
        "seq": 0

    },
    {
        "Nombre": "Zona Industrial",
        "neighbors": ["Lopez de Legazpi", "El Dean",],
        "seq": 0

    },
    {
        "Nombre": "Lopez de Legazpi",
        "neighbors": ["Clemente Orozco", "Zona Industrial",],
        "seq": 0

    },
    {
        "Nombre": "Clemente Orozco",
        "neighbors": ["Artes Plasticas", "Lopez de Legazpi",],
        "seq": 0

    },
    {
        "Nombre": "Artes Plasticas",
        "neighbors": ["Esculturas", "Clemente Orozco",],
        "seq": 0

    },
    {
        "Nombre": "Esculturas",
        "neighbors": ["Fray Angélico", "Artes Plasticas",],
        "seq": 0

    },
    {
        "Nombre": "Fray Angélico",
        "neighbors": ["Las Juntas", "Esculturas",],
        "seq": 0

    },
    {
        "Nombre": "Las Juntas",
        "neighbors": ["Fray Angélico", "L4, tlajotren"],
        "seq": 0

    },
    {
        "Nombre": "Carretera a Chapala",
        "neighbors": ["Las Pintas",],
        "seq": 0
    },
    {
        "Nombre": "Las Pintas",
        "neighbors": ["Artesanos", "Carretera a Chapala",],
        "seq": 0
    },
    {
        "Nombre": "Artesanos",
        "neighbors": ["Adolf Horn", "Las Pintas",],
        "seq": 0
    },
    {
        "Nombre": "Adolf Horn",
        "neighbors": ["Toluquilla", "Artesanos",],
        "seq": 0
    },
    {
        "Nombre": "Toluquilla",
        "neighbors": ["8 de Julio", "Adolf Horn",],
        "seq": 0
    },
    {
        "Nombre": "8 de Julio",
        "neighbors": ["San Sebastianito", "Toluquilla",],
        "seq": 0
    },
    {
        "Nombre": "San Sebastianito",
        "neighbors": ["MP Periferico Sur", "8 de Julio",],
        "seq": 0
    },
    {
        "Nombre": "MP Periferico Sur",
        "neighbors": ["Terminal Sur de Autobuses", "San Sebastianito", "Periferico Sur",],
        "seq": 0
    },
    {
        "Nombre": "Terminal Sur de Autobuses",
        "neighbors": ["ITESO", "MP Periferico Sur",],
        "seq": 0
    },
    {
        "Nombre": "ITESO",
        "neighbors": ["Lopez Mateos", "Terminal Sur de Autobuses",],
        "seq": 0
    },
    {
        "Nombre": "Lopez Mateos",
        "neighbors": ["Agrícola", "ITESO",],
        "seq": 0
    },
    {
        "Nombre": "Agrícola",
        "neighbors": ["El Briseño", "Lopez Mateos",],
        "seq": 0
    },
    {
        "Nombre": "El Briseño",
        "neighbors": ["Mariano Otero", "Agrícola",],
        "seq": 0
    },
    {
        "Nombre": "Mariano Otero",
        "neighbors": ["Miramar", "El Briseño",],
        "seq": 0
    },
    {
        "Nombre": "Miramar",
        "neighbors": ["Felipe Ruvalcaba", "Mariano Otero",],
        "seq": 0
    },
    {
        "Nombre": "Felipe Ruvalcaba",
        "neighbors": ["El Colli", "Miramar",],
        "seq": 0
    },
    {
        "Nombre": "El Colli",
        "neighbors": ["Chapalita Inn", "Felipe Ruvalcaba",],
        "seq": 0
    },
    {
        "Nombre": "Chapalita Inn",
        "neighbors": ["Parque Metropolitano", "El Colli",],
        "seq": 0
    },
    {
        "Nombre": "Parque Metropolitano",
        "neighbors": ["Ciudad Granja", "Chapalita Inn",],
        "seq": 0
    },
    {
        "Nombre": "Ciudad Granja",
        "neighbors": ["Ciudad Judicial", "Parque Metropolitano",],
        "seq": 0
    },
    {
        "Nombre": "Ciudad Judicial",
        "neighbors": ["Estadio Chivas", "Ciudad Granja",],
        "seq": 0
    },
    {
        "Nombre": "Estadio Chivas",
        "neighbors": ["Vallarta", "Ciudad Judicial",],
        "seq": 0
    },
    {
        "Nombre": "Vallarta",
        "neighbors": ["San Juan de Ocotan", "Estadio Chivas",],
        "seq": 0
    },
    {
        "Nombre": "San Juan de Ocotan",
        "neighbors": ["5 de Mayo", "Vallarta",],
        "seq": 0
    },
    {
        "Nombre": "5 de Mayo",
        "neighbors": ["Acueducto", "San Juan de Ocotan",],
        "seq": 0
    },
    {
        "Nombre": "Acueducto",
        "neighbors": ["Santa Margarita", "5 de Mayo",],
        "seq": 0
    },
    {
        "Nombre": "Santa Margarita",
        "neighbors": ["La Tuzanía", "Acueducto",],
        "seq": 0
    },
    {
        "Nombre": "La Tuzanía",
        "neighbors": ["MP Periferico Belenes", "Santa Margarita",],
        "seq": 0
    },
    {
        "Nombre": "MP Periferico Belenes",
        "neighbors": ["San Isidro", "La Tuzanía", "Periferico Belenes",],
        "seq": 0
    },
    {
        "Nombre": "San Isidro",
        "neighbors": ["Centro Cultural Universitario", "MP Periferico Belenes",],
        "seq": 0
    },
    {
        "Nombre": "Centro Cultural Universitario",
        "neighbors": ["Constitucion", "San Isidro",],
        "seq": 0
    },
    {
        "Nombre": "Constitucion",
        "neighbors": ["Tabachines", "Centro Cultural Universitario",],
        "seq": 0
    },
    {
        "Nombre": "Tabachines",
        "neighbors": ["La Cantera", "Constitucion",],
        "seq": 0
    },
    {
        "Nombre": "La Cantera",
        "neighbors": ["MP Periferico Norte", "Tabachines",],
        "seq": 0
    },
    {
        "Nombre": "MP Periferico Norte",
        "neighbors": ["El Batan", "La Cantera", "Periferico Norte",],
        "seq": 0
    },
    {
        "Nombre": "El Batan",
        "neighbors": ["La Experiencia", "MP Periferico Norte",],
        "seq": 0
    },
    {
        "Nombre": "La Experiencia",
        "neighbors": ["Rancho Nuevo", "El Batan",],
        "seq": 0
    },
    {
        "Nombre": "Rancho Nuevo",
        "neighbors": ["Lomas del Paraíso", "La Experiencia",],
        "seq": 0
    },
    {
        "Nombre": "Lomas del Paraíso",
        "neighbors": ["MP Independencia Norte", "Rancho Nuevo",],
        "seq": 0
    },
    {
        "Nombre": "MP Independencia Norte",
        "neighbors": ["Zoologico Guadalajara", "Lomas del Paraíso", "Independencia Norte",],
        "seq": 0
    },
    {
        "Nombre": "Zoologico Guadalajara",
        "neighbors": ["Barranca de Huentitan", "MP Independencia Norte",],
        "seq": 0
    },
    {
        "Nombre": "Barranca de Huentitan",
        "neighbors": ["Zoologico Guadalajara",],
        "seq": 0

    }
];

export default listaAdyacencia;