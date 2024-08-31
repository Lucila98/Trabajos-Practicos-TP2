import {leerArchivoComoString, escribirTextoEnArchivo} from './src/utils/fileUtils.js'
import {transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString} from './src/utils/transformUtils.js'
import {combinarDosArrays, combinarNArrays} from './src/apareo.js'

// leo los 4 archivos a memoria
let arch1 = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
let arch2 = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
let arch3 = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
let arch4 = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')

// preparo los 4 arrays a partir de los archivo leidos
const arrayNum1 = transformarStringEnArrayDeNumeros(arch1, ',')
const arrayNum2 = transformarStringEnArrayDeNumeros(arch2, ',')
const arrayImpares = transformarStringEnArrayDeNumeros(arch3, ',')
const arrayPares = transformarStringEnArrayDeNumeros(arch4, ',') 

// combino los primeros dos arrays
let arrayCombinado = combinarDosArrays(arrayNum1, arrayNum2)
//console.log(arrayCombinado)

// combino los cuatro arrays
let todosArrayComb = combinarNArrays([arrayNum1, arrayNum2, arrayImpares, arrayPares])
//console.log(todosArrayComb)

//guardo res
const rutaRes = './out/res1.txt'
let txt1 = transformarArrayDeNumerosAUnSoloString(arrayCombinado)
escribirTextoEnArchivo(rutaRes, txt1, false)

const rutaRes2 = './out/res2.txt'
let txt2 = transformarArrayDeNumerosAUnSoloString(todosArrayComb)
escribirTextoEnArchivo(rutaRes2, txt2, true) 

