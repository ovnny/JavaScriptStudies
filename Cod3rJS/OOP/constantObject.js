// pessoa --> 123 {...}
const pessoa = { nome: 'Joao'}  // --> o objeto aponta para um mesmo endereço mas os atributos
pessoa.nome = 'Pedro'           // podem ser livremente modificados
console.log(pessoa)

/**
 * pessoa --> 456 --> {...}
 * pessoa = {nome: 'Ana' }
 */

 Object.freeze(pessoa) /*/ --> 
 existem métodos para impedir a modificação dos 
 dados e garantir a persistência* *

 pessoa.nome = 'Maria' // --> será ignorada pois foi congelada com o método 'freeze'
 console.log(pessoa.nome)