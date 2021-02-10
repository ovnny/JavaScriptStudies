
/**Closure(contexto léxico):
 * É o escopo criado quando uma função é declarada.
 * Esse escopo permite a função acessar e manipular variáveis externas à função
 */

 const x = 'Global'

 function fora() {
     const x = 'Local'
     function dentro() {
         return x
     }
     return dentro
 }

 const minhaFuncao = fora()
 console.log(minhaFuncao()) // Local


 // Ela vai imprimir a variável Local pois ela foi criada nesse contexto (dentro de 'fora()')