const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice}. ${nome}`)
}


/**
 * Ideia do callback:
 * uma função que chama outra função que irá 
 * disparar quando um determinado evento acontecer
 */

fabricantes.forEach(imprimir) /**0. Mercedes
                                 1. Audi
                                 2. BMW */

fabricantes.forEach(function (fabricante) {
    console.log(fabricante) /**Mercedes
                               Audi
                               BMW*/

})

fabricantes.forEach(fabricante => console.log(fabricante)) /**Mercedes
                                                              Audi
                                                              BMW */