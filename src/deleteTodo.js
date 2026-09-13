function deleteTodo (total,project,todo){
    // object.getTodos().pop();
    // return object.getTodos();

    total.getProjects()[project].getTodos().splice(todo,1);
}

export const deleter = deleteTodo;