console.log(typeof Object) // function
console.log(typeof new Object) // object

const Cliente = function() {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object

class Produto {}  // ES 2015 (ES6)
console.log(typeof Produto) // function
console.log(typeof new Produto()) // object

/* 
Classes no JS são sintatic sugar para definição de função
Caso vc instancie essa função com o método 'new', essa função se transforma
em um objeto.
objetos no js são instanciados por função
Caso seja referenciado um objeto literal com a = {} <-- (chave e valor), 
teremos uma instância de objeto diretamente.
A função seria como um 'molde' de objetos.
*/ 