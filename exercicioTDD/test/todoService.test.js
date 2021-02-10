const { describe, it, before, afterEach, } = require('mocha')
const { expect } = require('chai')
const TodoService = require('../src/todoService')
const { createSandbox } = require('sinon')

describe('todoService', () => {
    let sandbox
    
    before(() => {
        
        sandbox = createSandbox()
    })

    describe('#list', () => {
        const mockDatabase = [
            {
                name: 'XuxaDaSilva',
                age: 90,
                meta: { revision: 0, created: 1612221989384, version: 0 },
                '$loki': 1
            },  
        ]
        
        let todoService
        beforeEach(() => {
            const dependecies = {
                todoRepository: {
                    list: sandbox.stub().returns(mockDatabase)
                }
            }

            todoService = new TodoService(dependecies)
        })
        it('should return data on a specific format', () => {
            const result = todoService.list()
            const [{ meta, $loki, ...expected }] = mockDatabase
            expect(result).to.be.deep.equal([expected])


        })


    })

    describe('#create', () => {
        let todoService
        beforeEach(() => {
            const dependecies = {
                todoRepository: {
                    create: sandbox.stub().returns(true)
                }
            }
            todoService = new TodoService(dependencies)
        })

        it('should save todo item with late status when the property is turther than today')
        it('shouldn\'t save todo item with invalid data')
        it('should save todo item with pending status')
        
    })
})