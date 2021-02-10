        /**
         * Background de orientação à objeto
         * "this" é uma forma de referenciar o objeto de uma classe
         * Uma classe se comporta como um molde.
         * O "this" é uma referência para a estrutura padrão do objeto instanciado
         **/ 

        /**
         * O this pode variar de acordo com o "CONTEXTO LÉXICO ONDE FOI REFERENCIADO"
         * No browser, por exemplo, o this vai variar de acordo com o contexto global (window)
         * ou num contexto fechado (bloco de código)
         */

        /**
         * "Arrow function" - dois motivos para o surgimento:
         * sintaxe reduzida --> funções em uma linha ou sintaxe mais enxuta
         * Mas no caso do "this", quando dentro de uma arrow function, o objeto referenciado
         * ao "this" não varia nunca
         */
        /*
        ******************************************************
        ******************************************************
        ****O THIS VARIA DE ACORDO COM O CONTEXTO LÉXIMO *****
        ****EXCETO DENTRO DE UMA ARROW FUNCTION          *****
        ******************************************************
        ******************************************************
        */
 
    const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // Bom dia!
    }
 }
 pessoa.falar() //Bom dia!
 
 /**
  * Como no caso abaixo o this.saudacao foi passado para a variável "falar", o this 
  * do objeto criado no começo não mais está referenciando "saudação"('bom dia!")
  * mas, referencia para um endereço nullo ou undefined
  */
 
const falar = pessoa.falar
falar() // undefined - Conflito entre paradigmas funcional e OOP

//__________________________________________________________________________________
        
        /**
        ******************************************************
        ******************************************************
        ****O BIND É UM MÉTODO QUE AMARRA MÉTODOS DE UMA *****
        ****CLASSE E PODE SER ATRIBUÍDO À UMA ÚNICA VARIÁ*****
        ****VEL E, A PARTIR DESSE MOMENTO, O METODO PODE-*****
        ****RÁ SER ACESSADO A PARTIR DE QUALQUER LUGAR E *****
        ****TERÁ SUA RELAÇÃO GARANTIDA                   *****
        ******************************************************
        ******************************************************
        */

const cumprimentar = pessoa.falar.bind(pessoa)
cumprimentar() //Bom dia! --> agora está atrelado ao método "falar" do objeto "pessoa" acima