// Object.preventExtensions


const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto)) // Extensível: false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// Object.seal


const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Selado: true

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 } --> o objeto selado não pode sofrer
// inclusões nem exclusões mas os valores já presentes podem ser alterados


// Object.freeze = selado + valores constantes