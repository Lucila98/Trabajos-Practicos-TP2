import fs from 'fs/promises'

export async function mapaa() {
    try{
        const contenidoStr = await fs.readFile('./package.json', 'utf-8')

        let contenidoObj

        try{
            contenidoObj = JSON.parse(contenidoStr)
        } catch(parseError){
            console.log(`Error al paresar el archivo ${parseError.message}`)
            throw parseError
        }


        const stats = await fs.stat('./package.json')
        const size = stats.size

        let info = {
            contenidoStr: contenidoStr,
            contenidoObj: contenidoObj,
            size: size
        }


        await fs.writeFile('info.txt', JSON.stringify(info, null, '\t'))

        console.log('Operación asicrónica completada con éxito')
    } catch(error){
        console.log(`Error en la operación asincrónica ${error.message}`)
    }
}