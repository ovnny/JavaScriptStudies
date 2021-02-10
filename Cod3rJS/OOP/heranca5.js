console.log(typeof String) // Function
console.log(typeof Array) // Function
console.log(typeof Object) // Function

/**Todos os três (String, Array e Object) tem um atributo .prototype 
 * O JavaScript permite criar novos atributos de funções a partir do uso de prototype:
 * Ex:
*/

String.prototype.reverse = function() {      // .reverse não existe dentro de String mas foi
    return this.split('').reverse().join('') // adicionado pelo método prototype
}
console.log('Vinicius Ricardo'.reverse()) // odraciR suiciniV

// outro exemplo:

Array.prototype.first = function() {
    return this[0] // o método criado 'first' não existe na função array 
}                   // criado a partir do protótipo da função, 
                    // retorna o primeiro item de um array

console.log([1, 2, 3, 4].first()) // 1
console.log(['a', 'b', 'c', 'd'].first()) // a


/**Inclusive, é possível sobrescrever funções nativas com esse método prototype
 * A SOBRESCRIÇÃO NÃO É RECOMENDADA POR MODIFICAR BRUSCAMENTE O FUNCIONAMENTO DA LINGUAGEM
 * ALGUNS MÉTODOS E FUNÇÕES DEPENDEM DE OUTROS.
 * SE EU FIZER ALTERAÇÕES POR EXEMPLO NA FUNÇÃO 'ToString' PODEREI CAUSAR MUDANÇAS EM CADEIA
 * EM TODOS OS MÉTODOS DEPENDENTES
 */

String.prototype.toString = function() {
    return 'Lascou tudo'
}

/** #################################
    #### NÃO MODIFICAR ATRIBUTOS ####  
    #### NEM FUNÇÕES NATIVAS!!!  ####
    ################################# */
    
console.log('Vinicius Ricardo'.reverse()) // odut uocsaL --> COMPORTAMENTO INESPERADO!!!

