// usando notação literal

const obj1 = {}

// Object em JS

console.log(typeof Object, typeof new Object) // function, object
const obj2 = new Object
console.log(obj2) // {}

// Função Construtora

function Produto(nome, preco, desc) {
    this.nome = nome // nome está publico para modificação fora do escopo do objeto
    // preco e desc estão privados

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }   // a partir desse momento nem preco e nem desc podem ser alterados pois só existem
}       // dentro do escopo da função. estão encapsulados só disponíveis dentro do objeto

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2899.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) // 6.7915, 2174.9925


// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7890, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario()) // 6838, 11020

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha) // [Object: null prototype] { nome: 'Ana' }

// Uma função famosa que retorna um Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) // Sou um JSON