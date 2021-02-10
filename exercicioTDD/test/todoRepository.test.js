const { describe, it, before, afterEach, } = require('mocha')
const { expect } = require('chai')
const TodoRepository = require('../src/todoRepository')
const { createSandbox } = require('sinon')

describe('todoRepository', () => {
    let todoRepository
    let sandbox
    
    before(() => {
        todoRepository = new TodoRepository()
        sandbox = createSandbox()
    })
    // O método afterEach é chamado depois de cada 'it' do mocka e reseta todos os valores
    afterEach(() => {
        sandbox.restore()
    })

    describe('methods signature', () => {
        it('should call find from lokijs', () => {
            const mockDatabase = [
                {
                    name: 'XuxaDaSilva',
                    age: 90,
                    meta: { revision: 0, created: 1612221989384, version: 0 },
                    '$loki': 1
                },  
            ]

            const functionName = "find"
            const expectedReturn = mockDatabase
            
            // substitui o comportamento de uma função ou propriedade
            // tem um método chamado spy que observa o com
            sandbox.stub(
                todoRepository.schedule,
                functionName
            ).returns(expectedReturn)

            const result = todoRepository.list()
            expect(result).to.be.deep.equal(expectedReturn) // deep = exatamente
            expect(todoRepository.schedule[functionName].calledOnce).to.be.ok
        })
        it('should call insertOne from lokijs', () => {
            const functionName = "insertOne"
            const expectedReturn = true
            
            sandbox.stub(
                todoRepository.schedule,
                functionName
            ).returns(expectedReturn)

            const data = { name: 'Erick'}

            const result = todoRepository.create(data)

            expect(result).to.be.ok
            expect(todoRepository.schedule[functionName].calledOnceWithExactly(data)).to.be.ok
        })
    })
})