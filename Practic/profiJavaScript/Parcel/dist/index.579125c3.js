const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
const btnClearNode = document.querySelector(".js-clear-btn");
const initialTodos = [];
const model = createTodosMode(initialTodos);
const view = createView(".js-output");
const storage = createStorage(TODOS_STORAGE_KEY);
//получаем тудушки при старте из хранилища
const storageTodos = storage.pull();
//если там что-то есть обновляли
if (storageTodos) model.update(storageTodos);
//вызывали рендер
view.render(model.get());
//обработчик события
btnNode.addEventListener("click", function() {
    const todo = inputNode.value;
    //тудушку в model
    model.add(todo);
    //вызывали рендер
    view.render(model.get());
    storage.push(model.get());
});
//обработчик события
btnClearNode.addEventListener("click", function() {
    model.clear();
    view.render(model.get());
    storage.push(model.get());
});

//# sourceMappingURL=index.579125c3.js.map
