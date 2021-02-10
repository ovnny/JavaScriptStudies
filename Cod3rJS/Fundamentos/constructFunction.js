/**
 * 
 */

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    
    /**
     * método público
     * 
     * CASO DESEJE CRIAR UM MÉTODO PRIVADO DENTRO DE UMA CLASSE, NÃO USAR 'this' mas sim,
     * 'const'
     */

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}
const uno = new Carro // criando um objeto sem parêntesis --> valor padrão da classe
uno.acelerar() // 5
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // passando parâmetros personalizados
ferrari.acelerar() // 20 +
ferrari.acelerar() // 20 +
ferrari.acelerar() // 20 +

console.log(ferrari.getVelocidadeAtual()) // 60

//_____________________________________________________________________________

console.log(typeof Carro) // function === (class)
console.log(typeof uno) // object