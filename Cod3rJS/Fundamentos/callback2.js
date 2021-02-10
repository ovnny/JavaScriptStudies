const notas = [ 7.7, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas) // [ 5.2, 3.6 ]
//________________________________________________________________________

// Com callback

notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2) // [ 5.2, 3.6 ]
//________________________________________________________________________

//Callback com arrow function
 
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3) //[ 5.2, 3.6 ]

/**
 * No caso acima, a função callback foi passada para o filter que irá executar a condição
 * 'nota < 7' a cada iteração no array 'notas[]'. Sem precisar criar um novo array,
 * sem construir um laço for nem iterar de maneira usual.
 * A função fica bem mais suscinta e bonita.
 */