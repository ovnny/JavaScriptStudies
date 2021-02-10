// estratégia 1 para gerar um valor de parâmetro padrão
/* o operador ou serve como padronizador do parâmetro que será passado
 *para a função */

 function soma1(a, b, c) {
    a = a || 1 
    b = b || 1  
    c = c || 1
    return a + b + c
}
console.log(soma1(2, 4)) // 7
console.log(soma1()) // 3
console.log(soma1(5, 4, 3)) // 12
console.log(soma1("eu ", "gosto ", "assim ")) // eu gosto assim 
________________________________________________________________________________

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se o valor de "a" for undefined, a recebe 1
    b = 1 in arguments ? b : 1 // se o valor de "b" está nos argumentos "()" 
    c = isNaN(c) ? 1 : c // "c" é um numeral? senão, "c" = 1
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) // 3 5 6 0
________________________________________________________________________________

// valor padrão do ES2015(ES6)
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(5, 10, 20)) // 35
console.log(soma3(2, -1)) // 2
console.log(soma3()) // 3
console.log(soma3("eu ", "sei ", "lá! ")) // eu sei lá!
________________________________________________________________________________