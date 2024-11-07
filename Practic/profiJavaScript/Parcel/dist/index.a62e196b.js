function createTodosMode(todos) {
    return {
        todos,
        update: function(todos) {
            this.todos = todos;
        },
        add: function(todo) {
            this.todos.push(todo);
        },
        get: function() {
            return this.todos;
        },
        clear: function() {
            this.todos = [];
        }
    };
}

//# sourceMappingURL=index.a62e196b.js.map