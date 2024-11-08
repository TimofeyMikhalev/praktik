import { TODOS_STORAGE_KEY } from "./constans";
import { createTodosMode } from "./model";
import { createStorage } from "./storage";
import { createView } from "./view";

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const btnClearNode = document.querySelector('.js-clear-btn');

const initialTodos = [];
const model = createTodosMode(initialTodos);
const view = createView('.js-output', handleClickTodo);
const storage = createStorage(TODOS_STORAGE_KEY);

//получаем тудушки при старте из хранилища
storage.pull().then((todos) => {
    model.setTodos (todos);
    //вызывали рендер
    view.renderTodos(model.getTodos());
});
 

//обработчик события
btnNode.addEventListener('click', function() {
    const todoTitle = inputNode.value
    //тудушку в model
   const todo = model.addTodo({
        title: todoTitle
    });
    //вызывали рендер
    view.addTodo(todo);
    
    storage.push(todo);
});

//обработчик события - отчистки списка
btnClearNode.addEventListener('click', function() {
    storage.delete(model.getTodos());

    model.setTodos([]);

    view.clearTodos(); 
});


function handleClickTodo(id) { 
    model.toggleTodo(id)

    storage.update(model.getTodo(id))
}