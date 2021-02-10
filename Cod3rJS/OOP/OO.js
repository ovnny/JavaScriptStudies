// CÓDIGO NÃO EXECUTÁVEL

/**PRINCÍPIOS OO:
 * 
 *  1. Abstração --> forma de representação de um objeto do mundo real nos contextos e
 * nas necessidades do software(Domain).
 * 
 *  2. Encapsulamento --> atributos escondidos no objeto com apresentação de uma interface
 * lógica e intuitiva. Um processo externo não precisa saber como um determinado objeto 
 * processa os dados, só usar a interface. Ajuda no desacoplamento do código e na inversão
 * e injeção de dependência.
 * 
 *  3. Herença(prototype) --> objetos filhos que recebem atributos de um objeto pai. O JS
 * só permite herença de um atributo mas um pai pode ter outro pai, indefinidamente.
 * Ex: Classificação do reino animal: Animais > Mamíferos/Anfíbios/Aves > cachorro/sapo/colibri
 *  
 *  4. Polimorfismo --> 
 */

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'   // podemos referenciar um atributo ao objeto
produto.preco = 220                        // com a notação de colchetes []
console.log(produto) // { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }

delete produto.preco
delete produto['marca do produto']
console.log(produto) // { nome: 'Cadeira' }

//_______________________________________________________________________________________

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'R. ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro) /**
 {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: { logradouro: 'R. ABC', numero: 1000 }
  },
  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
  calcularValorSeguro: [Function: calcularValorSeguro] */

delete carro.condutores
console.log(carro) /** deletou a árvore relacionada aos condutores e todos os elementos filhos
  {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: { logradouro: 'R. ABC', numero: 1000 }
  },
  calcularValorSeguro: [Function: calcularValorSeguro]
} */

delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro) /**
{
  modelo: 'A4',
  valor: 89000,
  proprietario: { nome: 'Raul', idade: 56 }
} */
console.log(carro.condutores) // undefined --> caso o atributo ou método não exista