//компонент отображения
function createView(selector) {
    const node = document.querySelector(selector);
    return {
        node,
        render: function(todos) {
            let outputListHTML = "";
            todos.forEach(function(todo) {
                outputListHTML += `<li>${todo}</li>`;
            });
            this.node.innerHTML = `<ul>${outputListHTML}</ul>`;
        }
    };
}

//# sourceMappingURL=index.a8b7953b.js.map
