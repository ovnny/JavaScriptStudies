// Cadeia de prtótipo (prototype chain)
// a palavra reservada 'super', como o 'this', referencia ao protótipo


Object.prototype.attr0 = '0' // cadeia de protótipo de cima para baixo
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, pai.attr2, avo.attr1) // 0 A B A

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h` 
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: '324' // shadowing (sobrescreve velMax de carro{})
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // { modelo: 'F40', velMax: '324' }
console.log(volvo) // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100) 
console.log(volvo.status()) /** V40: 100Km/h de 200Km/h --> 
volvo chama a função 'status()' contina na sua própria estrutura, pois é o método mais próximo*/ 

ferrari.acelerarMais(300)
console.log(ferrari.status()) /**  300Km/h de 324Km/h -->
ferrari chama a função status do pai, no caso, o objeto carro{}*/

/**
 * '__proto__' serve para referenciar um protótipo à um objeto de forma literal > Ex:
 * const Obj1 = { atributo: 1 } --> const Obj2 = { __prototype: Obj1 } === atributo: 1
 * 
 * Object.setPrototypeOf(Obj2, Obj1) é uma função que faz a mesma coisa que prototype.
 * Estabelece uma relação de protótipo entre filho e pai(herança)
 * o primeiro argumento será o objeto a herdar (filho, pai) respectivamente.
 */