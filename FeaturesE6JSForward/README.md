# Features from E6js forward

## Palavras chave:

* extends
* static
* objectHenritance

JavaScript precisa do index.js para chamar todos os outros módulos. Main ou Core do projeto

### Criando a EntityBase --> classe base(coreDomain)

Todo objeto criado a partir da classe EntityBase, terá que passar suas propriedades via construtor --> name, age, gender.

As propriedades não poderão ser acessadas por fora do objeto e assim serão utilizados os modificadores de acesso(#propriedadeDaClasse).
Desse modo, haverá uma DISTINÇÃO ENTRE AS VARIÁVEIS PRIVADAS DA CLASSE E O RETORNO DESSAS VARIÁVEIS PELOS MÉTODOS DA CLASSE.

get name() {

} retornará o valor de EntityBase.name, mas o valor intrínseco da variável só poderá ser acessada pela dentro da própria classe. Métodos privados servem para controlar acesso de dados
por métodos que retornarão uma cópia do valor e não o valor em si.
receberíamos o seguinte erro:

console.log(new EntityBase({
     name: 'Erick Wendel',
     gender: "female",
 }).#name)

SyntaxError: Private field '#name' must be declared in an enclosing class **"in line 27"



### Criando Employee --> classe concreta()

Classe que extende as propriedades da classe base. Employee herda tudo de EntityBase só que cada uma das classes criadas poderão ter sua própria especificidade.

No caso do Employee, terá além de todos os métodos construtores herdados, terá o atributo static '#TAXES_PERCENTUAL' de 20% e um #grosspay de 5000.40. getters e setters poderão ser criados para os novos atributos de cada classe criada.

    index --> EntityBase --> Employee --> Util


index.js: 

Usando o assert() para tratar erros em testes automatizados
Tests for deep equality between the actual and expected parameters. Consider using assert.deepStrictEqual() instead. assert.deepEqual() can have surprising results.
Deep equality means that the enumerable "own" properties of child objects are also recursively evaluated by the following rules.

util.js:
Carrega métodos e funções que serão utilizados em todo o sistema. Muito comumente chamado de 'helpers.js'

#### Sobre o assert.deepStrictEqual:

Se um determinado valor não tem um método acessor(get or set), o parâmetro de comparação do assert será 'undefined'.

    . Primitive values are compared using the SameValue Comparison, used by Object.is().
    . Type tags of objects should be the same.
    . [[Prototype]] of objects are compared using the Strict Equality Comparison.
    . Only enumerable "own" properties are considered.
    . Error names and messages are always compared, even if these are not enumerable properties.
    . Enumerable own Symbol properties are compared as well.
    . Object wrappers are compared both as objects and unwrapped values.
    . Object properties are compared unordered.
    . Map keys and Set items are compared unordered.
    . Recursion stops when both sides differ or both sides encounter a circular reference.
    . WeakMap and WeakSet comparison does not rely on their values. See below for further details.