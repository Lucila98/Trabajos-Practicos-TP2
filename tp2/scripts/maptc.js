import fs from 'fs/promises';

export function maptc(){
    fs.readFile('./package.json', 'utf-8')
    .then(contenidoStr => {
        let contenidoObj
        try{
            contenidoObj = JSON.parse(contenidoStr)
        } catch(parseError){
            console.log(`Error al parsear el archivo ${parseError.message}`)
            throw parseError
        }

        return fs.stat('./package.json').then(stats => {
            const size = stats.size

            let info = {
                contenidoStr: contenidoStr,
                contenidoObj: contenidoObj,
                size: size
            }

            return fs.writeFile('info.txt', JSON.stringify(info, null, '\t'))
            .then(() => {
                console.log('Operación asincrónica con promesas completada')
            })
        })
    })

    .catch(error => {
        console.log(`Error en la operación ${error.message}}`)
    })
}