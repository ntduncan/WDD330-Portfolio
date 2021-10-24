import Todo from './ToDo.js';
import * as Ls from './ls.js';

const newTodoBtn = document.querySelector(".new-todo-btn");
const newTodo = document.querySelector("#new-todo");
const todoWindown = document.querySelector(".card-body");
const totalLeft = document.querySelector("span");

console.log(Ls.getTodoList())

let sort = 0;

/***************************
 * 
 */
const refreshTodoList = () => {
    todoWindown.innerHTML = "";
    countTodos();
    if(sort === 0) { //Sort All
        Ls.getTodoList().forEach(todo => {
            createTodoElement(todo);
        });
    } else if (sort === 1) { //Sort Active
        Ls.getTodoList().forEach(todo => {
            if(todo.isCompleted === false) {
                createTodoElement(todo);
            }
        });
        
    } else { //Sort Complete
        Ls.getTodoList().forEach(todo => {
            if(todo.isCompleted === true) {
                createTodoElement(todo);
            }
        });
    }
}

/***************************
 * 
 */
const countTodos = () => {
    let total = 0;
    const todoList = Ls.getTodoList();
    todoList.map(todo => {
        if(todo.isCompleted == false) {total++};
    })
    totalLeft.innerHTML = total;
}

/***************************
 * 
 */
const createTodoElement = (todo) => {
    // Create Todo List Item
    const listItem = document.createElement("div")
    listItem.className = "todo";

    // Add content
    const todoContent = document.createElement("h3");
    todoContent.textContent = todo.content;

    // Add Delete Button
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        Ls.setTodoList(Ls.getTodoList().splice(todo, 1));
        refreshTodoList();
    }
    
    // Create Checkbox
    const isCompleteInput = document.createElement("input")
    isCompleteInput.type = 'checkbox';
    isCompleteInput.checked = todo.isCompleted;
    isCompleteInput.value = todo.id;

    if(todo.isCompleted == true){
        listItem.classList.add("complete")
    }

    isCompleteInput.addEventListener("click", () => {
        let todoList = Ls.getTodoList();

        todoList.forEach(item => {
            if(item.id == isCompleteInput.value) {
                if(item.isCompleted == true){
                    console.log("changed to false");
                    item.isCompleted = false;
                } else {
                    console.log("changed to true");
                    item.isCompleted = true;
                }
            }
        })

        Ls.setTodoList(todoList)
        refreshTodoList();

    })

    listItem.appendChild(isCompleteInput);
    listItem.appendChild(todoContent);
    listItem.appendChild(deleteBtn);

    todoWindown.appendChild(listItem);
}


// new task btn click
newTodoBtn.addEventListener("click", () => {
    if(newTodo.value !== "") {
        const todo = new Todo(Date.now(), newTodo.value, false);
        Ls.storeTodoItem(todo);
        newTodo.value = "";
        refreshTodoList();
    }
})

document.querySelector(".all-btn").addEventListener("click", () => {
    console.log("all")
    sort = 0;
    document.querySelector(".all-btn").style = "font-size: 1.2em";
    document.querySelector(".active-btn").style = "font-size: 1em";
    document.querySelector(".completed-btn").style = "font-size: 1em";
    refreshTodoList();
})

document.querySelector(".active-btn").addEventListener("click", () => {
    console.log("active")
    sort = 1;
    document.querySelector(".all-btn").style = "font-size: 1em";
    document.querySelector(".active-btn").style = "font-size: 1.2em";
    document.querySelector(".completed-btn").style = "font-size: 1em";
    refreshTodoList();
})

document.querySelector(".completed-btn").addEventListener("click", () => {
    console.log("completed")
    sort = 2;
    document.querySelector(".all-btn").style = "font-size: 1em";
    document.querySelector(".active-btn").style = "font-size: 1em";
    document.querySelector(".completed-btn").style = "font-size: 1.2em";
    refreshTodoList();
})


refreshTodoList();








