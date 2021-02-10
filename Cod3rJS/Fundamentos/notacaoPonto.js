
/* A notação ponto acessa membros de um objeto e membros de uma
função
*/

console.log(typeof console) // object

const obj1 = {}
obj1.nome = 'Bola' 
obj1['nome'] = 'Bola2'

/* caso o objeto não exista, o js cria dinamicamente um atributo 
dentro do objeto e, caso exista, pode ser acessado com uso de [ ]
notações ponto são mais convenientes por serem enxutas
*/

function Obj(nome) {
  this.nome = nome
  this.exec = function() {
    console.log('Exec...')
  }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

/* 
A partir do "this" e usando a notação ponto, você pode criar tanto
funções quanto atributos que serão expostas pra fora da própria
função quando ela for instanciada.
Também acessa atributos visíveis(públicos) dentro de um objeto
a partir de um objeto a partir de um literal, outra função, etc
*/