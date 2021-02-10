/** As funções listadas abaixo tem a intenção de manipular, modificar e criar
 * novos objetos, transformar objetos em JSONs ou mesmo criar SQL queries através
 * de manipulação de objetos, seus atributos, valores e métodos.
 */

const pessoa = {
    nome: 'Rebeca',
    idade : 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // --> [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // --> [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)) // --> [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(e => { // nome: Rebeca
    console.log(`${e[0]}: ${e[1]}`)   // idade: 2
                                      // peso: 13 */
})

Object.entries(pessoa).forEach(([chave, valor]) => { // nome: Rebeca
    console.log(`${chave}: ${valor}`)                // idade: 2
                                                     // peso: 13 */ 
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // --> caso seja falso, o objeto não poderá ser enumerado por outros
    writable: false,  // métodos.
    value: '01/01/2019' // --> 01/01/2019(trava o valor e não deixa ser modificado)
})

pessoa.dataNascimento = '01/01/2017' // --> não sofrerá alteração pois teve a propriedade
console.log(pessoa.dataNascimento)   // 'writable:' definida para falso / como o freeze

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso', 'dataNascimento' ]



// assign() - ECMAScript 2015
const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4}

const objDestino = Object.assign(dest, obj1, obj2)

console.log(objDestino) // --> { a: 4, b: 2, c: 3 }