import fs from 'fs';

export function ms(){
    try{
        const contenidoStr = fs.readFileSync('./package.json', 'utf-8');
        const contenidoObj = JSON.parse(contenidoStr);
        const stats = fs.statSync('./package.json');
        const size = stats.size;

        let info = {
            contenidoStr: contenidoStr,
            contenidoObj: contenidoObj,
            size: size
          };

          fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'));
    
        } catch(error){
        console.log(`Error en la operación sincrónica ${error.message}`)
        }
        console.log('Operación sincrónica completada con éxito')
}
