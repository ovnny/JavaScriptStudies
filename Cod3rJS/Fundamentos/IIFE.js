/**IIFE --> Immediately Invoked Function Expression 
 * 
*/

(function() {
    console.log('Será executado na hora!') // Será executado na hora!
    
    console.log('Fpge dp escopo mais abrangente!') // Fpge dp escopo mais abrangente!
})() // --> Função sem nome que pode receber outras funções, arrow functions e this classes, métodos, etc.
// forma inteligente de evitar o escopo global. É preciso invocá-la com o '()' no final da 
// sentença. Obs: Ela começa envolta em parêntesis.