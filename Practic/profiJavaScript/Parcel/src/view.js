//компонент отображения
export function createView(selector, onClickTodo) {
    const node = document.querySelector(selector);

    return {
        node,
        renderTodos: function({ todosIds, todosById }) {
            todosIds.forEach((id) => {
                this.addTodo(todosById[id])
            });
        },
        clearTodos: function() {
            this.node.innerHTML = ''  
        },
        //Для вывода todo поотдельности
        addTodo: function(todo) {
            const div = document.createElement('div')
            const input = document.createElement('input')
            const label = document.createElement('label')

            input.setAttribute('type', 'checkbox')
            input.setAttribute('id', todo.id)

            input.onclick = () => {
                onClickTodo(todo.id)
            }

            if(todo.done) {
                input.setAttribute('checked', true)
            }
            
            label.innerText = todo.title,
            label.setAttribute('for', todo.id)

            div.append(input, label)

            this.node.append(div)
        },
      
    };
} 