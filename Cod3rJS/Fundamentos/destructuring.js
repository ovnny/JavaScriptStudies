/* destructuring é uma forma de extrair valores (atributos, objetos, 
  etc) de dentro de uma estrutura (objeto)
  Recurso do EcmaScript ES6
*/


const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000
  }
}

const {nome, idade} = pessoa // extrai da classe o atributo nome e idade
console.log(nome, idade) // Ana 5

/* tirar vários atributos de uma classe de uma vez e em uma mesma
 linha atribuindo-os à outras variáveis */

const {nome: n, idade:i } = pessoa
console.log(n, i) // Ana 5

const { sobrenome, bemHumorada = true} = pessoa
/* cria um valor padrão caso não exista um determinado método ou valor
dentro do objeto. exp: setar como "true"*/

console.log(sobrenome, bemHumorada) // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa

console.log(logradouro, numero, cep) // Rua ABC 1000 undefined