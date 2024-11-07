import { TODOS_STORAGE_KEY } from "./constans";
import { createTodosMode } from "./model";
import { createStorage } from "./storage";
import { createView } from "./view";

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const btnClearNode = document.querySelector('.js-clear-btn');

const initialTodos = [];
const model = createTodosMode(initialTodos);
const view = createView('.js-output');
const storage = createStorage(TODOS_STORAGE_KEY);

//получаем тудушки при старте из хранилища
storage.pull().then((todos) => {
    model.update(todos);
    //вызывали рендер
    view.render(model.get());
});
 

//обработчик события
btnNode.addEventListener('click', function() {
    const todo = {
        title: inputNode.value,
        status: 'active'
    };
    //тудушку в model
    model.add(todo);
    //вызывали рендер
    view.render(model.get());
    
    storage.push(todo );
});

//обработчик события - отчистки списка
btnClearNode.addEventListener('click', function() {
    storage.delete(model.get());

    model.clear();

    view.render(model.get());


});