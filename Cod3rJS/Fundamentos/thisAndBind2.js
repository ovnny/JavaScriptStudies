function Pessoa() {
    this.idade = 0

 /**
 * No caso abaixo, o 'this.idade' não está se referindo ao objeto acima("Pessoa"), pois
 * ele foi usado dentro da função 'setInterval'. Quando um objeto é criado("new Pessoa"),
 * o 'this' aponta para a função que recebe como parâmetro uma função anônima e um intervalo
 * de tempo '1000'. Nesse caso, o this aponta para nada.
 */
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

//new Pessoa /* --> RESULTADO: NaN até o infinito*/

//_______________________________________________________________________________

function Pessoa2() {
    this.idade2 = 0

    /**
     * No caso abaixo, usando o 'bind', faz com que o this realmente aponte para Pessoa2
     */

    setInterval(function() {
        this.idade2++
        console.log(this.idade2)
    }.bind(this), 1000)
}

//new Pessoa2 /* --> RESULTADO: 1... 2... 3... até o infinito
//_______________________________________________________________________________

function Pessoa3() {
    this.idade3 = 0

    const self = this // variável declarada no escopo da classe 'Pessoa3'
    
    /**
     * Como atribuímos o valor de 'this' à variável 'self', ela será constante a partir
     * de agora e poderemos referenciá-la fora do escopo de 'Pessoa3' abaixo.
     */


    setInterval(function() {
        self.idade3++
        console.log(self.idade3)
    }, 1000)
}

new Pessoa3 // RESULTADO: 1... 2... 3... até o infinito