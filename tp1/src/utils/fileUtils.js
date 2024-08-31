import fs from 'fs'

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
export function leerArchivoComoString(ruta) {
    let datos = fs.readFileSync(ruta, 'utf-8')
    return datos
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
export function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    if (fs.existsSync(ruta)){
        fs.writeFileSync(ruta, texto)
    } else if(shouldCreateIfNotExists){
        fs.writeFileSync(ruta, texto)
    } else{
        throw new Error('El archivo no existe')
    }
}

// exportar ambas funciones