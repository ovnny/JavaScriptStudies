
// JSON --> Object
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}
// retorna um JSON a partir de objetos e evita tudo o que não for texto (funções, variáveis, etc)



// Object --> JSON
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
// { a: 1.7, b: 'string', c: true, d: {}, e: [] }