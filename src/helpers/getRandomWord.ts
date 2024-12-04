let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'MANZANA',
    'PERRO',
    'GATO',
    'LINTERNA',
    'BOTELLA',
    'ESPEJO',
    'SILLA',
    'MESA',
    'LAPICERO',
    'CUADERNO',
    'MOCHILA',
    'CARPETA',
    'ZAPATO',
    'CAMISETA',
    'PANTALON',
    'RELOJ',
    'CALCETIN',
    'AVION',
    'BARCO',
    'BICICLETA',
    'TREN',
    'AUTOBUS',
    'PLATANO',
    'FRESA',
    'KIWI',
    'MELON',
    'SANDIA',
    'CEREZA',
    'UVA',
    'CASCADA',
    'MONTAÑA',
    'VALLE',
    'RÍO',
    'LAGO',
    'MAR',
    'OCEANO',
    'TIBURON',
    'BALLENA',
    'DELFIN',
    'PINGÜINO',
    'LEON',
    'ELEFANTE',
    'JIRAFA',
    'COCODRILO',
    'SERPIENTE',
    'ESCORPION',
    'DRAGON',
    'CASTILLO',
    'CIUDAD',
    'VIAJE',
    'PAISAJE',
    'FOTOGRAFIA',
    'CAMARA',
    'RADIO',
    'TELEVISOR',
    'ROBOT',
    'SATELITE',
    'PLANETA',
    'ASTEROIDE',
    'GALAXIA',
    'ESTRELLA',
    'COMETA',
    'METEORITO',
    'ESPACIO',
    'NUBE',
    'TRUENO',
    'RELAMPAGO',
    'TORMENTA',
    'HURACAN',
    'TERREMOTO',
    'VOLCAN',
    'CIELO',
    'SOL',
    'LUNA',
    'PLANTA',
    'FLOR',
    'ARBOL',
    'SEMILLA',
    'RAIZ',
    'HOJA',
    'FRUTA',
    'MADERA',
    'ARBUSTO',
    'JARDIN',
    'PAJARO',
    'MARIPOSA',
    'ABEJA',
    'HORMIGA',
    'ESCARABAJO',
    'MOSCA',
    'ARAÑA'
];



export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];
    
}