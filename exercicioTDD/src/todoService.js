class TodoService {
    constructor({ todoRepository }) {
        this.todoRepository = todoRepository
    }

    create(todoItem) {
        
    }

    list(query) {
        return this.todoRepository.list()
            .map(({ meta, $loki, ...result }) => result)
    }
}



module.exports = TodoService