const sequencia = {
    _valor: 1, // --> o '_' antes da chave é uma convenção para acesso interno somente
    
    get valor() { return this._valor++ },

    set valor(valor) {
        if (valor > this._valor) {  // --> protegendo os dados com uma estrutura de controle
            this._valor = valor     // só vai pra frente. Usar em históricos de compra por 
        }                           // exemplo. Número de compras, coisa que não decrescem
    }
}

console.log(sequencia.valor, sequencia.valor) // 1, 2