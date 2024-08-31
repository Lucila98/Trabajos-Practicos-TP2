/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
export function combinarDosArrays(arrA, arrB) {
    const res = []
    let i = 0
    let j = 0

    while(i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]){
            if (res.length === 0 || res[res.length -1] !== arrA[i]){
                res.push(arrA[i])
            }
            i++
        } else if(arrA[i] > arrB[j]){
            if(res.length === 0 || res[res.length -1] !== arrB[j]){
               res.push(arrB[j]) 
            }
            j++
        } else {
            if(res.length === 0 || res[res.length -1] !== arrA[i]){
                res.push(arrA[i])
            }
            i++
            j++
        }
    }

    while (i < arrA.length){
        if (res.length === 0 || res[res.length -1] !== arrA[i]){
            res.push(arrA[i])
        }
        i++
    }

    while (j < arrB.length){
        if (res.length === 0 || res[res.length -1] !== arrB[j]){
            res.push(arrB[j])
        }
        j++
    }

    return res
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
export function combinarNArrays(arrs) {
    if (arrs.length == 0) return []
    if (arrs.length == 1) return arrs[0]

    let res = arrs[0]

    for (let i = 1; i < arrs.length; i++){
        res = combinarDosArrays(res, arrs[i])
    }

    return res
}

// exportar ambas funciones