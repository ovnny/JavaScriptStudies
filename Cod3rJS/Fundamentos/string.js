/*const nome = "Vinicius"

console.log(typeof(nome.charAt(10))) // type: string, value = ""
console.log(nome.charAt(5)) // i
console.log(nome.charCodeAt(3)) // 105
console.log(nome.indexOf('4')) // -1
console.log(nome.substring(1)) // inicius
console.log(nome.substring(0, 6)) // Vinici

// transformar string em array
nomes = 'Ana,Maria,Pedro'
nomesNovo = nomes.split(',')
blob = 'anamariapedrobento'
console.log(nomes, typeof(nomes)) // Ana,Maria,Pedro "string"
console.log(nomesNovo, typeof(nomesNovo)) // [ 'Ana', 'Maria', 'Pedro' ] "object"
console.log(nomesNovo[1]) // Maria
console.log(blob.split(',')) // [ 'anamariapedrobento' ]
*/

const nome2 = 'Rebeca'
const concatenete = 'Olá ' + nome2 + '!'
console.log(concatenete) // Olá Rebeca!

const template = `
  Olá
  ${nome2}!`

console.log(concatenete, template)  // Olá Rebeca! 
                                    /*  Olá
                                        Rebeca! */


  