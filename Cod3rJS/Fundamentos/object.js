<<<<<<< HEAD
/*const produto1 = {}
produto1.nome = "Celular Ultra Mega"
produto1.preco = 4998.90

console.log(produto1)
*/





=======
const produto1 = {} // criação de objeto literal
produto1.nome = "Celular Ultra Mega"
produto1.preco = 4998.90

//objeto é uma coleção de grupos com chave e valor
//usando notação colchete:
//obs: a chave pode ter espaços em branco '\0'
//atribuição dinâmica abaixo
produto1['Desconto Legal'] = 0.40 // evitar atributos com espaço: má prática

console.log(produto1)

const producto2 = {
    nome: "Camisa Polo",
    preço: 79.90,
    obj: {              //objeto dentro de outro objeto
        blabla: 1,      //um objeto interno pode ter o mesmo nome do externo
        obj: {          //diferentes escopos
            blabla: 2
        }
    }
}
console.log(producto2)
>>>>>>> 0fa676d (voltando do teste da zup. Continuando os estudos de JS)
