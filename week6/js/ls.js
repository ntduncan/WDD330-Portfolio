
export const storeTodoItem = (item) => {
    let items = JSON.parse(localStorage.getItem("todoList"));
    items.push(item)
    localStorage.setItem("todoList", JSON.stringify(items));
}

export const getTodoList = () => {
    return JSON.parse(localStorage.getItem("todoList"));
}

export const setTodoList = (newList) => {
    localStorage.setItem("todoList", JSON.stringify(newList));
}
