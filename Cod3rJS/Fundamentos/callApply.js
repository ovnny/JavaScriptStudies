function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

/**Call e Apply
 * Mais duas formas diferentes de chamar uma função
 * A diferença das duas é a forma de passar os parâmetros quando invocada.
 */

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // R$ 18
console.log(produto.getPreco()) // R$ 3900.65

const carro = { preco: 49990, desc: 0.2}
 
/**
  * console.log(getPreco.call(carro)) // R$ 39992
    console.log(getPreco.apply(carro)) // R$ 39992 
  */
console.log(getPreco.call( carro, 0.17, '$' )) // --> contexto, param1, param2, ...

console.log(getPreco.apply(carro, [0.17, '$'])) // --> contexto, array[param1, param2, ...]

// No caso acima, a primeira recebe parâmetros do contexto( ou global) e depois outros parâmetros
// No apply precisamos de passar o parâmetro do contexto( ou global) e deoois um array com
// outros parâmetros