console.log(soma(3, 5)) // função chamada antes de sua criação. Result: 8
console.log(sub(3, 5)) // sub is not defined
/**
 * function declaration:
 * Quando vc declara uma função, primeiro o interpretador ou browser carregam essa função
 * deixa ela preparada para só depois carregar o resto do código.
 * Prova disso é que podemos declarar essa função mesmo antes de ela ter sido criada
 * como no exemplo acima.*/ 

 function soma(x, y) {
    return x + y
}

/**
 * function expression:
 * O mesmo já não acontece com function expressions.
 * Se tentar usar antes da criação, o sistema vai crashear */ 

const sub = function (x, y) {
    return x - y
}

// function expression
const mult = function mult(x, y) {
    return x * y
}