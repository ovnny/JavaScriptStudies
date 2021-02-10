const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/**Contexto Léxico de uma função:
 * Quando a função 'exec()' é declarada na linha 12, ela procura o contexto da sua criação
 * enxerga o 'valor = Local' e executa a função 'minhaFuncao()'.
 * Logo após, a 'minhaFuncao()' toma consciência do contexto onde ela foi criada e ao invés 
 * de imprimir a variável local 'valor'(linha 8), ela ao invés disso, imprimirá no console
 * a 'const valor'(linha 1), pois, no contexto onde 'minhaFuncao()' foi criada entenderá que
 * a variável 'valor' foi criada num contexto global relativo à criação dela mesma
 * 
 * ####################################################
 * ######     CONCEITO BEM COMPLICADO DE ENTENDER  ####
 * ######     PODE DAR MUUUUITO PROBLEMA           ####
 * ####################################################
 */