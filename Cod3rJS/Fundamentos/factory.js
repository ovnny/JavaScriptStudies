/** Função Factory:
 * Função que retorna objeto(s)
 */


// Factory com valores estáticos
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

//______________________________________


// Factory com valores dinâmicos
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.99))