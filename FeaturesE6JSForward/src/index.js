// const EntityBase = require('./entityBase')

// console.log(new EntityBase({
//     name: 'Vinicius Ricardo',
//     gender: "male",
// }).name) --> Mr. Vinicius Ricardo

// console.log(new EntityBase({
//     name: 'Erick Wendel',
//     gender: "female",
// }).#name) //--> Ms. Erick Wendel

// Se tentasse acessar o método privado como na linha 11, daria o seguinte erro:
// SyntaxError: Private field '#name' must be declared in an enclosing class

const assert = require("assert");
const Employee = require("./employee");
const Manager = require("./manager");
const Util = require("./util");

const GENDER = {
    male: "male",
    female: "female",
};

{
    const employee = new Employee({
        name: "XuxaDaSilva",
        gender: GENDER.female,
    });

    assert.throws(() => employee.birthYear, {
        message: "you must define age first.",
    });
    // CASO DE ERRO:
    // quando o programa tentar criar um novo Employee, gerará um erro por falta do
    // campo age no objeto acima. Essa mensagem de erro deverá ser exatamente igual àquela
    // informada no get BirthYear() na classe Base 'EntityBase'.
}

const CURRENT_YEAR = 2021; // --> âncora para referência e calculo de métodos de data e hora do sistema
Date.prototype.getFullYear = () => CURRENT_YEAR;

// Valor setado estaticamente pra evitar quebras de sistema na virada de cada ano.
// se não fosse assim, toda virada de ano quebraria todos os testes envolvendo data

{
    const employee = new Employee({
        name: "Joaozinho",
        age: 20,
        gender: GENDER.male,
    });
    // CASO DE SUCESSO:
    assert.deepStrictEqual(employee.name, "Mr. Joaozinho");
    assert.deepStrictEqual(employee.age, undefined);
    assert.deepStrictEqual(employee.gender, undefined);
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.4));
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

    const expectedBirthYear = 2001;
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

    //nao tem set, nao vai mudar!!
    employee.birthYear = new Date().getFullYear() - 80;
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

    employee.age = 80;
    assert.deepStrictEqual(employee.birthYear, 1941);

    console.log("\n ------- employee -------");
    console.log("employee.name", employee.name);
    console.log("employee.age", employee.age);
    console.log("employee.gender", employee.gender);
    console.log("employee.grossPay", employee.grossPay);
    console.log("employee.netPay", employee.netPay);
}

{
    const manager = new Manager({
        name: "Mariazinha",
        age: 18,
        gender: GENDER.female,
    });

    assert.deepStrictEqual(manager.name, "Ms. Mariazinha");
    assert.deepStrictEqual(manager.age, undefined);
    assert.deepStrictEqual(manager.gender, undefined);
    assert.deepStrictEqual(manager.birthYear, 2003);
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.4));
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));

    console.log("\n ------- manager -------");
    console.log("manager.name", manager.name);
    console.log("manager.age", manager.age);
    console.log("manager.gender", manager.gender);
    console.log("manager.grossPay", manager.grossPay);
    console.log("manager.netPay", manager.netPay);
}

// O NODEJS TEM UMA SUITE INTERNA DE DEBUG
