function Aula(nome, videID) {
    this.nome = nome
    this.videID = videID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)

console.log(aula1, aula2) 
//Aula { nome: 'Bem Vindo', videID: 123 } Aula { nome: 'Até Breve', videID: 456 }


// Simulando o new

function novo(f, ...params) {   // A função 'novo()' implementa por baixo dos panos
    const obj = {}              // a função 'new'(ECMAScript 2015)
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 123)

console.log(aula3, aula4)
//Aula { nome: 'Bem Vindo', videID: 123 } Aula { nome: 'Até Breve', videID: 456 }