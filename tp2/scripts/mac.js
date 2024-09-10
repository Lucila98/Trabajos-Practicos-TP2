import fs from 'fs'

export function mac(){
    fs.readFile('./package.json', 'utf-8', (error, contenidoStr) => {
        if(error) {
            console.log(`Error al leer el archivo: ${error.message}`)
            return 
        }
    

        let contenidoObj
        try {
            contenidoObj = JSON.parse(contenidoStr)
        } catch (parseError){
            console.log(`Error al parsear el archivo: ${parseError.message}`)
            return
        }

        fs.stat('./package.json', (statError, stats) => {
            if(statError){
                console.log(`Error al obtener estadísticas del archivo: ${statError.message}`)
                return 
            }
            const size = stats.size

            let info = {
                contenidoStr: contenidoStr,
                contenidoObj: contenidoObj,
                size: size
            }

            fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), (writeError) => {
                if(writeError){
                    console.log(`Error al escribir el archivo: ${writeErr.message}`)
                }
                console.log('Operación asincrónica con callbacks completada con éxito')
            })
        }) 
    }) 
}