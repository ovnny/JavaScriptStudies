// Exemplo de callback NO BROWSER!!!

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}

/**
 * Quando registramos a função no console DO BROWSER, a função aguarda até o 
 * gatilho ser ativado(Click do mouse em qualquer lugar do 'body')
 * Nesse exemplo, o conceito de callback fica mais explícito
 * Callback são funções muito usadas no padrão 'Observer'  */