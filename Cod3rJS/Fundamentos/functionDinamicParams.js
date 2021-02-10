function soma() {
    let soma = 0
    for (i in arguments) {      // arguments é um array que recebe valores dinamicamente
        soma += arguments[i]
    }
    return soma
}

console.log(soma(5, 23, 47, 78)) // 153
console.log(soma(1, 2, 3, 4, 5)) // 15
console.log(soma())              // 0