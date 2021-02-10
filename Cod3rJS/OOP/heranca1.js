// uma variavel só pode herdar de um elemento pai
// herança JavaScript baseada em protótipo
// referência mais próxima --> pode ser do próximo objeto na cadeia de herança


const ferrari = {
    mode: 'F40',
    velMax: 324
}

const volvo = {
    modelo: ' V40',
    velMax: 200
}

console.log(ferrari.__proto__)                      // [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype)   // true
console.log(Object.prototype.__proto__) // null

function MeuObjeto() {
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
}
MeuObjeto() // function function
            // [Object: null prototype] {} {}

