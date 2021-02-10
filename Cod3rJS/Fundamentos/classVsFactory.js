// Usando class(function) e constructor para criar uma classe
// Obrigatório o uso do 'this' em métodos públicos

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    
    falar() {
        console.log(`Meu nome é ${this.nome}`) 
    }
}

const p1 = new Pessoa('João')
p1.falar() // Meu nome é João

//__________________________________________________________________________

// Usando factory e arrow function para criar um objeto
// Não depende do 'this'
// o método é mais seguro pelo princípio do closure


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar() // Meu nome é João